import {
  StyledFooter,
  FooterTextContainer,
  ContactList,
  FooterTitle,
} from "../styles/styles";

import { TEXT } from "./textconsts";

export default function Footer() {
  return (
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
  );
}
