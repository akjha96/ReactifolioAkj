import React, { Component } from "react";
import DesktopNavbar from "../desktop-navbar/Desktop-navbar.component";
import MobileNavbar from "../mobile-navbar/Mobile-navbar.component";
import styled from "styled-components";

const MyNavbar = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  overflow-x: hidden;
`;

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMobileNavbar: false
    };
  }

  componentDidMount = () => {
    window.addEventListener("resize", this.checkAndAutoHideMobileNavbar);
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.checkAndAutoHideMobileNavbar);
  };

  toggleMobileNavbar = () => {
    this.setState(prevState => {
      return { displayMobileNavbar: !prevState.displayMobileNavbar };
    });
  };

  checkAndAutoHideMobileNavbar = () => {
    const screenWidth = window.innerWidth;

    if (this.state.displayMobileNavbar && screenWidth > 768) {
      this.setState({
        displayMobileNavbar: false
      });
    }
  };

  render() {
    return (
      <MyNavbar>
        <DesktopNavbar displayMobileNavbar={this.state.displayMobileNavbar} toggleMobileNavbar={this.toggleMobileNavbar} />
        <MobileNavbar displayMobileNavbar={this.state.displayMobileNavbar} />
      </MyNavbar>
    );
  }
}

export default Navbar;
