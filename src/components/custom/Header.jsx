import React from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { UserButton, useUser } from '@clerk/clerk-react';

function Header() {
  const { isSignedIn } = useUser();

  return (
    <div className="p-3 px-5 flex justify-between items-center shadow-md">
      {/* Logo + Brand */}
      <Link to="/dashboard" className="flex items-center gap-2">
        <img
          src="/logo.svg"
          className="cursor-pointer"
          width={40}
          height={40}
          alt="Resumate AI Logo"
        />
        <h1 className="text-xl font-bold tracking-wide">
          <span className="text-gray-900">Resumate</span>
          <span className="text-indigo-600">_AI</span>
        </h1>
      </Link>

      {/* Right Section */}
      {isSignedIn ? (
        <div className="flex gap-2 items-center">
          <Link to="/dashboard">
            <Button variant="outline">Dashboard</Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link to="/sign-in">
          <Button>Get Started</Button>
        </Link>
      )}
    </div>
  );
}

export default Header;
