import React from 'react';

export default function SortDropdown({sortBy, setSortBy, sortOrder, setSortOrder}) {
  return (
    <div>
      <select value={sortBy} onChange={e=>setSortBy(e.target.value)}>
        <option value="date">Date (Newest)</option>
        <option value="quantity">Quantity</option>
        <option value="customerName">Customer Name (A–Z)</option>
      </select>

      <select value={sortOrder} onChange={e=>setSortOrder(e.target.value)}>
        <option value="desc">Desc</option>
        <option value="asc">Asc</option>
      </select>
    </div>
  );
}