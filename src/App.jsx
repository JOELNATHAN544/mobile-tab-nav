import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar";

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <div>
        <img
          height="300px"
          width="100%"
          style={{ borderRadius: "15px", objectFit: "cover" }}
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
        />
      </div>
      <Navbar />
    </div>
    // <nav className='navbar-Item'>(item.icon)</nav>
  );
}

export default App;
