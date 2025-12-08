// backend/src/controllers/salesController.js

const pool = require('../services/db');
const { buildWhereAndParams } = require('../utils/queryBuilder');

async function getSales(req, res) {
  try {
    const {
      page = 1,
      pageSize = 10,
      sortBy = 'date',
      sortOrder = 'desc',
      search,
      regions,
      genders,
      categories,
      tags,
      paymentMethods,
      dateFrom,
      dateTo,
      ageMin,
      ageMax
    } = req.query;

    const filters = { search, regions, genders, categories, tags, paymentMethods, dateFrom, dateTo, ageMin, ageMax };

    // Build WHERE and parameters
    const { whereSql, params } = buildWhereAndParams(filters);

    // Sorting whitelist
    const sortWhitelist = { date: 's.date', quantity: 's.quantity', customerName: 'c.name' };
    const sortField = sortWhitelist[sortBy] || 's.date';
    const sortDir = sortOrder.toLowerCase() === 'asc' ? 'ASC' : 'DESC';

    // Total count
    const countSql = `
      SELECT COUNT(*) as total
      FROM sales s
      LEFT JOIN customers c ON s.customer_id = c.customer_id
      LEFT JOIN products p ON s.product_id = p.product_id
      ${whereSql}
    `;
    const [countRows] = await pool.query(countSql, params);
    const total = countRows[0].total;

    // Pagination
    const offset = (parseInt(page) - 1) * parseInt(pageSize);
    const dataSql = `
      SELECT s.*, c.name as customer_name, c.phone, c.region, p.name as product_name, p.brand, p.category, p.tags
      FROM sales s
      LEFT JOIN customers c ON s.customer_id = c.customer_id
      LEFT JOIN products p ON s.product_id = p.product_id
      ${whereSql}
      ORDER BY ${sortField} ${sortDir}
      LIMIT ? OFFSET ?
    `;
    const finalParams = params.concat([parseInt(pageSize), offset]);
    const [rows] = await pool.query(dataSql, finalParams);

    res.json({
      page: parseInt(page),
      pageSize: parseInt(pageSize),
      total,
      totalPages: Math.ceil(total / pageSize),
      data: rows
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
}

module.exports = { getSales };
