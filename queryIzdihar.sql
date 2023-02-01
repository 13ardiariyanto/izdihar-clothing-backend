CREATE TABLE product(id SERIAL PRIMARY KEY, name TEXT, id_seller TEXT, description TEXT, photo TEXT, brand TEXT, category TEXT, stock INTEGER, price INTEGER, size TEXT);

CREATE TABLE category(id SERIAL PRIMARY KEY, name TEXT);

CREATE TABLE users(id TEXT, name TEXT, email TEXT, password TEXT, phone_number TEXT, role TEXT DEFAULT '', birth TEXT DEFAULT '', photo TEXT DEFAULT '');

CREATE TABLE transactions(id SERIAL PRIMARY KEY, id_customer TEXT, id_product INTEGER, qty INTEGER, total_price INTEGER);