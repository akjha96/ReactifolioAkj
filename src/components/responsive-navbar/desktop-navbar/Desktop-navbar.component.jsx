import React from "react";
import Navlinks from "../navlinks/Navlinks.components";
import styled from "styled-components";
import mobileNavIcon from "../../../images/mobile-nav-icon.svg";

const MyDesktopNavbar = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;

  background: ${props => props.theme.primary};
  color: ${props => props.theme.textColor};

  height: 15vh;

  .logo {
    font-size: 7vh;
    font-weight: bold;
    text-shadow: 5px 2px 5px #45a29e;
    color: ${props => props.theme.textColor};
  }
  .nav-links {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    width: 35vh;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .link {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    height: 15vh;

    padding: 0 1rem;

    text-decoration: none;
    font-size: 2.5vh;
    color: ${props => props.theme.textColor};

    &:focus {
      background: rgba(0, 0, 0, 0.1);
      outline: none;
    }

    &::after {
      content: "";
      height: 2px;
      width: 2px;
      background: ${props => props.theme.textColor};
      display: block;
      transition: width 0.4s;
    }

    &:hover::after {
      transform: width;
      width: 100%;
    }
  }
`;

const MyMobileNavButton = styled.button`
  background: transparent;
  height: 6vh;
  width: 6vw;
  border: none;
  color: white;
  display: none;

  transition: transform 0.5s ease-in-out;
  transform: rotate(${props => (props.displayMobileNavbar ? "540deg" : "0deg")});
  &:focus {
    outline: none;
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const DesktopNavbar = props => {
  return (
    <MyDesktopNavbar>
      <div className="logo">Logo</div>

      <Navlinks />
      <MyMobileNavButton displayMobileNavbar={props.displayMobileNavbar} onClick={props.toggleMobileNavbar}>
        <img src={mobileNavIcon} alt="" />
      </MyMobileNavButton>
    </MyDesktopNavbar>
  );
};

export default DesktopNavbar;
