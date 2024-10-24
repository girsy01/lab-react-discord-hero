import logoImg from "../assets/discord-logo-white.png";
import menuIcon from "../assets/menu-icon.png";
import bgImg from "../assets/discord-background.png";

export const Hero = () => {
  return (
    <>
      <div id="header">
        <img src={logoImg} id="logo" />
        <img src={menuIcon} id="menu" />
      </div>
      <div id="hero">
        <h1>{"Imagine a place...".toUpperCase()}</h1>
        <p>
          ...where zou can belong to a school club, a gaming group, or a worldwide art community.
          Where just you and a handful of friends can spend time together. A place that makes it
          easy to talk every day and hang out more often.
        </p>
        <button>Download for Mac</button>
        <button className="btn-black">Open Discord in your browser</button>
        <img src={bgImg} id="bgImg" />
      </div>
    </>
  );
};
