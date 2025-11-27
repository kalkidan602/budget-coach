// app/add/page.tsx
"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import TransactionForm from "@/components/TransactionForm";

export default function AddPage() {
  const [summary, setSummary] = useState<any | null>(null);

  function handleCalculate(form: any) {
    const income = parseFloat(form.income) || 0;
    const expenses = parseFloat(form.expenses) || 0;
    const savings = parseFloat(form.savingsGoal) || 0;

    const monthlyIncome =
      form.frequency === "weekly" ? income * 4 : income;

    const remaining = monthlyIncome - expenses;

    setSummary({
      monthlyIncome,
      expenses,
      savings,
      remaining,
      frequency: form.frequency,
    });
  }

  return (
    <main>
      <PageHeader
        title="Add Transaction"
        subtitle="Enter your income, expenses, and savings goal to get a simple monthly summary."
      />

      <TransactionForm onCalculate={handleCalculate} />

      {summary && (
        <section style={{ marginTop: "20px" }}>
          <h2>Budget Summary</h2>
          <p>
            Monthly income (based on {summary.frequency}):{" "}
            {summary.monthlyIncome}
          </p>
          <p>Monthly expenses: {summary.expenses}</p>
          <p>Money left after expenses: {summary.remaining}</p>
          <p>Planned savings goal: {summary.savings}</p>

          <h3>Coach tip:</h3>
          <p>
            {summary.remaining < 0
              ? "Your expenses are higher than your income. Consider reducing some costs."
              : summary.remaining < summary.savings
              ? "You have some money left, but it’s not enough to fully reach your savings goal yet."
              : "You are on track to reach your savings goal. Nice job keeping your expenses under control!"}
          </p>
        </section>
      )}
    </main>
  );
}


