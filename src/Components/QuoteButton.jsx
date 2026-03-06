import { useState } from "react";
import "../App.css";
const quotes = [
  {
    text: "“The human heart is a perpetual factory of idols.",
    author: "John Calvin",
  },
  {
    text: "Athanasius contra mundum.",
    author: "Unknown",
  },
  {
    text: "Faith is precisely the contradiction between the infinite passion of the individual's inwardness and the objective uncertainty.",
    author: "Søren Kierkegaard",
  },
  {
    text: "Always be prepared to make a defense to anyone who asks you for a reason for the hope that is in you.",
    author: "Saint Peter",
  },
  {
    text: "The evidence for the resurrection is better than for claimed miracles in any other religion. It’s outstandingly different in quality and quantity.",
    author: "Antony Flew",
  },
  {
    text: "The first gulp from the glass of natural science will make you an atheist, but at the bottom of the glass God is waiting for you.",
    author: "Werner Heisenberg",
  },
];

export default function QuoteButton() {
  const [quote, setQuote] = useState(quotes[0]);

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }

  return (
    <section
      id="quotes"
      style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}
    >
      <h2 className="quote-heading">Some Quotes I Like</h2>

      <div className="quote-card">
        <p className="quote-text">“{quote.text}”</p>

        <p className="quote-author">— {quote.author}</p>

        <button className="quote-button" onClick={getRandomQuote}>
          New Quote
        </button>
      </div>
    </section>
  );
}
