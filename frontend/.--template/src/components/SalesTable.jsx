import React, { useState } from "react";

export default function SalesDashboard({ data }) {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterDate, setFilterDate] = useState("");

  // Filtered data logic
  const filteredData = data.filter((row) => {
    const matchesSearch =
      row.customer_name.toLowerCase().includes(search.toLowerCase()) ||
      row.product_name.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      filterStatus === "" || row.order_status === filterStatus;

    const matchesDate = filterDate === "" || row.date === filterDate;

    return matchesSearch && matchesStatus && matchesDate;
  });

  return (
    <div
      style={{
        padding: 20,
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f7f9fc",
      }}
    >
      {/* Title */}
      <h1
        style={{
          textAlign: "center",
          color: "#34886fff",
          fontSize: 36,
          fontWeight: "bold",
          marginBottom: 20,
          textShadow: "1px 1px 5px #ccc",
        }}
      >
        TruEstate — Sales Dashboard
      </h1>

      {/* Filters Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 15,
          marginBottom: 30,
        }}
      >
        {/* Search Box */}
        <input
          type="text"
          placeholder="🔍 Search customer or product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "12px 15px",
            borderRadius: 10,
            border: "1px solid #ccc",
            fontSize: 16,
            width: 250,
            background: "#fff",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        />

        {/* Status Filter */}
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          style={{
            padding: "12px 15px",
            borderRadius: 10,
            border: "1px solid #ccc",
            fontSize: 16,
            width: 200,
            background: "#fff",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <option value="">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Delivered">Delivered</option>
        </select>

        {/* Date Picker */}
        <input
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
          style={{
            padding: "12px 15px",
            borderRadius: 10,
            border: "1px solid #ccc",
            fontSize: 16,
            background: "#fff",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            cursor: "pointer",
          }}
        />
      </div>

      {/* Table */}
      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "separate",
            borderSpacing: 0,
            borderRadius: 12,
            overflow: "hidden",
            backgroundColor: "#ffffff",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            fontSize: 15,
          }}
        >
          <thead>
            <tr
              style={{
                background: "linear-gradient(90deg, #6c5ce7, #a55eea)",
                color: "#ffffff",
                textAlign: "center",
              }}
            >
              <th style={{ padding: "14px" }}>Date & Time</th>
              <th>Customer</th>
              <th>Phone</th>
              <th>Product</th>
              <th>Category</th>
              <th>Quantity&nbsp;&nbsp;</th>
              <th>Final amount&nbsp;&nbsp;</th>
              <th>Payment</th>
              <th>Store</th>
              <th>Salesperson</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.length === 0 ? (
              <tr>
                <td
                  colSpan="11"
                  style={{
                    textAlign: "center",
                    padding: 25,
                    color: "#666",
                    backgroundColor: "#f1f2f6",
                  }}
                >
                  No results found.
                </td>
              </tr>
            ) : (
              filteredData.map((row, idx) => (
                <tr
                  key={row.id}
                  style={{
                    backgroundColor:
                      idx % 2 === 0 ? "#f7f9fc" : "#ffffff",
                    transition: "0.25s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#ffeaa7")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      idx % 2 === 0 ? "#f7f9fc" : "#ffffff")
                  }
                >
                  <td style={{ padding: 12, textAlign: "center" }}>
                    {row.date}
                  </td>

                  <td
                    style={{
                      padding: 12,
                      fontWeight: 600,
                      color: "#2d3436",
                    }}
                  >
                    {row.customer_name}
                  </td>

                  <td style={{ padding: 12, color: "#636e72" }}>
                    {row.phone}
                  </td>

                  <td style={{ padding: 12 }}>{row.product_name}</td>

                  <td style={{ padding: 12 }}>{row.category}</td>

                  <td
                    style={{
                      padding: 12,
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    {row.quantity}
                  </td>

                  <td
                    style={{
                      padding: 12,
                      textAlign: "right",
                      fontWeight: "bold",
                      color: "#09e3a5ff",
                    }}
                  >
                    {row.final_amount}
                  </td>

                  <td style={{ padding: 12 }}>{row.payment_method}</td>

                  <td style={{ padding: 12 }}>{row.store_id}</td>

                  <td style={{ padding: 12 }}>{row.salesperson_id}</td>

                  <td style={{ padding: 12, textAlign: "center" }}>
                    <span
                      style={{
                        padding: "6px 14px",
                        borderRadius: 20,
                        fontWeight: "bold",
                        backgroundColor:
                          row.order_status === "Delivered"
                            ? "rgba(46, 204, 113,0.2)"
                            : "rgba(231, 76, 60,0.2)",
                        color:
                          row.order_status === "Delivered"
                            ? "#27ae60"
                            : "#c0392b",
                      }}
                    >
                      {row.order_status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
