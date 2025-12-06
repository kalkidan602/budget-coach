// app/add/page.tsx
"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import TransactionForm from "@/components/TransactionForm";



type FormValues = {
  income: string;
  frequency: string;
  expenses: string;
  savingsGoal: string;
};

type Summary = {
  monthlyIncome: number;
  monthlyExpenses: number;
  savingsGoal: number;
  remaining: number;
  frequency: string;
};

export default function AddPage() {
  const [summary, setSummary] = useState<Summary | null>(null);

  function handleCalculate(form: FormValues) {
    const income = parseFloat(form.income) || 0;
    const expenses = parseFloat(form.expenses) || 0;
    const savings = parseFloat(form.savingsGoal) || 0;

    // Convert income to monthly if needed
    const monthlyIncome =
      form.frequency === "weekly" ? income * 4 : income;

    const monthlyExpenses = expenses; // already monthly in your label
    const remaining = monthlyIncome - monthlyExpenses;

    setSummary({
      monthlyIncome,
      monthlyExpenses,
      savingsGoal: savings,
      remaining,
      frequency: form.frequency,
    });
  }

  return (
    <main>
      <PageHeader
        title="Add Transaction"
        subtitle="Enter your income, expenses, and savings goal to get a simple budget summary."
      />

      <TransactionForm onCalculate={handleCalculate} />

      {summary && (
        <section className="mt-6 rounded-xl border border-slate-700 bg-slate-900/80 p-4 space-y-2">
          <h2 className="text-lg font-semibold mb-1">
            Budget Coach Summary
          </h2>

          <ul className="space-y-1 text-sm text-slate-200">
            <li>
              Monthly income (based on{" "}
              <span className="font-semibold">
                {summary.frequency}
              </span>
              ):{" "}
              <span className="text-emerald-300 font-semibold">
                ${summary.monthlyIncome.toFixed(0)}
              </span>
            </li>
            <li>
              Monthly expenses:{" "}
              <span className="text-rose-300 font-semibold">
                ${summary.monthlyExpenses.toFixed(0)}
              </span>
            </li>
            <li>
              Planned savings goal:{" "}
              <span className="text-sky-300 font-semibold">
                ${summary.savingsGoal.toFixed(0)}
              </span>
            </li>
            <li>
              Money left after expenses:{" "}
              <span
                className={`font-semibold ${
                  summary.remaining < 0
                    ? "text-rose-400"
                    : "text-emerald-300"
                }`}
              >
                ${summary.remaining.toFixed(0)}
              </span>
            </li>
            <li className="pt-2 border-t border-slate-700">
              Coach tip:{" "}
              <span className="text-slate-100">
                {summary.remaining < 0
                  ? "Your expenses are higher than your income. Consider reducing some costs."
                  : summary.remaining < summary.savingsGoal
                  ? "You have some money left, but it’s not enough to fully reach your savings goal yet."
                  : "You are on track to reach your savings goal. Nice job keeping your expenses under control!"}
              </span>
            </li>
          </ul>
        </section>
      )}
    </main>
  );
}
