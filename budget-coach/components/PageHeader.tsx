type PageHeaderProps = {
  title: string;
  subtitle?: string;
};

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header className="mb-6">
      <h1 className="text-2xl md:text-3xl font-semibold mb-1">
        {title}
      </h1>

      {subtitle && (
        <p className="text-sm text-slate-300 max-w-2xl">
          {subtitle}
        </p>
      )}
    </header>
  );
}

