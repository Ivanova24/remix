import React, { useState } from "react";
import { Header, NavBar, Links, LinksCta } from "./HeroStyle";
import Button from "../../common/Button";
import MenuButton from "../../common/MenuButton";

const Hero = () => {
  
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Header>
      <a href="/">
        <img src={"/assets/logo-remix-light.svg"} alt="Home Remix" />
      </a>
      <NavBar open={open}>
        <Links>
          <ul>
            <a href="/">
              <li>Product</li>
            </a>
            <a href="/">
              <li>Pricing</li>
            </a>
            <a href="/">
              <li>For Sketch</li>
            </a>
          </ul>
        </Links>
        <LinksCta>
          <ToggleMode></ToggleMode>
          <a href="/">Sign in</a>
          <Button primary>
            <svg
              width="14"
              height="21"
              viewBox="0 0 14 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.50075 21C5.43235 21 7.00003 19.432 7.00003 17.5V14H3.50075C1.56914 14 0.00146484 15.568 0.00146484 17.5C0.00146484 19.432 1.56914 21 3.50075 21Z"
                fill="#0ACF83"
              />
              <path
                d="M0.00146484 10.5C0.00146484 8.568 1.56914 7 3.50075 7H7.00003V14H3.50075C1.56914 14 0.00146484 12.432 0.00146484 10.5Z"
                fill="#A259FF"
              />
              <path
                d="M0.00244141 3.5C0.00244141 1.568 1.57012 0 3.50172 0H7.00101V7H3.50172C1.57012 7 0.00244141 5.432 0.00244141 3.5Z"
                fill="#F24E1E"
              />
              <path
                d="M7 0H10.4993C12.4309 0 13.9986 1.568 13.9986 3.5C13.9986 5.432 12.4309 7 10.4993 7H7V0Z"
                fill="#FF7262"
              />
              <path
                d="M13.9986 10.5C13.9986 12.432 12.4309 14 10.4993 14C8.56769 14 7 12.432 7 10.5C7 8.568 8.56769 7 10.4993 7C12.4309 7 13.9986 8.568 13.9986 10.5Z"
                fill="#1ABCFE"
              />
            </svg>
            Get Figma Plugin
          </Button>
        </LinksCta>
      </NavBar>
      <MenuButton open={open} handleClick={handleClick} />
    </Header>
  );
};

export default Hero;

