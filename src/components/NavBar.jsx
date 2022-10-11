import { StyledNavBar, StyledNavLinks } from "../styles/styles";
import { TEXT } from "./textconsts";

export default function NavBar() {
  return (
    <StyledNavBar>
      <StyledNavLinks href="#about--section">
        {TEXT.NAVBAR.OM_MEG}
      </StyledNavLinks>
      <StyledNavLinks>{TEXT.NAVBAR.PROSJEKT}</StyledNavLinks>
      <StyledNavLinks href="#kontakt--meg">
        {TEXT.NAVBAR.KONTAKT_MEG}
      </StyledNavLinks>
    </StyledNavBar>
  );
}
