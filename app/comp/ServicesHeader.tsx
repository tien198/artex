export function ServicesHeader({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3 w-full">
      <div className="text-neon-bright font-[family-name:var(--font-geist-mono)] text-[11px] tracking-[3px]">
        {eyebrow}
      </div>
      <div className="text-text-primary font-[family-name:var(--font-abel)] text-4xl md:text-[48px] tracking-[1px] text-center max-w-[800px]">
        {title}
      </div>
      <div className="text-text-secondary font-[family-name:var(--font-geist-mono)] text-base leading-[1.7] text-center">
        {sub}
      </div>
    </div>
  );
}
