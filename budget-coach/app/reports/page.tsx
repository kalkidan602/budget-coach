"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";

export default function ReportsPage() {
  const [view, setView] = useState<"income" | "expenses">("income");

  return (
    <main>
      <PageHeader
        title="Reports & Insights"
        subtitle="Simple guidance based on your income and expenses."
      />

      <div style={{ marginBottom: "16px", display: "flex", gap: "8px" }}>
        <button
          onClick={() => setView("income")}
          style={{
            padding: "8px 12px",
            borderRadius: "6px",
            border: "none",
            background: view === "income" ? "#10b981" : "#334155",
            color: "white",
            cursor: "pointer",
          }}
        >
          Income tips
        </button>
        <button
          onClick={() => setView("expenses")}
          style={{
            padding: "8px 12px",
            borderRadius: "6px",
            border: "none",
            background: view === "expenses" ? "#10b981" : "#334155",
            color: "white",
            cursor: "pointer",
          }}
        >
          Expense tips
        </button>
      </div>

      {view === "income" ? (
        <p>
          When your income grows, try to increase your savings rate instead of
          increasing your lifestyle too quickly. Even a small increase in your
          savings percentage can make a big difference over time.
        </p>
      ) : (
        <p>
          Review your biggest expense categories and see if there are 1–2 areas
          where you can make small cuts each month. Consistent small reductions
          are easier to maintain than one big drastic change.
        </p>
      )}
    </main>
  );
}

