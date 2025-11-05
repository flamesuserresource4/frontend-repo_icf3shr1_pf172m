import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DesignFlow from './components/DesignFlow';
import PageFooter from './components/PageFooter';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EDE9FE] via-[#F5F3FF] to-[#A5F3FC] text-slate-900">
      <Navbar />
      <main>
        <section id="chat">
          <Hero />
        </section>
        <section id="flow">
          <DesignFlow />
        </section>
      </main>
      <PageFooter />
    </div>
  );
}

export default App;
