import { StyledNavBar, StyledNavLinks } from "../styles/styles";
import { TEXT } from "./textconsts";

export default function NavBar() {
  return (
    <StyledNavBar>
      <StyledNavLinks>{TEXT.NAVBAR.OM_MEG}</StyledNavLinks>
      <StyledNavLinks>{TEXT.NAVBAR.PROSJEKT}</StyledNavLinks>
      <StyledNavLinks>{TEXT.NAVBAR.KONTAKT_MEG}</StyledNavLinks>
    </StyledNavBar>
  );
}
