type SummaryCardProps = {
  label: string;
  amount: number | string;  
  tone?: "income" | "expense" | "balance";
};

export default function SummaryCard({
  label,
  amount,
  tone = "balance",
}: SummaryCardProps) {
  const numericAmount =
    typeof amount === "number" ? amount : Number(amount) || 0;

  const amountColor =
    tone === "income"
      ? "text-emerald-300"
      : tone === "expense"
      ? "text-rose-300"
      : numericAmount >= 0
      ? "text-sky-300"
      : "text-rose-300";

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-4 space-y-1">
      <p className="text-xs uppercase tracking-wide text-slate-400">
        {label}
      </p>
      <p className={`text-2xl font-semibold ${amountColor}`}>
        ${numericAmount.toFixed(0)}
      </p>
    </div>
  );
}

