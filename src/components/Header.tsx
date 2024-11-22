import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">
        <Image 
          src="/backwere.png" 
          alt="Baking Molds Logo" 
          width={150} 
          height={50} 
        />
      </h1>
      <nav>
        <Link href="/">
          Home
        </Link>
        <Link href="/about">
          About
        </Link>
        <Link href="/molds">
          Molds
        </Link>
        <Link href="/contact">
          Contact
        </Link>
        <FaShoppingCart style={{ color: 'white', fontSize: '20px' }} />
      </nav>
    </header>
  );
};

export default Header;
