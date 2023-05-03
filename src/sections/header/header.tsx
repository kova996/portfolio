import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuButton from "../../components/common/menu-button/MenuButton";
import "./header.css";

interface Props {}

export const Header: React.FC<Props> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [topDistance, setTopDistance] = useState(0);

  useEffect(() => {
    document.onscroll = (event: any) => {
      setTopDistance(document.documentElement.scrollTop);
    };
  }, []);

  return (
    <nav className={`navbar`}>
      <div className={`nav-main`}>
        <div className={`logo`}>IAmLuka</div>
        <MenuButton
          isOpened={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        />
      </div>
      <div className={`nav-elements ${mobileMenuOpen ? "is-visible" : ""}`}>
        <ul>
          <li className={`${!mobileMenuOpen ? "no-padding" : ""}`}>
            <MenuButton
              isOpened={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Test</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link
              className={`contact-button ${mobileMenuOpen ? "is-visible" : ""}`}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
