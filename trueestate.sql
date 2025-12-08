drop database trueestate;
-- Create Database
CREATE DATABASE IF NOT EXISTS trueestate;
USE trueestate;

-- Customers Table
CREATE TABLE customers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_id VARCHAR(50) UNIQUE,
  name VARCHAR(255),
  phone VARCHAR(50),
  gender VARCHAR(20),
  age INT,
  region VARCHAR(100),
  customer_type VARCHAR(50)
);

-- Products Table
CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_id VARCHAR(50) UNIQUE,
  name VARCHAR(255),
  brand VARCHAR(100),
  category VARCHAR(100),
  tags VARCHAR(500)
);

-- Stores Table
CREATE TABLE stores (
  id INT AUTO_INCREMENT PRIMARY KEY,
  store_id VARCHAR(50) UNIQUE,
  location VARCHAR(255)
);

-- Employees Table
CREATE TABLE employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  salesperson_id VARCHAR(50) UNIQUE,
  employee_name VARCHAR(255)
);

-- Sales Table
CREATE TABLE sales (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_id VARCHAR(50),
  product_id VARCHAR(50),
  quantity INT,
  price_per_unit DECIMAL(10,2),
  discount_percentage DECIMAL(5,2),
  total_amount DECIMAL(12,2),
  final_amount DECIMAL(12,2),
  date DATE,
  payment_method VARCHAR(50),
  order_status VARCHAR(50),
  delivery_type VARCHAR(50),
  store_id VARCHAR(50),
  salesperson_id VARCHAR(50)
);

-- Insert Customers
INSERT INTO customers (customer_id, name, phone, gender, age, region, customer_type)
VALUES
('CUST001','Ravi','9876543210','Female',29,'North','Retail'),
('CUST002','Sreya','9123456789','Male',35,'South','Wholesale');

-- Insert Products
INSERT INTO products (product_id, name, brand, category, tags)
VALUES
('PROD001','Floor Tile A','BrandX','Tiles','ceramic,home'),
('PROD002','Wash Basin B','BrandY','Sanitary','bath,ceramic');

-- Insert Stores
INSERT INTO stores (store_id, location)
VALUES 
('STORE001','Kannur'),
('STORE002','Kozhikode');

-- Insert Employees
INSERT INTO employees (salesperson_id, employee_name)
VALUES 
('EMP001','Rahul'),
('EMP002','Leena');

-- Insert Sales
INSERT INTO sales (customer_id, product_id, quantity, price_per_unit, discount_percentage, total_amount, final_amount, date, payment_method, order_status, delivery_type, store_id, salesperson_id)
VALUES
('CUST001','PROD001',2,500.00,5.0,1000.00,950.00,'2025-11-25','Card','Delivered','Home','STORE001','EMP001'),
('CUST002','PROD002',1,1200.00,0.0,1200.00,1200.00,'2025-12-01','Cash','Pending','Pickup','STORE002','EMP002');
