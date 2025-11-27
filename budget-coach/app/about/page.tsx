"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import TransactionForm from "@/components/TransactionForm";

export default function AddPage() {
  const [summary, setSummary] = useState<any | null>(null);

  function handleCalculate(result: any) {
    setSummary(result);
  }

  return (
    <main>
      <PageHeader
        title="Add Transaction"
        subtitle="Enter your income, expenses, and savings goal to get a simple budget summary."
      />

      <TransactionForm onCalculate={handleCalculate} />

      {summary && (
        <section style={{ marginTop: "24px" }}>
          <h2>Budget Coach Summary</h2>
          <ul>
            <li>
              Monthly income (based on {summary.frequency}):{" "}
              {summary.monthlyIncome}
            </li>
            <li>Monthly expenses: {summary.monthlyExpenses}</li>
            <li>Planned savings goal: {summary.savingsGoal}</li>
            <li>Money left after expenses: {summary.remaining}</li>
            <li>
              Coach tip:{" "}
              {summary.remaining < 0
                ? "Your expenses are higher than your income. Consider reducing some costs."
                : summary.remaining < summary.savingsGoal
                ? "You have some money left, but it’s not enough to fully reach your savings goal yet."
                : "You are on track to reach your savings goal. Nice job keeping your expenses under control!"}
            </li>
          </ul>
        </section>
      )}
    </main>
  );
}
