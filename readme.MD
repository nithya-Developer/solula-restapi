## API Documentations (Postman) 

### > List of all Product (GET)
* http://localhost:9800/products

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



### > List of Products wrt to category_id <br />
### i) category_id = 1 (GET)
* http://localhost:9800/products?categoryId=1 <br />

### ii) category_id = 2 (GET)
* http://localhost:9800/products?categoryId=2 <br />

### > List of all category (GET)
* http://localhost:9800/categories <br />

### > Create a new Category (POST)
* http://localhost:9800/Addcategories <br />

body <br/> 
{ <br/>
"category_id": 3,<br/>
"categoryName": "Furniture"<br/>
}<br/>
