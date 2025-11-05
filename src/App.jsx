import Hero from './components/Hero';
import DesignFlow from './components/DesignFlow';
import PageFooter from './components/PageFooter';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* First screen: just headline + big chatbox over Spline cover */}
      <Hero />

      {/* Followed by the design‑first process section */}
      <DesignFlow />

      <PageFooter />
    </div>
  );
}

export default App;
