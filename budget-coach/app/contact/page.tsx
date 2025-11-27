"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";

export default function ContactPage() {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <main>
      <PageHeader
        title="Contact & About"
        subtitle="This project was built as part of my front-end development course to explore budgeting in a simple, practical way."
      />

      <p style={{ marginBottom: "12px" }}>
        If you have feedback or questions about Budget Coach, you can reach out
        to us using the contact details below.
      </p>

      <button
        onClick={() => setShowEmail(!showEmail)}
        style={{
          padding: "8px 12px",
          borderRadius: "6px",
          border: "none",
          background: "#10b981",
          color: "white",
          cursor: "pointer",
          marginBottom: "12px",
        }}
      >
        {showEmail ? "Hide email" : "Show email"}
      </button>

      {showEmail && (
        <p>
          Email:{" "}
          <span style={{ fontFamily: "monospace" }}>
            budgetcoach@gmail.com
          </span>
        </p>
      )}
    </main>
  );
}

