import styled from "styled-components";
import React from "react";

export default function Header() {
  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="HOME" />
      </Logo>
      <NavMenu>
        <a href="/home">
          <img src="/images/home-icon.svg" alt="HOME" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" alt="SEARCH" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" alt="ORIGINALS" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" alt="MOVIES" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" alt="SERIES" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <Login>login</Login>
    </Nav>
  );
}
const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  padding: 0 36px;
  align-items: center;
  background: #090b13;
  justify-content: space-between;
  letter-spacing: 16px;
  z-index: 3;
`;
const Logo = styled.a`
  width: 80px;
  display: inline-block;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  img {
    display: block;
    width: 100%;
  }
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row-wrap;
  height: 100%;
  width: auto;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  @media (max-width: 768px) {
    display: none;
  }
  a {
    display: flex;
    min-width: 20px;
    width: auto;
    align-items: center;
    padding: 0 12px;
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
      content:'';
        height: 2px;
        left: 0px;
        bottom:-6px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover{
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
    }
  }
`;
const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;
