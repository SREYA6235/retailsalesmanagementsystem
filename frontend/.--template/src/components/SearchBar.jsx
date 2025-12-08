import React from 'react';

export default function SearchBar({ value, onChange, onSubmit }) {
  return (
    <form onSubmit={(e)=> { e.preventDefault(); onSubmit(); }}>
      <input
        type="text"
        placeholder="Search by customer or phone..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{padding:'8px', width:'60%'}}
      />
      <button type="submit" style={{marginLeft:8}}>Search</button>
    </form>
  );
}