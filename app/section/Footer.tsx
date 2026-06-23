import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-bg-surface border-t border-border-subtle py-8 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
      <div className="flex items-center gap-2.5">
        <div className="w-5 h-5 rounded-sm bg-gradient-to-br from-neon-bright to-neon-blue" />
        <span className="text-text-primary font-[family-name:var(--font-abel)] text-[16px] tracking-[4px]">
          ARTEX
        </span>
      </div>
      
      <div className="text-text-secondary font-[family-name:var(--font-geist-mono)] text-[12px] tracking-[0.5px]">
        © 2025 Artex Studio. Chế tác với sự tỉ mỉ.
      </div>
      
      <div className="flex flex-wrap justify-center items-center gap-8">
        <Link href="#" className="text-text-secondary font-[family-name:var(--font-geist-mono)] text-[12px] tracking-[0.5px] hover:text-neon-bright transition-colors">
          Quyền Riêng Tư
        </Link>
        <Link href="#" className="text-text-secondary font-[family-name:var(--font-geist-mono)] text-[12px] tracking-[0.5px] hover:text-neon-bright transition-colors">
          Điều Khoản
        </Link>
        <Link href="#" className="text-text-secondary font-[family-name:var(--font-geist-mono)] text-[12px] tracking-[0.5px] hover:text-neon-bright transition-colors">
          Twitter
        </Link>
        <Link href="#" className="text-text-secondary font-[family-name:var(--font-geist-mono)] text-[12px] tracking-[0.5px] hover:text-neon-bright transition-colors">
          Dribbble
        </Link>
      </div>
    </footer>
  );
}
