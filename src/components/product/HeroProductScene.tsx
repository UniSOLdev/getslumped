"use client";

import { motion } from "framer-motion";
import {
  HeroGlowLamp,
  HeroBlackoutMask,
  HeroNightShades,
  HeroWickCandle,
  HeroMistBottle,
  HeroCoolCase,
} from "./hero/HeroBundleProducts";

export function HeroProductScene() {
  return (
    <div
      className="relative h-full w-full min-h-[380px] sm:min-h-[440px] lg:min-h-[min(720px,calc(100vh-8rem))]"
      aria-hidden
    >
      {/* Warm amber hero lighting */}
      <div className="pointer-events-none absolute inset-[-10%] bg-[radial-gradient(ellipse_75%_65%_at_52%_48%,rgba(255,159,74,0.28)_0%,rgba(232,165,75,0.1)_35%,transparent_68%)]" />
      <div className="pointer-events-none absolute bottom-[15%] left-[20%] h-[50%] w-[60%] rounded-full bg-[radial-gradient(circle,rgba(255,140,50,0.15)_0%,transparent_70%)] blur-2xl" />

      {/* Nightstand / bedside surface */}
      <div className="absolute bottom-0 left-[-8%] right-[-8%] h-[32%]">
        <div className="absolute inset-0 rounded-t-[40%] bg-gradient-to-t from-[#060608] via-[#10141c] to-[#1a1e28]/90 shadow-[inset_0_4px_24px_rgba(255,255,255,0.04)]" />
        <div className="absolute inset-x-[10%] top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
        <div className="absolute inset-0 opacity-30 bg-[repeating-linear-gradient(105deg,transparent,transparent_40px,rgba(255,255,255,0.01)_40px,rgba(255,255,255,0.01)_41px)]" />
      </div>

      {/* Premium product box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.85, delay: 0.15 }}
        className="absolute left-[2%] right-[2%] top-[6%] bottom-[24%] z-[5] rounded-md border border-white/[0.06] bg-gradient-to-br from-[#161618] via-[#0c0c0e] to-[#040406] shadow-[0_50px_100px_rgba(0,0,0,0.75),inset_0_1px_0_rgba(255,255,255,0.08)]"
      >
        <div className="absolute inset-2 rounded-sm border border-white/[0.03]" />
        <div className="absolute left-1/2 top-[38%] -translate-x-1/2 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.32em] text-white/25 sm:text-base md:text-lg">
            GET SLUMPED<span className="text-white/15">™</span>
          </p>
          <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.45em] text-white/15 sm:text-xs">
            Sleep System
          </p>
        </div>
      </motion.div>

      {/* Slumped Glow — dominant focal */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.3 }}
        className="absolute right-[-2%] top-[4%] z-[25] h-[62%] w-[52%] sm:right-[0%] sm:w-[48%]"
      >
        <HeroGlowLamp />
      </motion.div>

      {/* Blackout mask — front, large */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.65, delay: 0.4 }}
        className="absolute left-[-4%] top-[8%] z-[40] h-[38%] w-[48%] sm:left-[0%] sm:h-[40%] sm:w-[44%]"
      >
        <HeroBlackoutMask />
      </motion.div>

      {/* NightShades */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.48 }}
        className="absolute right-[4%] top-[52%] z-[38] h-[22%] w-[44%] sm:h-[24%] sm:w-[40%]"
      >
        <HeroNightShades />
      </motion.div>

      {/* Wick candle */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.52 }}
        className="absolute bottom-[26%] left-[2%] z-[32] h-[34%] w-[26%] sm:left-[6%] sm:h-[36%] sm:w-[24%]"
      >
        <HeroWickCandle />
      </motion.div>

      {/* Mist bottle — tall */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.65, delay: 0.56 }}
        className="absolute bottom-[28%] left-[26%] z-[28] h-[42%] w-[18%] sm:left-[28%] sm:h-[44%] sm:w-[16%]"
      >
        <HeroMistBottle />
      </motion.div>

      {/* CoolCase folded fabric */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.6 }}
        className="absolute bottom-[22%] right-[2%] z-[30] h-[30%] w-[40%] sm:right-[6%] sm:h-[32%] sm:w-[36%]"
      >
        <HeroCoolCase />
      </motion.div>
    </div>
  );
}
