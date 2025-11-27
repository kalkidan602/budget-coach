
"use client";

import { useState } from "react";

export default function TransactionForm(props: any) {
  const [form, setForm] = useState({
    income: "",
    frequency: "monthly",
    expenses: "",
    savingsGoal: "",
  });

  function handleChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    if (props.onCalculate) {
      props.onCalculate(form);
    }
  }

  // Simple shared style for all inputs
  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginTop: "6px",
    borderRadius: "8px",
    border: "2px solid #9ca3af",      // bold gray border
    background: "#1e293b",             // slate dark background
    color: "white",
    fontSize: "15px",
    fontWeight: "500",
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "grid", gap: "12px", maxWidth: "400px", marginTop: "16px" }}
    >
      <div>
        <label>Income Amount</label>
        <br />
        <input
          name="income"
          type="number"
          value={form.income}
          onChange={handleChange}
          placeholder="e.g. 2000"
          style={inputStyle}
        />
      </div>

      <div>
        <label>Income Frequency</label>
        <br />
        <select
          name="frequency"
          value={form.frequency}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="monthly">Monthly</option>
          <option value="weekly">Weekly</option>
        </select>
      </div>

      <div>
        <label>Total Expenses (per month)</label>
        <br />
        <input
          name="expenses"
          type="number"
          value={form.expenses}
          onChange={handleChange}
          placeholder="e.g. 1500"
          style={inputStyle}
        />
      </div>

      <div>
        <label>Savings / Investment Goal (per month)</label>
        <br />
        <input
          name="savingsGoal"
          type="number"
          value={form.savingsGoal}
          onChange={handleChange}
          placeholder="e.g. 300"
          style={inputStyle}
        />
      </div>

      <button
        type="submit"
        style={{
          padding: "10px",
          background: "#10b981",          // emerald green
          border: "none",
          borderRadius: "8px",
          color: "white",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        Calculate
      </button>
    </form>
  );
}

