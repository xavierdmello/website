import { faLinkedin, faTelegram, faTwitterSquare, faGithubSquare, faInstagramSquare, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import Codec from "./Codec"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Socials() {
  return (
    <div>
      <Codec text="ELSEWHERE" className="mb-6"/>
      <div className="w-fit fade2 grid grid-cols-3 gap-4">
        <a href="https://www.linkedin.com/in/xavier-d-mello-552276240/">
          <FontAwesomeIcon className="w-10 h-10 transition-all duration-300 hover:text-linkedin" icon={faLinkedin} />
        </a>
        <a href="https://github.com/xavierdmello">
          <FontAwesomeIcon className="w-10 h-10 transition-all duration-300 hover:text-github" icon={faGithubSquare} />
        </a>

        <a href="https://t.me/novaholonova">
          <FontAwesomeIcon className="w-10 h-10 transition-all duration-300 hover:text-telegram" icon={faTelegram} />
        </a>
        <a href="https://www.instagram.com/xavier.810/">
          <FontAwesomeIcon className="w-10 h-10 transition-all duration-300 hover:text-instagram" icon={faInstagramSquare} />
        </a>
        <a href="https://twitter.com/nova_holo">
          <FontAwesomeIcon className="w-10 h-10 transition-all duration-300 hover:text-twitter" icon={faTwitterSquare} />
        </a>
      </div>
    </div>
  );
}
