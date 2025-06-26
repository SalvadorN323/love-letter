import './App.css';
import HeroSection from './HeroSection';
import TypewriterPoem from './TypewriterPoem';

function FloatingHeartsBg() {
  
  const hearts = Array.from({ length: 8 }).map((_, i) => {
    const left = Math.random() * 90 + 2;
    const delay = Math.random() * 6;
    const size = Math.random() * 0.7 + 1;
    return (
      <span
        key={i}
        className="floating-heart"
        style={{ left: `${left}%`, animationDelay: `${delay}s`, fontSize: `${size}em` }}
        role="img"
        aria-label="floating heart"
      >
        ♥
      </span>
    );
  });
  return <div className="floating-hearts-bg">{hearts}</div>;
}

function App() {
  return (
    <div className="romantic-app">
      <FloatingHeartsBg />
      <HeroSection />
      <TypewriterPoem />
      <footer className="footer-romantic">
        "Love is composed of a single soul inhabiting two bodies." <span className="heart-accent">♥</span> – Aristotle
      </footer>
    </div>
  );
}

export default App;
