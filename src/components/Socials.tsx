import { faLinkedin, faTelegram, faTwitterSquare, faGithubSquare, faInstagramSquare,  } from "@fortawesome/free-brands-svg-icons";
import { faSquare, faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import Codec from "./Codec"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Socials() {
  return (
    <div>
      <Codec text="ELSEWHERE" className="mb-6" />
      <div className="w-fit fade2 grid grid-cols-3 gap-4">
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/xavier-d-mello-552276240/ ">
          <FontAwesomeIcon className="w-10 h-10 transition-all duration-300 hover:text-linkedin" icon={faLinkedin} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/xavierdmello">
          <FontAwesomeIcon className="w-10 h-10 transition-all duration-300 hover:text-github" icon={faGithubSquare} />
        </a>

        <a target="_blank" rel="noopener noreferrer" href="https://t.me/novaholonova">
          <FontAwesomeIcon className="w-10 h-10 transition-all duration-300 hover:text-telegram" icon={faTelegram} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/xavier.810/">
          <FontAwesomeIcon className="w-10 h-10 transition-all duration-300 hover:text-instagram" icon={faInstagramSquare} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/nova_holo">
          <FontAwesomeIcon className="w-10 h-10 transition-all duration-300 hover:text-twitter" icon={faTwitterSquare} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="mailto:hello@xavierdmello.com">
          <FontAwesomeIcon className="w-10 h-10 transition-all duration-300 hover:text-email" icon={faSquareEnvelope} />
        </a>
      </div>
    </div>
  );
}
