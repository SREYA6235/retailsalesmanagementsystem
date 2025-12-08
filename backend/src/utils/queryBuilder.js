// backend/src/utils/queryBuilder.js

function buildWhereAndParams(query) {
  const where = [];
  const params = [];

  // Search by customer name or phone
  if (query.search) {
    where.push(`(LOWER(c.name) LIKE ? OR c.phone LIKE ?)`);
    const s = `%${query.search.toLowerCase()}%`;
    params.push(s, `%${query.search}%`);
  }

  // Filter: regions
  if (query.regions) {
    const regions = Array.isArray(query.regions) ? query.regions : [query.regions];
    where.push(`c.region IN (${regions.map(() => '?').join(',')})`);
    params.push(...regions);
  }

  // Filter: genders
  if (query.genders) {
    const genders = Array.isArray(query.genders) ? query.genders : [query.genders];
    where.push(`c.gender IN (${genders.map(() => '?').join(',')})`);
    params.push(...genders);
  }

  // Filter: categories
  if (query.categories) {
    const cats = Array.isArray(query.categories) ? query.categories : [query.categories];
    where.push(`p.category IN (${cats.map(() => '?').join(',')})`);
    params.push(...cats);
  }

  // Filter: tags (comma-separated)
  if (query.tags) {
    const tags = Array.isArray(query.tags) ? query.tags : [query.tags];
    const tagConds = tags.map(() => 'FIND_IN_SET(?, p.tags)').join(' OR ');
    where.push(`(${tagConds})`);
    params.push(...tags);
  }

  // Filter: payment methods
  if (query.paymentMethods) {
    const pays = Array.isArray(query.paymentMethods) ? query.paymentMethods : [query.paymentMethods];
    where.push(`s.payment_method IN (${pays.map(() => '?').join(',')})`);
    params.push(...pays);
  }

  // Date range
  if (query.dateFrom) { where.push(`s.date >= ?`); params.push(query.dateFrom); }
  if (query.dateTo) { where.push(`s.date <= ?`); params.push(query.dateTo); }

  // Age range
  if (query.ageMin) { where.push(`c.age >= ?`); params.push(parseInt(query.ageMin)); }
  if (query.ageMax) { where.push(`c.age <= ?`); params.push(parseInt(query.ageMax)); }

  const whereSql = where.length ? `WHERE ${where.join(' AND ')}` : '';
  return { whereSql, params };
}

module.exports = { buildWhereAndParams };
