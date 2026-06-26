export function CTASection() {
  return (
    <section className="relative w-full bg-bg-deep py-20 px-6 md:px-20 overflow-hidden flex items-center justify-center min-h-[600px]">
      <div className="absolute inset-0 pointer-events-none flex justify-center items-center">
        <div className="w-[700px] h-[560px] bg-neon-blue/20 blur-[100px] rounded-full mix-blend-screen opacity-60 translate-y-[-10%]" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center gap-6 max-w-4xl text-center">
        <div className="text-neon-bright font-[family-name:var(--font-geist-mono)] text-[11px] tracking-[4px]">
          SẴN SÀNG XÂY DỰNG?
        </div>
        <h2 className="text-text-primary font-[family-name:var(--font-abel)] text-5xl md:text-[64px] leading-[1.05] tracking-[1px] drop-shadow-[0_0_40px_rgba(0,98,255,0.3)]">
          Hãy Tạo Nên Điều<br />Khó Quên.
        </h2>
        <p className="text-text-secondary font-[family-name:var(--font-geist-mono)] text-[15px] mt-2">
          Gửi tin nhắn cho chúng tôi. Chúng tôi phản hồi trong 24 giờ.
        </p>
        <button className="mt-4 flex items-center justify-center px-12 py-4 rounded bg-neon-blue shadow-[0_0_40px_rgba(0,98,255,0.5)] hover:shadow-[0_0_50px_rgba(0,98,255,0.7)] text-white font-[family-name:var(--font-abel)] text-[18px] tracking-[1.5px] hover:-translate-y-1 transition-all duration-300">
          Liên Hệ Ngay
        </button>
      </div>
    </section>
  );
}
