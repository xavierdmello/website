import github from "../assets/github.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png"
import telegram from "../assets/telegram.png"

export default function Socials() {
  return (
    <div>
      <h4 className="mb-6">ELSEWHERE</h4>
      <div className="w-fit grid grid-cols-3 gap-4">
        <a className="w-10 h-10 transition-all duration-300 linkedin" href="https://www.linkedin.com/in/xavier-d-mello-552276240/">
          <img src={linkedin} alt="LinkedIn Logo" />
        </a>
        <a className="w-10 h-10 transition-all duration-300 github" href="https://github.com/xavierdmello">
          <img className="m-0 p-0" src={github} alt="Github Logo" />
        </a>

        <a className="w-10 h-10 transition-all duration-300 telegram" href="https://t.me/novaholonova">
          <img src={telegram} alt="Telegram Logo" />
        </a>
        <a className="w-10 h-10 transition-all duration-300 instagram" href="https://www.instagram.com/xavier.810/">
          <img src={instagram} alt="Instagram Logo" />
        </a>
        <a className="w-10 h-10 transition-all duration-300 twitter" href="https://twitter.com/nova_holo">
          <img src={twitter} alt="Twitter Logo" />
        </a>
      </div>
    </div>
  );
}
