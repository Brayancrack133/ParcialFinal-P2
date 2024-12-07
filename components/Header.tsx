// components/SocialLogin.js
import React from "react";
import Link from "next/link";
import "./Header.css"

const Header = () => {
  return (
    <div className="header">
      <p>
        <Link href="">Home</Link>
      </p>
      <p>
        <Link href="">About</Link>
      </p>
      <p>
        <Link href="">Dashboard</Link>
      </p>
    </div>
  );
};

export default Header;
