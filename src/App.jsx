import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Members from './components/Members.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 antialiased selection:bg-pink-500/20 selection:text-pink-200">
      <Header />
      <main>
        <Hero />
        <Members />
      </main>
      <Footer />
    </div>
  );
}

export default App;
