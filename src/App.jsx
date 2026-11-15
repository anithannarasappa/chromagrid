import React from "react";
import "./App.css";

const cards = [
  {
    name: "Nature",
    category: "Beautiful Landscapes",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600",
    color: "#83c5be"
  },
  {
    name: "Technology",
    category: "Future Innovations",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
    color: "#9b8afb"
  },
  {
    name: "Architecture",
    category: "Modern Buildings",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600",
    color: "#f4a261"
  },
  {
    name: "Travel",
    category: "Explore The World",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600",
    color: "#e5989b"
  },
  {
    name: "Food",
    category: "Delicious Moments",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600",
    color: "#ffb703"
  },
  {
    name: "Creative Art",
    category: "Art And Design",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600",
    color: "#90be6d"
  }
];

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Chroma<span>Grid</span></h1>
        <p>Explore Colors. Discover Creativity.</p>
      </header>

      <main className="container">
        <div className="section-title">
          <h2>Explore Our Gallery</h2>
          <p>A collection of beautiful images and creative ideas.</p>
        </div>

        <div className="grid">
          {cards.map((card, index) => (
            <div
              className="card"
              key={index}
              style={{ "--card-color": card.color }}
            >
              <img src={card.image} alt={card.name} />

              <div className="card-content">
                <span className="number">
                  0{index + 1}
                </span>
                <h3>{card.name}</h3>
                <p>{card.category}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer>
        <p>© 2026 ChromaGrid | Designed with React</p>
      </footer>
    </div>
  );
}

export default App;