export function InfoCard({
  num,
  title,
  desc,
}: {
  num: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-bg-card border border-border-subtle p-7 w-full h-full">
      <div className="text-neon-bright font-[family-name:var(--font-geist-mono)] text-[11px] tracking-[2px]">
        {num}
      </div>
      <div className="bg-neon-blue h-[2px] w-8"></div>
      <div className="text-text-primary font-[family-name:var(--font-abel)] text-[22px] tracking-[0.5px]">
        {title}
      </div>
      <div className="text-text-secondary font-[family-name:var(--font-geist-mono)] text-[13px] leading-[1.7]">
        {desc}
      </div>
    </div>
  );
}
