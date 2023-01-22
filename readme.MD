# Simple Node with Express Server with REST API

## Features 
- Node.js
- express
- REST API
- Mongo DB

## Requirements

- [node & npm] 
- [git]

## Installation

- `https://github.com/nithya-Developer/solula-restapi.git`
- `cd solula-restapi`
- `npm install`
- `npm start`
- optional: include _.env_ in your _.gitignore_


# API Documentations (Postman) 

## Produt Model <br />

### > List of all Product (GET)
* http://localhost:9800/products


### > List of Products wrt to category_id <br />

### i) category_id = 1 (GET)
* http://localhost:9800/products?categoryId=1 <br />

### ii) category_id = 2 (GET)
* http://localhost:9800/products?categoryId=2 <br />
### > Create a new Product (POST)
* http://localhost:9800/addProducts

body<br />
{ <br />
    "product_id": 5, <br />
    "product_name": "Women's top",<br />
    "category": "Fashion",<br />
    "qtyPerUnit": 25,<br />
    "unitPrice": 1800,<br />
    "unitInStock": 20,<br />
    "discontinued": "No",<br />
    "category_id": 1<br />
} <br />

### > Product Update one particular record by its ID (PUT)
* http://localhost:9800/updateProduct/5 <br />
body <br> { <br>
        "product_name",<br>
        "qty_per_unit",<br>
        "unit_price",<br>
        "unit_in_stock",<br>
        "discontinued"<br>
}
### Delete one record of the product by its ID (Delete)
* http://localhost:9800/deleteProduct/63cd39ab4ba4b5e2fcf0e993

<hr/>

## Category Model <br />

### > List of all category (GET)
* http://localhost:9800/categories <br />

### > Create a new Category (POST)
* http://localhost:9800/Addcategories <br />

body <br/> 
{ <br/>
"category_id": 3,<br/>
"categoryName": "Furniture"<br/>
}<br/>

### Delete one record of the category by its ID (Delete)
* http://localhost:9800/deleteCategory/63cd0999c6808b5c7ed51587