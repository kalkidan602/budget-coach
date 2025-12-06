"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";

export default function ContactPage() {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <main>
      <PageHeader
        title="Contact"
        subtitle="This project was built as part of a front-end development course to explore budgeting in a simple, practical way."
      />

      <p className="mb-3 text-sm text-slate-200">
        If you have feedback or questions about Budget Coach, you can reach out
        to us using the contact details below.
      </p>

      <button
        onClick={() => setShowEmail(!showEmail)}
        className="mb-3 px-3 py-2 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium transition"
      >
        {showEmail ? "Hide email" : "Show email"}
      </button>

      {showEmail && (
        <p className="text-sm text-slate-100">
          Email:{" "}
          <span className="font-mono">
            budgetcoach@gmail.com
          </span>
        </p>
      )}
    </main>
  );
}
