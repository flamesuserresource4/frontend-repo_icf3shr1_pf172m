import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import ChatBox from './ChatBox';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden text-white">
      {/* Spline cover background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Subtle vignette + top glow overlay (does not block interaction) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center font-semibold tracking-tight drop-shadow-2xl"
        >
          <span className="block text-sm md:text-base text-white/70 mb-2">Vibe‑coded apps, instantly</span>
          <span className="block text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            Build a better full‑stack, no‑code studio
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
          className="w-full mt-8"
        >
          <ChatBox />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6, ease: 'easeOut' }}
          className="mt-6 text-white/80 text-xs md:text-sm"
        >
          Nothing else on the first screen. Type to begin.
        </motion.div>
      </div>
    </section>
  );
}
