import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import NavLinks from './navlinks';
import SearchBox from './searchbox';
import DarkModeButton from './darkmodebtn';

function Header() {
  return (
    <header>
      <div className="grid grid-cols-3 p-8 items-center">
        <Bars3Icon className="h-8 w-8 cursor-pointer" />
        <Link href={'/'} prefetch={false}>
          <h1 className="font-serif text-4xl flex-1 text-center">
            Live News App
          </h1>
        </Link>
        <div className="flex items-center justify-end space-x-2">
          {/* Dark mode button */}
          <DarkModeButton />
          
        </div>
      </div>

      {/* Navlinks */}
      <NavLinks />
      {/* search box */}
      <SearchBox />
    </header>
  );
}

export default Header;