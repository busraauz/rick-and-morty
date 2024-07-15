'use client';

import Link from 'next/link';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Image from 'next/image'
import { Creepster } from 'next/font/google';

const font = Creepster
  ({ subsets: ["latin"], weight: '400' });

const Navbar = () => {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-background text-foreground shadow-md z-50">
      <div className="container">
        <div className="flex items-center justify-between my-5">
          <div className="flex items-center">
            <Link href="/" className="flex items-center relative">
              <span className={cn("text-4xl font-bold absolute text-primary top-1", font.className)}>Rick and Morty</span>
              <span className={cn("text-4xl font-bold ", font.className)}>Rick and Morty</span>

            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="/about" className={cn(["hover:text-primary", path === '/about' ? 'text-primary' : 'text-secondary-foreground'])}>About</Link>
            <Link href="/episodes" className={cn(["hover:text-primary", path === '/episodes' ? 'text-primary' : 'text-secondary-foreground'])}>Episodes</Link>
            <Link href="/characters" className={cn(["hover:text-primary", path === '/characters' ? 'text-primary' : 'text-secondary-foreground'])}>Characters</Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? <IoMdClose className="w-6 h-6" /> : <RxHamburgerMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <Link href="/about" className={cn(["block hover:text-primary py-2", path === '/about' ? 'text-primary' : 'text-secondary-foreground'])}>About</Link>
            <Link href="/episodes" className={cn(["block hover:text-primary py-2", path === '/episodes' ? 'text-primary' : 'text-secondary-foreground'])}>Episodes</Link>
            <Link href="/characters" className={cn(["block hover:text-primary py-2", path === '/characters' ? 'text-primary' : 'text-secondary-foreground'])}>Characters</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
