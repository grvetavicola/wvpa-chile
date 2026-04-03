import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import AIAssistant from "./components/AIAssistant";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <AIAssistant />
      </main>
      <Footer />
    </div>
  );
}


