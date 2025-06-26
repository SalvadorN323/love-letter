import React, { useState, useEffect } from 'react';
import './TypewriterPoem.css';

const poem = `Ever since I met you, Ariana, your smile has been contagious brightening every room and every part of my day. There's never been a dull moment with you and your presence brings a kind of joy I didn't know I was missing. You've touched my heart in a way no one else ever could. You're the Cortana in my life guiding me, steadying me, and reminding me of who I am even when I forget.`;

export default function TypewriterPoem() {
  const [displayed, setDisplayed] = useState('');
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (idx < poem.length) {
      const timeout = setTimeout(() => {
        setDisplayed(poem.slice(0, idx + 1));
        setIdx(idx + 1);
      }, poem[idx] === '\n' ? 500 : 45);
      return () => clearTimeout(timeout);
    }
  }, [idx]);

  return (
    <section className="typewriter-section">
      <div className="typewriter">
        <pre>{displayed}<span className="cursor">|</span></pre>
      </div>
    </section>
  );
} 