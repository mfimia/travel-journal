import earthIcon from "../img/public_black_24dp.svg";

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <img className="earth-icon" src={earthIcon} alt="earth-icon" />
      my travel journal.
    </nav>
  );
}
