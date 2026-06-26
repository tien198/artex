import { TypeWriter } from "@/components/shared/type-writer";
import { NeonEffect } from "./hero-section.neon";
import styles from "./hero-section.module.css";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-deep pt-16 pb-20 cursor-none"
    >
      <NeonEffect />
      {/* Background Glows */}
      {/* <div className="absolute inset-0 pointer-events-none flex justify-center items-center">
        <div className="absolute w-[400px] h-[300px] bg-neon-blue/30 blur-[100px] rounded-full mix-blend-screen opacity-50 translate-x-[-20%] translate-y-[-20%]" />
        <div className="absolute w-[300px] h-[200px] bg-neon-glow/20 blur-[100px] rounded-full mix-blend-screen translate-x-[30%] translate-y-[20%]" />
 */}
      {/* Streaks */}
      {/* <div className="absolute top-1/3 left-1/4 w-[700px] h-[3px] bg-neon-bright/50 blur-[24px] rotate-12 -translate-x-1/2" />
        <div className="absolute top-2/3 right-1/4 w-[900px] h-[2px] bg-neon-blue/40 blur-[20px] -rotate-6 translate-x-1/4" />
      </div> */}

      <div className="relative z-10 flex flex-col items-center gap-4 md:gap-20 px-6 md:px-20 mx-auto text-center">
        {/* Badge */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neon-blue/10 border border-border-neon/50">
          <div className="w-1.5 h-1.5 rounded-full bg-neon-bright" />
          <span className="text-neon-bright font-geist-mono text-[11px] tracking-[2px]">
            Studio Kỹ Thuật Số Thế Hệ Mới
          </span>
        </div>

        {/* Headlines */}
        {/* <div className="flex flex-col gap-2 w-full"> */}
        <h1 className="flex flex-col gap-3 md:gap-10 whitespace-normal w-full text-primary font-alumi-sans font-extralight text-5xl md:text-[72px] tracking-[4px] md:tracking-[24px] leading-tight drop-shadow-[0_0_40px_rgba(0,98,255,0.3)]">
          <TypeWriter text="THIẾT KẾ HÔM NAY" />

          <span
            className={
              "text-neon-blue font-afacad-flux font-semibold text-6xl md:text-[96px] tracking-[4px] md:tracking-[24px] drop-shadow-[0_0_40px_rgba(0,98,255,0.3)] " +
              styles["floor-text"] +
              " " +
              styles["fade-in"]
            }
          >
            <span className={styles["heartbeat"]}>DI SẢN NGÀY MAI</span>
            <span className={styles["floor-flow"]}></span>
          </span>
        </h1>
        {/* </div> */}
      </div>

      <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 md:gap-16 mt-16">
        <button
          className={
            "flex items-center justify-center py-2 w-96 max-w-[80%] rounded-full bg-neon-blue shadow-[0_0_32px_rgba(0,98,255,0.4)] text-white font-abel text-base tracking-[1.5px] hover:bg-surface hover:border hover:border-primary hover:text-primary hover:font-semibold transition-all duration-300 " +
            styles["fade-in"]
          }
        >
          Bắt Đầu Dự Án
        </button>
        <button
          className={
            "flex items-center justify-center py-2 w-96 max-w-[95%] rounded-full bg-neon-blue/5 border border-border-neon text-neon-bright font-abel text-base tracking-[1.5px] hover:bg-neon-blue/50 hover:text-white transition-colors duration-300 " +
            styles["fade-in"]
          }
        >
          Khám Phá
        </button>
      </div>
    </section>
  );
}
