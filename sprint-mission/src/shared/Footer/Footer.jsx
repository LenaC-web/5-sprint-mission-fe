import "./Footer.css";
import { SNS_LINK_LIST } from "../../utils/constants";
import { FooterLink } from "./ui/FooterLink";
import { FooterSns } from "./ui/FooterSns";
import { Typo, typoStyles } from "../Typo/Typo";

export function Footer() {
  return (
    <footer>
      <div className="content">
        <div id="addr">
          <Typo className={typoStyles.textLgRegular} content="©codeit - 2024" />
        </div>

        <FooterLink />

        <div className="sns-box">
          {SNS_LINK_LIST.map((sns, idx) => (
            <FooterSns sns={sns} key={idx} />
          ))}
        </div>
      </div>
    </footer>
  );
}
