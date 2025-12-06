"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";

const sampleTransactions = [
  { label: "Groceries", amount: 120, date: "2025-01-05" },
  { label: "Rent", amount: 900, date: "2025-01-01" },
  { label: "Coffee", amount: 12, date: "2025-01-10" },
];

export default function ReportsPage() {
  const [view, setView] = useState<"income" | "expenses">("income");

  return (
    <main>
      <PageHeader
        title="Reports & Insights"
        subtitle="Simple budgeting guidance based on income and expenses."
      />

      {/* Toggle buttons */}
      <div className="mb-4 flex gap-2">
        <button
          onClick={() => setView("income")}
          className={`px-3 py-2 rounded-md text-sm font-medium text-white transition ${
            view === "income"
              ? "bg-emerald-600"
              : "bg-slate-700 hover:bg-slate-600"
          }`}
        >
          Income tips
        </button>
        <button
          onClick={() => setView("expenses")}
          className={`px-3 py-2 rounded-md text-sm font-medium text-white transition ${
            view === "expenses"
              ? "bg-emerald-600"
              : "bg-slate-700 hover:bg-slate-600"
          }`}
        >
          Expense tips
        </button>
      </div>

      {/* Tip content */}
      {view === "income" ? (
        <p className="text-sm text-slate-200">
          When your income grows, try to increase your savings rate instead of
          increasing your lifestyle too quickly...
        </p>
      ) : (
        <p className="text-sm text-slate-200">
          Review your biggest expense categories and see if there are 1–2 areas
          where you can make small cuts each month...
        </p>
      )}
    </main>
  );
}


