drop database trueestate;
DROP DATABASE IF EXISTS trueestate;


CREATE DATABASE IF NOT EXISTS trueestate;
USE trueestate;


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


CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_id VARCHAR(50) UNIQUE,
  name VARCHAR(255),
  brand VARCHAR(100),
  category VARCHAR(100),
  tags VARCHAR(500)
);

CREATE TABLE stores (
  id INT AUTO_INCREMENT PRIMARY KEY,
  store_id VARCHAR(50) UNIQUE,
  location VARCHAR(255)
);


CREATE TABLE employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  salesperson_id VARCHAR(50) UNIQUE,
  employee_name VARCHAR(255)
);


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


INSERT INTO customers (customer_id, name, phone, gender, age, region, customer_type)
VALUES
('CUST001','Sreya','9876543210','Female',25,'North','Retail'),
('CUST002','Arav','9123456789','Male',27,'South','Wholesale'),
('CUST003','Adithithi','9898989898','Female',24,'East','Retail'),
('CUST004','Rohan','9000000001','Male',30,'West','Retail'),
('CUST005','Shreya','9555555555','Female',22,'North','Wholesale'),
('CUST006','Vaibhav','9666666666','Male',28,'South','Retail'),
('CUST007','Bhavya','9777777777','Female',29,'East','Wholesale'),
('CUST008','Hari','9888888888','Male',26,'West','Retail'),
('CUST009','Kiran','9999999999','Male',32,'South','Retail'),
('CUST010','Karan','9111111111','Male',31,'North','Wholesale');


INSERT INTO products (product_id, name, brand, category, tags)
VALUES
('PROD001','Floor Tile A','BrandX','Tiles','ceramic,home'),
('PROD002','Wash Basin B','BrandY','Sanitary','bath,ceramic');


INSERT INTO stores (store_id, location)
VALUES 
('STORE001','Kannur'),
('STORE002','Kozhikode');


INSERT INTO employees (salesperson_id, employee_name)
VALUES 
('EMP001','Rahul'),
('EMP002','Leena');
INSERT INTO sales 
(customer_id, product_id, quantity, price_per_unit, discount_percentage, total_amount, final_amount, date, payment_method, order_status, delivery_type, store_id, salesperson_id)
VALUES
('CUST001','PROD001',2,500.00,5.0,1000.00,950.00,'2025-11-25','Card','Delivered','Home','STORE001','EMP001'),
('CUST002','PROD002',1,1200.00,0.0,1200.00,1200.00,'2025-12-01','Cash','Pending','Pickup','STORE002','EMP002'),
('CUST003','PROD001',3,500.00,10.0,1500.00,1350.00,'2025-11-20','UPI','Processing','Home','STORE001','EMP001'),
('CUST004','PROD002',2,1200.00,5.0,2400.00,2280.00,'2025-12-02','Card','Delivered','Pickup','STORE001','EMP002'),
('CUST005','PROD001',1,500.00,0.0,500.00,500.00,'2025-11-22','Cash','Delivered','Home','STORE002','EMP001'),
('CUST006','PROD002',3,1200.00,8.0,3600.00,3312.00,'2025-11-30','Credit','Pending','Pickup','STORE001','EMP002'),
('CUST007','PROD001',4,500.00,12.0,2000.00,1760.00,'2025-11-18','UPI','Delivered','Home','STORE002','EMP002'),
('CUST008','PROD002',1,1200.00,0.0,1200.00,1200.00,'2025-12-04','Card','Delivered','Pickup','STORE001','EMP001'),
('CUST009','PROD001',2,500.00,5.0,1000.00,950.00,'2025-11-28','Cash','Processing','Home','STORE002','EMP001'),
('CUST010','PROD002',2,1200.00,10.0,2400.00,2160.00,'2025-12-05','Credit','Delivered','Pickup','STORE001','EMP002');

