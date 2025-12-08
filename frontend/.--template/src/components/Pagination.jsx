import React from 'react';
export default function Pagination({page, totalPages, onPageChange}) {
  return (
    <div style={{marginTop:12}}>
      <button onClick={()=>onPageChange(page-1)} disabled={page<=1}>Previous</button>
      <span style={{margin:'0 8px'}}>Page {page} of {totalPages}</span>
      <button onClick={()=>onPageChange(page+1)} disabled={page>=totalPages}>Next</button>
    </div>
  );
}