// export default App;
import React from 'react';
import Counter from "./Counter";
import Greeting from "./Greeting";

// Komponen Header
function Header() {
  return (
    <header>
      <h1>Aplikasi React Saya</h1>
    </header>
  );
}

// Komponen Main
function Main() {
  return (
    <main>
      <h2>Selamat datang di Aplikasi React Saya !</h2>
      <p>Ini adalah area konten utama .</p>
    </main>
  );
}
// Komponen Footer
function Footer() {
  return (
    <footer>
      <p>&copy; 2023 Aplikasi React Saya</p>
    </footer>
  );
}

// Komponen App yang menggunakan Header, Main, dan Footer
function App() {
  return (
    <div>
      <Header />
      <Main />
      <Greeting name="Moriarty" />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;