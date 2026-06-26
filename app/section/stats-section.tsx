export function StatsSection() {
  const stats = [
    { value: "<100ms", label: "Độ Trễ TTFB" },
    { value: "100%", label: "Mã Nguồn Type safe" },
    { value: "Không", label: "Nợ Kỹ Thuật" },
    { value: "CI/CD", label: "Quy Trình Tự Động" },
  ];

  return (
    <section className="w-full bg-deep py-16 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center">
      {stats.map((stat, idx) => (
        <>
          <div
            key={idx}
            className="flex flex-col md:flex-row items-center w-full md:w-auto"
          >
            <div className="flex flex-col items-center justify-center gap-2 px-10 py-6 md:py-0 w-full text-center">
              <div className="text-primary font-aldrich text-5xl md:text-[56px] tracking-[1px] drop-shadow-[0_0_24px_rgba(0,98,255,0.4)]">
                {stat.value}
              </div>
              <div className="text-neon-bright font-geist-mono text-[12px] tracking-[2px]">
                {stat.label}
              </div>
            </div>
          </div>
          {idx < stats.length - 1 && (
            <div className="hidden md:block w-[1px] h-[60px] bg-subtle shrink-0" />
          )}
          {idx < stats.length - 1 && (
            <div className="md:hidden w-[60px] h-[1px] bg-subtle shrink-0 my-4" />
          )}
        </>
      ))}
    </section>
  );
}
