# retailsalesmanagementsystem
This project is a full-stack Sales Management System using React (Vite), Node.js + Express, and MySQL. It supports viewing, searching, filtering, sorting, and paginating sales data
This project is a full-stack Sales Management System built with React, Node.js, and MySQL.

1).overview
   It allows users to view, search, filter, sort, and paginate sales records easily.
    The system is designed for the TruEstate assignment requirements.
   It follows a clean and modular architecture for easy maintenance.
   The interface is user-friendly and optimized for efficient data management.
   
2).Frontend: React (Vite), CSS, Axios
 
   Backend: Node.js, Express.js
   Database: MySQL
   ORM / Query Layer: MySQL2
   Tools: Postman, VS Code
   Version Control: Git & GitH
   
3)Search Implementation Summary

  The search feature allows users to quickly find sales records by matching keywords across fields such as customer name, product name, category, phone number, and date. The frontend sends the search query to the backend, where an SQL LIKE filter is applied. Results update instantly based on the entered keyword.
  
  4).Sorting Implementation Summary

   Sorting allows users to organize data by columns such as date, amount, category, or customer name. When a header is clicked, the frontend sends a sort field and order (ASC or DESC) to the backend. The backend applies an SQL ORDER BY clause and returns sorted results

   5).Pagination Implementation Summary
   
   Pagination breaks large datasets into smaller pages for faster loading and better usability. The frontend sends the current page number and page size to the backend. The backend uses LIMIT and OFFSET in SQL to return only the required rows, along with total pages for navigation.
  
  6) Setup Instructions

      Backend setup
         cd backend
         npm install
         npm start
         Update MySQL credentials in .env
         Import the SQL schema into your MySQL database
      Frontend setup
        cd frontend
        npm install
        npm run dev
     Start MySQL server and ensure tables are created.
     Open the browser at the Vite dev URL.
