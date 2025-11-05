import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DesignFlow from './components/DesignFlow';
import PageFooter from './components/PageFooter';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
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
