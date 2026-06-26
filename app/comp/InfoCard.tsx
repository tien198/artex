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
    <div className="flex flex-col gap-4 rounded-lg bg-card border border-subtle p-7 w-full h-full">
      <div className="text-neon-bright font-geist-mono text-[11px] tracking-[2px]">
        {num}
      </div>
      <div className="bg-neon-blue h-0.5 w-8"></div>
      <div className="text-primary font-afacad-flux text-xl md:text-2xl tracking-[0.5px]">
        {title}
      </div>
      <div className="text-secondary font-geist-mono text-sm md:text-base leading-relaxed">
        {desc}
      </div>
    </div>
  );
}
