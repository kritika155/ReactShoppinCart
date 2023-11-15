import "./App.css";
import image from "./logo.png";
export default function Navbar() {
  return (
    <header>
      <div className="logo">
        <img src={image} />
      </div>
      <h4>KRITIKA ROY FASHIONS</h4>
      <nav>
        <ul>
          <li>
            <a href="#home" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
