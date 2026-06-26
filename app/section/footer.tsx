import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-deep border-t border-subtle py-8 px-6 md:px-20 flex flex-col justify-between items-center gap-6 md:pb-16 md:pt-10">
      <div className="flex items-center gap-2.5">
        <div className="w-5 h-5 rounded-sm from-neon-bright to-neon-blue" />
        <span className="text-primary font-abel text-[16px] tracking-[4px]">
          © 2025 ARTEX
        </span>
      </div>

      <div className="text-neon-bright font-geist-mono text-base tracking-[0.5px]">
        Chế tác với sự tỉ mỉ.
      </div>

      <div className="flex flex-wrap justify-center items-center gap-8 font-geist-mono">
        <Link
          href="#"
          className="text-secondary text-[12px] tracking-[0.5px] hover:text-neon-bright transition-colors"
        >
          Quyền Riêng Tư
        </Link>
        <Link
          href="#"
          className="text-secondary text-[12px] tracking-[0.5px] hover:text-neon-bright transition-colors"
        >
          Điều Khoản
        </Link>
        <Link
          href="#"
          className="text-secondary text-[12px] tracking-[0.5px] hover:text-neon-bright transition-colors"
        >
          Twitter
        </Link>
        <Link
          href="#"
          className="text-secondary text-[12px] tracking-[0.5px] hover:text-neon-bright transition-colors"
        >
          Dribbble
        </Link>
      </div>
    </footer>
  );
}
