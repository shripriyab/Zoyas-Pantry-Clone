import json
import requests
from bs4 import BeautifulSoup

baseurl = "https://zoyaspantry.com.au/"

headers = {
    "user-agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36'
}


def generateLinks():
    productLinks = []
    for x in range(1, 10):

        r = requests.get(f'https://zoyaspantry.com.au/shop/page/{x}')

        soup = BeautifulSoup(r.content, 'lxml')

        productList = soup.find_all('a', class_='top')

        for product in productList:
            productLinks.append(product['href'])

    return productLinks


def getProductDetails(link):
    print(link)
    r = requests.get(link, headers=headers)

    soup = BeautifulSoup(r.content, 'lxml')

    title = soup.find('h1', class_='product_title').text.strip()

    category = soup.find_all(
        'a', class_='h3 font-medium darkgrey crumb-link')[-1].text.strip()

    imageUrl = soup.find(
        'img', class_='wp-post-image').find_parent('a')['href']

    weight = soup.find('p', class_='product-weight').text.strip()

    descriptionHtml = soup.find(
        'p', class_='short-description')

    description = ''

    try:
        for span in descriptionHtml:
            description = description + span.text.strip()

    except:
        description = soup.find(
            'p', class_='short-description').text.strip()

    price = soup.find('p', class_='price').text.strip()[1:]

    if price == '':
        price = '0'

    try:
        sku = soup.find(
            'li', class_='sku_wrapper').find_next('span').text.strip()
    except:
        sku = ''

    brand = soup.find(
        'div', class_='product_meta').find_all('span')[1].text.strip()

    brand = soup.find(
        'li', class_='h5 font-regular black').find_next('span').text.strip()

    tagsHtml = soup.find(
        'ul', class_='tags').find_all('li')

    tags = []

    for li in tagsHtml:
        tags.append(li.text.strip())

    inStock = True if soup.find(
        'p', class_='single_add_to_cart_button button alt full rounded-btn') == None else False

    productInformation = soup.find('div', id='tab-description').text.strip()
    storageInstruction = soup.find(
        'div', id='tab-storage_instruction').text.strip()
    shippingInformation = soup.find(
        'div', id='tab-shipping_information').text.strip()

    product = {
        'title': title,
        'category': category,
        'imageUrl': imageUrl,
        'weight': weight,
        'shortDescription': description,
        'price': float(price),
        'meta': {
            'sku': sku,
            'brand': brand
        },
        'tags': tags,
        'inStock': inStock,
        'description': {
            'productInformation': productInformation,
            'storageInstruction': storageInstruction,
            'shippingInformation': shippingInformation
        }
    }

    return product


def main():

    data = []

    productLinks = generateLinks()

    for link in productLinks:
        product = getProductDetails(link)

        data.append(product)

    with open('data.json', 'w') as json_file:
        json.dump(data, json_file)


def getFilters():
    r = requests.get('https://zoyaspantry.com.au/shop/', headers=headers)

    soup = BeautifulSoup(r.content, 'lxml')

    filters = {}

    filtersHtml = soup.find_all('div', class_='single-filter')

    for filter in filtersHtml:
        singleFilter = filter.find(
            'h2', class_='cat-name').text.strip()

        currFilters = []

        currFiltersHtml = filter.find_all(
            'li', class_='category font-regular')

        for currF in currFiltersHtml:
            currFilters.append(currF.text.strip())

        filters[singleFilter] = currFilters

    return filters


main()

# getProductDetails(
#     'https://zoyaspantry.com.au/product/organic-black-turtle-beans-bulk-by-kg/')
