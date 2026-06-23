import Link from "next/link";

export function WorkSection() {
  const works = [
    {
      title: "Hệ Thống Đo Lường Nebula",
      tag: "Đo Lường / Hạ Tầng",
      label: "NEBULA TELEMETRY",
    },
    {
      title: "Cửa Hàng Headless Vertex",
      tag: "Thương Mại Điện Tử Headless",
      label: "VERTEX STOREFRONT",
    },
    {
      title: "Demo Không Gian Làm Việc Pulse",
      tag: "Đồng Bộ Thời Gian Thực / Di Động",
      label: "PULSE COLLAB",
    },
  ];

  return (
    <section className="w-full bg-bg-surface py-20 px-6 md:px-20 flex flex-col xl:flex-row items-center justify-between gap-12">
      <div className="w-full xl:w-[calc(50%-24px)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex flex-col gap-2 max-w-[382px]">
          <div className="text-neon-bright font-[family-name:var(--font-geist-mono)] text-[11px] tracking-[3px]">
            BẢN VẼ HỆ THỐNG
          </div>
          <div className="text-text-primary font-[family-name:var(--font-abel)] text-4xl md:text-[48px] tracking-[1px] leading-[1.2]">
            Mã Nguồn Nói Lên Tất Cả.
          </div>
        </div>
        <Link 
          href="#"
          className="px-5 py-2.5 rounded border border-border-neon bg-neon-blue/5 text-neon-bright font-[family-name:var(--font-geist-mono)] text-[13px] hover:bg-neon-blue/10 transition-colors shrink-0"
        >
          Khám Phá GitHub →
        </Link>
      </div>

      <div className="w-full xl:w-[calc(50%-24px)] flex flex-row overflow-x-auto xl:overflow-visible gap-5 pb-4 xl:pb-0 snap-x">
        {works.map((work, idx) => (
          <div key={idx} className="snap-start flex-none w-[192px] flex flex-col rounded-lg overflow-hidden bg-bg-card border border-border-subtle group cursor-pointer hover:border-border-neon/50 transition-colors">
            <div className="relative w-full h-[240px] bg-bg-deep flex items-center justify-center overflow-hidden">
              <div className="absolute w-full h-full bg-neon-blue/20 blur-[60px] rounded-full mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150" />
              <div className="relative z-10 text-neon-bright font-[family-name:var(--font-abel)] text-[18px] tracking-[2px] group-hover:scale-105 transition-transform duration-500 text-center px-4">
                {work.label}
              </div>
            </div>
            <div className="flex flex-col gap-2 p-5 bg-bg-card h-[87px]">
              <div className="text-neon-bright font-[family-name:var(--font-geist-mono)] text-[11px] tracking-[2px] line-clamp-1">
                {work.tag}
              </div>
              <div className="text-text-primary font-[family-name:var(--font-abel)] text-[20px] tracking-[0.5px] line-clamp-1">
                {work.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
