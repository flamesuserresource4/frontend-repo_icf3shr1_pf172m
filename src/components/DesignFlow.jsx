import { motion } from 'framer-motion';
import { Palette, Boxes, Wand2, RefreshCcw } from 'lucide-react';

const items = [
  {
    icon: Palette,
    title: 'Design comes first',
    text: 'Sketch a vibe. We translate it into a living system of tokens, grids, and motion.'
  },
  {
    icon: Boxes,
    title: 'Generate structure',
    text: 'We map screens → flows → components. Your stack spins up with best‑practice defaults.'
  },
  {
    icon: Wand2,
    title: 'Assemble instantly',
    text: 'See it live. Edit copy, styles, and layouts in place — no context switching.'
  },
  {
    icon: RefreshCcw,
    title: 'Iterate forever',
    text: 'Change the brief anytime. The system adapts while keeping your brand consistent.'
  }
];

export default function DesignFlow() {
  return (
    <section className="relative text-slate-900 py-24 md:py-32">
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-center"
        >
          Design‑first. Everything else follows.
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="relative rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl p-6 shadow-lg hover:shadow-xl"
            >
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 grid place-items-center text-white mb-4">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{it.title}</h3>
              <p className="text-slate-700 text-sm leading-relaxed">{it.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
