import React, { useState } from "react";

export default function FilterPanel({ onApply }) {
  const [regions, setRegions] = useState("");
  const [genders, setGenders] = useState("");
  const [categories, setCategories] = useState("");
  const [tags, setTags] = useState("");
  const [paymentMethods, setPaymentMethods] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [ageMin, setAgeMin] = useState("");
  const [ageMax, setAgeMax] = useState("");

  function apply() {
    onApply({
      regions: regions ? regions.split(",").map((s) => s.trim()) : undefined,
      genders: genders ? genders.split(",").map((s) => s.trim()) : undefined,
      categories: categories ? categories.split(",").map((s) => s.trim()) : undefined,
      tags: tags ? tags.split(",").map((s) => s.trim()) : undefined,
      paymentMethods: paymentMethods ? paymentMethods.split(",").map((s) => s.trim()) : undefined,
      dateFrom: dateFrom || undefined,
      dateTo: dateTo || undefined,
      ageMin: ageMin || undefined,
      ageMax: ageMax || undefined,
    });
  }

  const container = {
    background: "#f2f7ff",
    padding: "16px",
    marginTop: "12px",
    borderRadius: "14px",
    boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
    fontFamily: "Arial",
  };

  const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "12px",
    marginBottom: "14px",
  };

  const label = {
    fontSize: "13px",
    fontWeight: "600",
    color: "#333",
    marginBottom: "4px",
    display: "block",
  };

  const input = {
    width: "100%",
    padding: "8px 12px",
    borderRadius: "8px",
    border: "1px solid #cbd5e1",
    fontSize: "14px",
    background: "#ffffff",
    boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
  };

  // Colorful calendar input
  const dateInput = {
    ...input,
    background: "#fff0ff",
    border: "1px solid #e09aff",
  };

  const smallButton = {
    background: "linear-gradient(135deg, #6a5af9, #8a4dff)",
    padding: "8px 16px",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    width: "180px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.12)",
    transition: "0.2s",
    display: "block",
    margin: "0 auto",
  };

  return (
    <div style={container}>
      <div style={grid}>
        <div>
          <label style={label}>Regions</label>
          <input
            style={input}
            placeholder="e.g., North, South"
            value={regions}
            onChange={(e) => setRegions(e.target.value)}
          />
        </div>

        <div>
          <label style={label}>Genders</label>
          <input
            style={input}
            placeholder="e.g., Male, Female"
            value={genders}
            onChange={(e) => setGenders(e.target.value)}
          />
        </div>

        <div>
          <label style={label}>Categories</label>
          <input
            style={input}
            placeholder="e.g., Electronics, Home"
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
          />
        </div>

        <div>
          <label style={label}>Tags</label>
          <input
            style={input}
            placeholder="e.g., New, Offer, Sale"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>

        <div>
          <label style={label}>Payment Methods</label>
          <input
            style={input}
            placeholder="e.g., Cash, UPI, Card"
            value={paymentMethods}
            onChange={(e) => setPaymentMethods(e.target.value)}
          />
        </div>

        <div>
          <label style={label}>Date From</label>
          <input
            style={dateInput}
            type="date"
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
          />
        </div>

        <div>
          <label style={label}>Date To</label>
          <input
            style={dateInput}
            type="date"
            value={dateTo}
            onChange={(e) => setDateTo(e.target.value)}
          />
        </div>

        <div>
          <label style={label}>Min Age</label>
          <input
            style={input}
            placeholder="e.g., 18"
            value={ageMin}
            onChange={(e) => setAgeMin(e.target.value)}
          />
        </div>

        <div>
          <label style={label}>Max Age</label>
          <input
            style={input}
            placeholder="e.g., 60"
            value={ageMax}
            onChange={(e) => setAgeMax(e.target.value)}
          />
        </div>
      </div>

      {/* Small Apply Button */}
      <button style={smallButton} onClick={apply}>
        Apply Filters
      </button>
    </div>
  );
}
