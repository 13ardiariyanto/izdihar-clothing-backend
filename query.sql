CREATE TABLE category(
    id INT PRIMARY KEY NOT NULL GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(64) NOT NULL
);

CREATE TABLE contact(id SERIAL PRIMARY KEY NOT NULL, userid VARCHAR, address VARCHAR, zip VARCHAR, city_subdistrict VARCHAR, recipients_name VARCHAR, recipients_phone VARCHAR);

INSERT INTO category(name)VALUES('t-shirt');

SELECT products.*, category.name,  FROM products INNER JOIN category ON products.id_category = category.id;
SELECT products.*, users.id, users.name FROM products INNER JOIN users ON products.userid = users.id;
SELECT products.*, users.id, users.name FROM products INNER JOIN users ON products.userid = users.id;
SELECT users.*, contact.recipients_name, contact.recipients_number, contact.address, contact.zip, contact.city_subditrict FROM users ON users.id_contact = contact.id;
SELECT mybag.*, products.name, products.photo, products.price, users.name, users.address FROM products INNER JOIN users ON products.userid = users.id FROM mybag INNER JOIN
products ON id_product = products.id INNER JOIN mybag ON id_user = users.id;

CREATE TABLE transactions(
    id INT PRIMARY KEY NOT NULL GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(64) NOT NULL,
    total_order INT DEFAULT 0,
    price INT DEFAULT 0,
    total_price INT DEFAULT 0
);

INSERT INTO transactions(name, total_order, price, total_price)VALUES('hoodie', 1, 250000, 250000)

-- DATABASE BARU

CREATE TABLE products(id SERIAL PRIMARY KEY, 
name VARCHAR(64) NOT NULL, 
brand VARCHAR(64), 
condition VARCHAR(64), 
description VARCHAR(256), 
stock INT DEFAULT 0, 
id_category INT NOT NULL);
ALTER TABLE products ADD price INT DEFAULT 0;

CREATE TABLE category(id SERIAL PRIMARY KEY, name VARCHAR(64) NOT NULL);

CREATE TABLE transactions(id SERIAL PRIMARY KEY, id_product INT NOT NULL, id_user INT NOT NULL, amount INT DEFAULT 0, price INT DEFAULT 0, total INT DEFAULT 0);

CREATE TABLE users(id SERIAL, FullName VARCHAR (64), email VARCHAR (64) NOT NULL, role VARCHAR (16), password VARCHAR (64) NOT NULL, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, update_at TIMESTAMP, PRIMARY KEY (id));

INSERT INTO users(FullName, email, role, password)VALUES('Irfan Julian', 'ivan.lookkas@gmail.com', 'admin', 'asdqwe');

INSERT INTO transactions(id_product, id_user, amount, price, total)VALUES(1, 1, 1, 0, 0);

SELECT products.*, category.name AS category FROM products INNER JOIN category ON products.id_category = category.id;

SELECT transactions.*, products.name AS name_product

ALTER TABLE users ADD phone_number INT;

ALTER TABLE users ADD gender VARCHAR(64);

INSERT INTO users(fullname, email, role, password, phone_number, gender)VALUES('Muthia', 'muthia@id.id', 'admin', 'abcaa', 612345679, 'female');

CREATE TABLE users(id VARCHAR PRIMARY KEY, name VARCHAR NOT NULL, email VARCHAR NOT NULL, password VARCHAR NOT NULL, role VARCHAR NOT NULL, phone VARCHAR NOT NULL, gender VARCHAR NOT NULL);

CREATE TABLE products(id SERIAL PRIMARY KEY, name VARCHAR NOT NULL, brand VARCHAR, condition VARCHAR, description VARCHAR, stock INT DEFAULT 0, id_category INT NOT NULL, price INT DEFAULT 0, photo VARCHAR);

INSERT INTO users(id, name, email, password, role, phone, gender)VALUES(1, 'irfan', 'irfan@id.id', 'asdqwe', 'admin', '0812345678', 'male');

INSERT INTO products(name,brand,condition,description,stock,id_category,price,photo)VALUES('hoodie','347','New','New product from 347',30,3,240000,'PhotoHood13');

ALTER TABLE products ADD photo VARCHAR;

CREATE TABLE products(id SERIAL PRIMARY KEY, name VARCHAR NOT NULL, brand VARCHAR, condition VARCHAR, description VARCHAR, stock INT DEFAULT 0, id_category INT NOT NULL, price INT DEFAULT 0, photo VARCHAR);

CREATE TABLE category(id SERIAL PRIMARY KEY, name VARCHAR(64) NOT NULL);

CREATE TABLE users(id VARCHAR PRIMARY KEY, name VARCHAR NOT NULL, email VARCHAR NOT NULL, password VARCHAR NOT NULL, role VARCHAR NOT NULL, phone VARCHAR NOT NULL, gender VARCHAR NOT NULL, photo VARCHAR);

CREATE TABLE transactions(id SERIAL PRIMARY KEY, id_product INT NOT NULL, id_user INT NOT NULL, amount INT DEFAULT 0, price INT DEFAULT 0, total INT DEFAULT 0);


----------- New Database -----------

INSERT INTO category(name)VALUES('t-shirt');
INSERT INTO category(name)VALUES('short');
INSERT INTO category(name)VALUES('jacket');
INSERT INTO category(name)VALUES('pants');
INSERT INTO category(name)VALUES('shoes');
INSERT INTO category(name)VALUES('dress');
INSERT INTO category(name)VALUES('suit');

SELECT transaction.*, product.name, product.brand, product.price FROM transaction INNER JOIN product ON transaction.id_product = product.id;

SELECT users.*, contact.address, contact.zip, contact.city, contact.recipient_name, contact.recipient_phone FROM users INNER JOIN contact ON contact.id = user.id_contact WHERE users.id = contact.id_user;

SELECT transaction.*, product.name AS product_name, product.brand, product.price, product.photo AS product_photo, users.name, contact.address, contact.zip, contact.city FROM transaction INNER JOIN product ON product.id = transaction.id_product INNER JOIN users ON users.id = transaction.id_customer INNER JOIN contact ON users.id_contact = contact.id;

SELECT transaction.*, product.name AS product_name, product.price, product.brand, product.photo, contact.address, contact.zip, contact.city, contact.recipient_name, contact.recipient_phone FROM transaction INNER JOIN product ON product.id = transaction.id_product INNER JOIN contact ON transaction.id_customer = id_customer;

CREATE TABLE users(id VARCHAR PRIMARY KEY, name VARCHAR, email VARCHAR, password VARCHAR, phone_number VARCHAR DEFAULT NULL, role VARCHAR, gender VARCHAR, photo VARCHAR, birth VARCHAR DEFAULT NULL, store_description VARCHAR DEFAULT NULL, store_name VARCHAR DEFAULT NULL, address VARCHAR DEFAULT NULL, zip VARCHAR DEFAULT NULL, city VARCHAR DEFAULT NULL, recipient_name VARCHAR DEFAULT NULL, recipient_phone VARCHAR DEFAULT NULL);

SELECT transaction.*, product.name, product.brand, product.photo, product.price, users.address, users.zip, users.city, users.reciient_name, users.recipient_name FROM transaction INNER JOIN product ON transaction.id_product INNER JOIN users ON transaction.id_customer = users.id WHERE transaction.id_product = '';
SELECT checkout.*, transaction.name, transaction.address FROM checkout INNER JOIN transaction WHERE transaction.id = 1;
SELECT checkout.*, product.name, product.price, product.photo, product.brand, users.recipient_name, users.address, users.zip, users.city FROM checkout INNER JOIN product ON product.id = checkout.id_product INNER JOIN users ON users.id = checkout.id_user WHERE checkuot.id = 4;

SELECT checkout.*, product.name AS product_name, product.photo, product.brand, product.price, users.name, users.address, users.zip, users.city, users.phone_number, transaction.total_price FROM checkout INNER JOIN product ON product.id = checkout.id_product INNER JOIN users ON users.id = checkout.id_user INNER JOIN transaction ON transaction.id = checkout.id_transaction WHERE checkout.id_seller = '9f9158f2-67ec-4f0d-8f8e-41e676e86545';

SELECT checkout.*, product.name, product.price, product.brand, product.photo FROM checkout INNER JOIN product ON product.id = checkout.id_product WHERE checkout.id_user = 