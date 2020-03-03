import React from "react";
import Navlinks from "../navlinks/Navlinks.components";
import styled from "styled-components";
import mobileNavIcon from "../../../assets/icons/mobile-nav-icon.svg";
import Logo from "../../../assets/icons/logow.png";

const MyDesktopNavbar = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;

  position: relative;
  z-index: 9999;

  background: ${props => props.theme.primary};
  color: ${props => props.theme.textColor};

  height: 11vh;

  .logo {
    width: 5vw;
    cursor: pointer;
  }
  .nav-links {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    width: 30vh;
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

  img {
    cursor: pointer;
  }

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
      <img className="logo" src={Logo} alt="" />

      <Navlinks />
      <MyMobileNavButton displayMobileNavbar={props.displayMobileNavbar} onClick={props.toggleMobileNavbar}>
        <img src={mobileNavIcon} alt="" />
      </MyMobileNavButton>
    </MyDesktopNavbar>
  );
};

export default DesktopNavbar;
