"use client";

import { useEffect } from "react";
import styles from "./HeroSection.module.css";

export function NeonEffect() {
  useEffect(() => {
    const hero = document.getElementById("hero")!;
    const canvas = document.getElementById("neon-canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d")!;
    const cursorEl = document.getElementById("cursor");

    let W, H;
    let opacity = 0;

    function resize() {
      W = canvas.width = hero.offsetWidth;
      H = canvas.height = hero.offsetHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    let mouse = { x: W / 2, y: H / 2 };
    let target = { x: W / 2, y: H / 2 };

    hero.addEventListener("mousemove", (e) => {
      const r = hero.getBoundingClientRect();
      target.x = e.clientX - r.left;
      target.y = e.clientY - r.top;
    });

    const NEONS = [
      // { ox: 0.35, oy: 0.38, color: '#0062FF', alpha: 0.55, radius: 200, lag: 0.06 },
      // { ox: 0.65, oy: 0.55, color: '#4F46E5', alpha: 0.4,  radius: 160, lag: 0.04 },
      {
        ox: 0.5,
        oy: 0.5,
        color: "#00BFFF",
        alpha: 0.3,
        radius: 120,
        lag: 0.09,
      },
      {
        ox: 0.2,
        oy: 0.6,
        color: "#0062FF",
        alpha: 0.25,
        radius: 140,
        lag: 0.03,
      },
      {
        ox: 0.8,
        oy: 0.3,
        color: "#6366F1",
        alpha: 0.3,
        radius: 130,
        lag: 0.05,
      },
    ];

    const glows = NEONS.map((n) => ({
      ...n,
      x: n.ox * (W || 800),
      y: n.oy * (H || 600),
    }));

    const STREAKS = [
      {
        oy: 0.38,
        len: 0.85,
        angle: 8,
        color: "#4DAAFF",
        alpha: 0.5,
        thick: 3,
        blur: 18,
        lag: 0.05,
      },
      {
        oy: 0.72,
        len: 1.0,
        angle: -6,
        color: "#0062FF",
        alpha: 0.4,
        thick: 2,
        blur: 14,
        lag: 0.035,
      },
      {
        oy: 0.55,
        len: 0.65,
        angle: 12,
        color: "#6366F1",
        alpha: 0.3,
        thick: 2,
        blur: 12,
        lag: 0.06,
      },
    ];

    // const STREAKS = [
    // { oy: 0.38, len: 0.85, angle: 8,  colors: ['#00BFFF','#0062FF','#4F46E5'], alpha: 0.55, thick: 3, blur: 20, lag: 0.05 },
    // { oy: 0.72, len: 1.0,  angle: -6, colors: ['#0062FF','#4DAAFF','#6366F1'], alpha: 0.45, thick: 2, blur: 16, lag: 0.035 },
    // { oy: 0.55, len: 0.65, angle: 12, colors: ['#6366F1','#0062FF','#00BFFF'], alpha: 0.35, thick: 2, blur: 14, lag: 0.06 },
    // ];
    const streaks = STREAKS.map((s) => ({
      ...s,
      y: s.oy * (H || 600),
      baseY: s.oy * (H || 600),
    }));

    const PARTICLES = Array.from({ length: 28 }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0003,
      vy: (Math.random() - 0.5) * 0.0003,
      r: 1 + Math.random() * 2,
      alpha: 0.2 + Math.random() * 0.5,
      color: Math.random() > 0.5 ? "#4DAAFF" : "#6366F1",
      lag: 0.01 + Math.random() * 0.04,
      cx: Math.random(),
      cy: Math.random(),
    }));

    function lerp(a, b, t) {
      return a + (b - a) * t;
    }

    function draw() {
      ctx.globalAlpha = opacity;
      opacity = Math.min(1, opacity + 0.05);
      if (opacity < 1) requestAnimationFrame(draw);

      mouse.x = lerp(mouse.x, target.x, 0.08);
      mouse.y = lerp(mouse.y, target.y, 0.08);

      cursorEl.style.left = target.x + "px";
      cursorEl.style.top = target.y + "px";

      ctx.clearRect(0, 0, W, H);

      const mx = mouse.x / W;
      const my = mouse.y / H;

      glows.forEach((g) => {
        g.x = lerp(g.x, g.ox * W + (mx - 0.5) * W * 0.5, g.lag);
        g.y = lerp(g.y, g.oy * H + (my - 0.5) * H * 0.5, g.lag);

        const grad = ctx.createRadialGradient(g.x, g.y, 0, g.x, g.y, g.radius);
        const c = hexToRgb(g.color);
        grad.addColorStop(0, `rgba(${c},${g.alpha})`);
        grad.addColorStop(1, `rgba(${c},0)`);
        ctx.save();
        ctx.globalCompositeOperation = "screen";
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.ellipse(g.x, g.y, g.radius, g.radius * 0.65, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      streaks.forEach((s) => {
        s.y = lerp(
          s.y,
          (s.baseY * H) / (H || 600) + (my - 0.5) * H * 0.18,
          s.lag,
        );

        const angleRad = (s.angle * Math.PI) / 180;
        const startX = (mx - 0.5) * W * 0.3 - W * 0.05;
        const len = s.len * W;
        const endX = startX + Math.cos(angleRad) * len;
        const endY = s.y + Math.sin(angleRad) * len;

        ctx.save();
        ctx.globalCompositeOperation = "screen";
        ctx.shadowColor = s.color;
        ctx.shadowBlur = s.blur;
        ctx.strokeStyle = s.color;
        ctx.globalAlpha = s.alpha;
        ctx.lineWidth = s.thick;
        ctx.beginPath();
        ctx.moveTo(startX, s.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        ctx.restore();
      });

      PARTICLES.forEach((p) => {
        p.cx = lerp(p.cx, p.x + (mx - 0.5) * 0.12, p.lag);
        p.cy = lerp(p.cy, p.y + (my - 0.5) * 0.12, p.lag);
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;

        const px = p.cx * W,
          py = p.cy * H;
        const c = hexToRgb(p.color);
        ctx.save();
        ctx.globalCompositeOperation = "screen";
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
        ctx.fillStyle = `rgba(${c},${p.alpha})`;
        ctx.beginPath();
        ctx.arc(px, py, p.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      const cursorGrad = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        180,
      );
      cursorGrad.addColorStop(0, "rgba(77,170,255,0.12)");
      cursorGrad.addColorStop(1, "rgba(77,170,255,0)");
      ctx.save();
      ctx.globalCompositeOperation = "screen";
      ctx.fillStyle = cursorGrad;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 180, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      requestAnimationFrame(draw);
    }

    const cache = {};
    function hexToRgb(hex) {
      if (cache[hex]) return cache[hex];
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      cache[hex] = `${r},${g},${b}`;
      return cache[hex];
    }

    setTimeout(() => draw(), 1500);
  });
  return (
    <>
      <div className={styles["cursor"]} id="cursor"></div>
      <canvas
        id="neon-canvas"
        className="animate-in fade-in duration-500"
      ></canvas>
    </>
  );
}
