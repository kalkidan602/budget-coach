"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Dashboard" },
  { href: "/add", label: "Add Transaction" },
  { href: "/reports", label: "Reports" },
  { href: "/contact", label: "Contact" },

]
// to make sure my navbar is usable for others
export default function NavBar(){
  const pathname = usePathname();
  return(
    <nav className="bg-emerald-700/90 backdrop-blur border-b border-emerald-500/40">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <span className="font-semibold tracking-wide">
          Budget Coach
        </span>

        <div className="flex gap-4 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:underline ${
                pathname === link.href ? "font-semibold" : "text-slate-200"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}