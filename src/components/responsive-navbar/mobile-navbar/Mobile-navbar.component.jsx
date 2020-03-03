import React from "react";
import styled from "styled-components";
import Navlinks from "../navlinks/Navlinks.components";

const MyMobileNavbar = styled.nav`
  width: 50vw;
  background: ${props => props.theme.primary};
  align-self: flex-end;

  margin-bottom: 15px;

  transition: transform 0.5s;
  transform: translateX(${props => (props.displayMobileNavbar ? "0%" : "calc(100% + 15px)")});

  .nav-links {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
    height: 60vh;
    list-style: none;
  }

  .link {
    text-decoration: none;
    font-size: 2.5vh;
    color: ${props => props.theme.textColor};

    &::after {
      content: "";
      height: 2px;
      width: 100%;
      background: ${props => props.theme.textColor};
      display: block;
    }
  }
`;

const MobileNavbar = props => {
  return (
    <MyMobileNavbar displayMobileNavbar={props.displayMobileNavbar}>
      <Navlinks isMobileLink={true} />
    </MyMobileNavbar>
  );
};

export default MobileNavbar;
