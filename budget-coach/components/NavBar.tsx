"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Dashboard" },
  { href: "/add", label: "Add Transaction" },
  { href: "/reports", label: "Reports" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="bg-emerald-700/90 backdrop-blur border-b border-emerald-500/40">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <span className="font-semibold tracking-wide text-slate-100">
          Budget Coach
        </span>

        <div className="flex gap-4 text-sm">
          {links.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-2 py-1 rounded-md transition ${
                  isActive
                    ? "bg-emerald-900 text-white font-semibold"
                    : "text-slate-200 hover:bg-emerald-800/60 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
