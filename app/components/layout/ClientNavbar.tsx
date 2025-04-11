"use client";

import { Star, ArrowRight } from "lucide-react";
import LoginButton from "@/app/components/auth/LoginButton";
import LogoutButton from "@/app/components/auth/LogoutButton";

interface ClientNavbarProps {
  isAuthenticated: boolean;
}

export default function ClientNavbar({ isAuthenticated }: ClientNavbarProps) {
  return (
    <header>
      <div
        className={`fixed top-0 right-0 left-0 z-30 flex justify-center px-4 transition-all duration-300 h-16 sm:h-20`}
      >
        <div className="flex h-full w-full max-w-7xl items-center justify-between gap-x-4">
          <div className="flex">
            <a
              className="rounded-md -ml-2 p-2 transition-opacity hover:opacity-50"
              href="/"
            >
              <div className="flex w-fit shrink-0 items-center gap-2 select-none">
                <div className="text-green-700">
                  <Star className="w-6 h-6" />
                </div>
                <span className="font-medium text-gray-800 text-xl">kale</span>
              </div>
            </a>
          </div>
          <div className="flex gap-x-2">
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
            <button className="active:transform active:translate-y-0.5 cursor-pointer flex font-medium gap-2 items-center justify-center shrink-0 transition-all border border-green-600 rounded-lg px-3 py-2 text-sm bg-gradient-to-b from-green-500 to-green-600 hover:opacity-90 shadow-sm text-white">
              <span>Join waitlist</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
