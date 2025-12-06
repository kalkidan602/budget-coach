"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";

export default function AboutPage() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <main>
      <PageHeader
        title="About Budget Coach"
        subtitle="A simple budgeting dashboard designed for students and small business owners who want a clear, no-stress overview of their money."
      />

      <section className="space-y-4 text-sm text-slate-200">
        <p>
          Budget Coach is a small front-end project built for a web development
          course. The goal is to practice React and Next.js while creating
          something practical: a basic tool that helps you think about income,
          expenses, and savings in a structured way.
        </p>

        <div>
          <h2 className="text-base font-semibold text-slate-100 mb-1">
            Who is this for?
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Students who want to understand their monthly cash flow.</li>
            <li>Small business owners tracking basic income and expenses.</li>
            <li>Anyone who prefers a simple overview instead of complex tools.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-base font-semibold text-slate-100 mb-1">
            What can you do with Budget Coach?
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>See a quick dashboard of income, expenses, and balance.</li>
            <li>Test simple monthly or weekly budget scenarios.</li>
            <li>Get basic tips on income, expenses, and savings goals.</li>
          </ul>
        </div>

        {/* Small interactive part: show/hide technical details */}
        <div className="mt-4 border-t border-slate-700 pt-4">
          <button
            onClick={() => setShowDetails((prev) => !prev)}
            className="mb-2 px-3 py-2 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium transition"
          >
            {showDetails ? "Hide project details" : "Show project details"}
          </button>

          {showDetails && (
            <div className="text-xs text-slate-300 space-y-1">
              <p>This project uses:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Next.js App Router for pages and routing.</li>
                <li>React components for layout and state management.</li>
                <li>Tailwind CSS for styling and responsive layout.</li>
                <li>Client-side state with <code>useState</code> for interactivity.</li>
              </ul>
              <p>
                Future improvements could include saving data with local storage
                or connecting to an API for more detailed reports.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
