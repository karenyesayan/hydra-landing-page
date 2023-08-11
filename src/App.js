import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Tech from "./components/Tech";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex min-h-full flex-col overflow-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Tech />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
