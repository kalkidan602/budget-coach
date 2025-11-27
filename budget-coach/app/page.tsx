"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import SummaryCard from "@/components/SummaryCard";

export default function HomePage() {
  const [view, setView] = useState("monthly"); // "monthly" or "weekly"

  // Base monthly values
  const monthlyIncome = 2500;
  const monthlyExpenses = 1750;
  const monthlyBalance = monthlyIncome - monthlyExpenses;

  // If user chooses weekly, divide by 4 (simple approximation)
  const factor = view === "monthly" ? 1 : 1 / 4;

  const incomeToShow = monthlyIncome * factor;
  const expensesToShow = monthlyExpenses * factor;
  const balanceToShow = monthlyBalance * factor;

  return (
    <main>
      <PageHeader
        title="Dashboard"
        subtitle={
          view === "monthly"
            ? "Overview of your budget, income, and expenses per month."
            : "Overview of your budget, income, and expenses per week (approximate)."
        }
      />

      {/* Interactive control */}
      <div style={{ marginBottom: "16px" }}>
        <label>View mode: </label>
        <select
          value={view}
          onChange={(e) => setView(e.target.value)}
          style={{
            padding: "6px",
            borderRadius: "6px",
            border: "1px solid #9ca3af",
            background: "#1e293b",
            color: "white",
          }}
        >
          <option value="monthly">Monthly</option>
          <option value="weekly">Weekly</option>
        </select>
      </div>

      {/* Responsive grid for summary cards */}
      <section className="grid gap-4 md:grid-cols-3">
        <SummaryCard
          label={
            view === "monthly"
              ? "Total Income (per month)"
              : "Total Income (per week)"
          }
          amount={incomeToShow.toFixed(0)}
        />
        <SummaryCard
          label={
            view === "monthly"
              ? "Total Expenses (per month)"
              : "Total Expenses (per week)"
          }
          amount={expensesToShow.toFixed(0)}
        />
        <SummaryCard
          label={
            view === "monthly"
              ? "Balance (per month)"
              : "Balance (per week)"
          }
          amount={balanceToShow.toFixed(0)}
        />
      </section>
    </main>
  );
}
