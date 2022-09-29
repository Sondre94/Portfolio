import {
  StyledFooter,
  FooterTextContainer,
  ContactList,
  FooterTitle,
  SocialLinks,
} from "../styles/styles";
import { BsGithub, BsLinkedin } from "react-icons/bs";

import { TEXT } from "./textconsts";

export default function Footer() {
  const style = { margin: "15px" };
  return (
    <>
      <SocialLinks>
        <BsGithub style={style} />
        <BsLinkedin style={style} />
      </SocialLinks>
      <StyledFooter>
        <FooterTextContainer>
          <div className="contact-info">
            <FooterTitle>{TEXT.FOOTER_SECTION.FOOTER_TITLE}</FooterTitle>
            <ContactList>
              <li>
                <strong>{TEXT.FOOTER_SECTION.CONTACT_CATEGORY.EMAIL}</strong>
                {TEXT.FOOTER_SECTION.CONTACT_INFO.EMAIL}
              </li>
              <li>
                <strong>{TEXT.FOOTER_SECTION.CONTACT_CATEGORY.PHONE}</strong>
                {TEXT.FOOTER_SECTION.CONTACT_INFO.PHONE}
              </li>
              <li>
                <strong>
                  {TEXT.FOOTER_SECTION.CONTACT_CATEGORY.GITHUB_LINK}
                </strong>
                {TEXT.FOOTER_SECTION.CONTACT_INFO.GITHUB_LINK}
              </li>
            </ContactList>
          </div>
        </FooterTextContainer>
      </StyledFooter>
    </>
  );
}
