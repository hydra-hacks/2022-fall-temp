import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

export default function Socials() {
  return (
    <div>
      <div className="flex justify-center space-x-4 flex-rows">
        <a href="https://twitter.com/HydraHacks">
          <FiTwitter size={30} />
        </a>
        <a href="https://www.instagram.com/hydrahacks/">
          <AiOutlineInstagram size={30} />
        </a>
        <a href="https://www.youtube.com/channel/UCUEfHzI8zwZsSBG4Xo61J9A">
          <AiOutlineYoutube size={30} />
        </a>
        <a href="https://www.linkedin.com/company/hydra-hacks">
          <AiOutlineLinkedin size={30} />
        </a>
        <a href="mailto:hello@hydrahacks.org">
          <FaRegEnvelopeOpen size={30} />
        </a>
      </div>
    </div>
  );
}
