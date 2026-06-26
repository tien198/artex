import Link from "next/link";

export function Nav() {
  return (
    <nav className="w-full flex justify-between items-center px-6 md:px-20 h-[72px] bg-bg-deep border-b border-border-subtle relative z-50">
      <div className="flex items-center gap-2.5">
        <div className="w-7 h-7 rounded bg-gradient-to-br from-neon-bright to-neon-blue" />
        <span className="text-text-primary font-[family-name:var(--font-abel)] text-[20px] tracking-[4px]">
          ARTEX
        </span>
      </div>

      <div className="hidden md:flex items-center gap-10">
        <Link href="#" className="text-text-secondary font-[family-name:var(--font-geist-mono)] text-[13px] tracking-[1.5px] hover:text-neon-bright transition-colors">Dự Án</Link>
        <Link href="#" className="text-text-secondary font-[family-name:var(--font-geist-mono)] text-[13px] tracking-[1.5px] hover:text-neon-bright transition-colors">Dịch Vụ</Link>
        <Link href="#" className="text-text-secondary font-[family-name:var(--font-geist-mono)] text-[13px] tracking-[1.5px] hover:text-neon-bright transition-colors">Giới Thiệu</Link>
        <Link href="#" className="text-text-secondary font-[family-name:var(--font-geist-mono)] text-[13px] tracking-[1.5px] hover:text-neon-bright transition-colors">Blog</Link>
      </div>

      <div className="flex items-center gap-4">
        <Link href="#" className="hidden md:block text-text-secondary font-[family-name:var(--font-geist-mono)] text-[13px] hover:text-white transition-colors">Đăng Nhập</Link>
        <button className="flex items-center justify-center px-5 py-2.5 bg-neon-blue rounded shadow-[0_0_16px_rgba(0,98,255,0.4)] text-white font-[family-name:var(--font-geist-mono)] text-[13px] tracking-[0.5px] hover:opacity-90 transition-opacity">
          Bắt Đầu
        </button>
      </div>
    </nav>
  );
}
