export default function PageFooter() {
  return (
    <footer className="bg-black text-white/70 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} Vibe Studio — build beautifully.</p>
        <div className="text-xs flex items-center gap-4">
          <a className="hover:text-white transition" href="#">Privacy</a>
          <a className="hover:text-white transition" href="#">Terms</a>
          <a className="hover:text-white transition" href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}
