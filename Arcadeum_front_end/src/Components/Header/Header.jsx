import logo from "../../assets/logo.png";
import "./Css/Header.css";

function Header() {
  return (
    <nav className="header-container">
      <div className="nav-inner">
        <div className="nav-left">
          <img src={logo} className="responsive-logo" alt="Logo" />
          <label className="hamburger">...</label>
        </div>

        <div className="nav-center">
          <ul className="nav-links">
            <li>Home</li>
            <li className="dropdown">
              Games
              <div className="dropdown-wrapper">
              <div className="dropdown-box">
  <div className="dropdown-column">
    <h4>Action</h4>
    <hr className="gradient" />
    <a href="#">Shooting</a>
    <a href="#">Battle Royale</a>
    <a href="#">Hack & Slash</a>
    <a href="#">Platformer</a>
    <a href="#">Fighting</a>
    <a href="#">Stealth</a>
    <a href="#">Survival</a>
    <a href="#">Beat ‘em up</a>
  </div>
&nsbp;
  <div className="dropdown-column">
    <h4>Adventure</h4>
    <hr className="gradient" />
    <a href="#">Life is Strange</a>
    <a href="#">Uncharted 4</a>
    <a href="#">The Walking Dead (Telltale)</a>
    <a href="#">Firewatch</a>
    <a href="#">Gris</a>
    <a href="#">Oxenfree</a>
    <a href="#">Outer Wilds</a>
    <a href="#">Broken Age</a>
  </div>
  &nsbp;
   <div className="dropdown-column">
    <h4>Racing</h4>
    <hr className="gradient" />
    <a href="#">Forza Horizon</a>
    <a href="#">Gran Turismo</a>
    <a href="#">Need for Speed: Heat</a>
    <a href="#">F1 2023</a>
    <a href="#">Assetto Corsa</a>
    <a href="#">Project CARS</a>
    <a href="#">Mario Kart 8 Deluxe</a>
    <a href="#">Dirt Rally</a>
  </div>
  &nsbp;
  <div className="dropdown-column">
    <h4>Simulation</h4>
    <hr className="gradient" />
    <a href="#">The Sims 4</a>
    <a href="#">Stardew Valley</a>
    <a href="#">Animal Crossing: New Horizons</a>
    <a href="#">Cities: Skylines3</a>
    <a href="#">Flight Simulator 2020</a>
    <a href="#">Farming Simulator 22</a>
    <a href="#">Planet Zoo</a>
    <a href="#">Two Point Hospital</a>
  </div>
  <div className="dropdown-column">
    <h4>Shooting</h4>
    <hr className="gradient" />
    <a href="#">Valorant</a>
    <a href="#">Apex Legends</a>
    <a href="#">Counter-Strike 2</a>
    <a href="#">Overwatch 2</a>
    <a href="#">PUBG: Battlegrounds</a>
    <a href="#">Call of Duty: Warzone</a>
    <a href="#">Fortnite</a>
    <a href="#">Rainbow Six Siege</a>
  </div>
  
  <div className="dropdown-column ms-4">
    <h4>Strategy</h4>
    <hr className="gradient" />
    <a href="#">Age of Empires IV</a>
    <a href="#">Civilization VI</a>
    <a href="#">XCOM 2</a>
    <a href="#">StarCraft II</a>
    <a href="#">Total War: Warhammer III</a>
    <a href="#">Company of Heroes</a>
    <a href="#">Crusader Kings III</a>
    <a href="#">Into the Breach</a>
  </div>
  &nsbp;
  <div className="dropdown-column ms-3 ">
    <h4>Arcade</h4>
    <hr className="gradient" />
    <a href="#">Cuphead</a>
    <a href="#">Hotline Miami</a>
    <a href="#">Geometry Dashs</a>
    <a href="#">Pac-Man Championship Edition</a>
    <a href="#">Sonic Mania</a>
    <a href="#">BattleBlock Theater</a>
    <a href="#">Bit.Trip Runner</a>
    <a href="#">Super Meat Boy</a>
  </div>
  <div className="dropdown-column ms-4 ">
    <h4>Multiplayer / Party</h4>
    <hr className="gradient" />
    <a href="#">Among Us</a>
    <a href="#">Overcooked 2</a>
    <a href="#">Fall Guys</a>
    <a href="#">Gang Beasts</a>
    <a href="#">It Takes Two</a>
    <a href="#">Jackbox Party Pack</a>
    <a href="#">Minecraft multiplayer</a>
    <a href="#">Rocket League</a>
  </div>
</div>

              </div>
            </li>
            <li>About</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div className="nav-right">
          <button className="btn">Login</button>
          <button className="btn">Register</button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
