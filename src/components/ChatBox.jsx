import { useState, useRef, useEffect, useMemo } from 'react';
import { Send, Loader2 } from 'lucide-react';

export default function ChatBox() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Tell me what you're building. I'll sketch the UX, generate the stack, and assemble your app end‑to‑end." },
  ]);
  const [input, setInput] = useState('I want a modern SaaS landing with auth and a dashboard.');
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  const API_BASE = useMemo(() => import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000', []);
  const sessionId = useMemo(() => {
    const cached = sessionStorage.getItem('session_id');
    if (cached) return cached;
    const id = (crypto && crypto.randomUUID) ? crypto.randomUUID() : Math.random().toString(36).slice(2);
    sessionStorage.setItem('session_id', id);
    return id;
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setInput('');
    setMessages((m) => [...m, { role: 'user', content: text }]);
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session_id: sessionId, prompt: text })
      });
      if (!res.ok) throw new Error('Request failed');
      const data = await res.json();
      setMessages((m) => [...m, { role: 'assistant', content: data.content }]);
    } catch (err) {
      setMessages((m) => [...m, { role: 'assistant', content: 'There was a problem reaching the builder. Please try again.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-3xl shadow-2xl shadow-black/20 overflow-hidden">
        <div className="h-[38vh] min-h-[260px] max-h-[420px] overflow-y-auto p-6 space-y-4 scroll-smooth">
          {messages.map((m, i) => (
            <div key={i} className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
              <div className={`px-4 py-3 rounded-2xl leading-relaxed text-sm md:text-base max-w-[85%] ${
                m.role === 'user' ? 'bg-white text-gray-900' : 'bg-white/5 text-white/90 border border-white/10'
              }`}>{m.content}</div>
            </div>
          ))}
          {loading && (
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <Loader2 className="h-4 w-4 animate-spin" />
              Thinking…
            </div>
          )}
          <div ref={endRef} />
        </div>
        <form onSubmit={onSubmit} className="border-t border-white/10 p-3 md:p-4">
          <div className="flex items-end gap-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Describe your product, vibe, and core screens…"
              className="flex-1 resize-none rounded-2xl bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/60 px-4 py-3 h-14 md:h-16"
            />
            <button
              type="submit"
              className="h-14 md:h-16 aspect-square rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 text-white grid place-items-center shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition"
              aria-label="Send"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </form>
      </div>
      <p className="text-center text-white/70 text-xs md:text-sm mt-3">Design‑first. Generate later. Change anytime.</p>
    </div>
  );
}
