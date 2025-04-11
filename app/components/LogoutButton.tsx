import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="active:transform active:translate-y-0.5 cursor-pointer flex font-medium gap-2 items-center justify-center shrink-0 transition-all border border-gray-200 rounded-lg px-3 py-2 text-sm bg-gradient-to-b from-gray-50 to-gray-100 hover:border-gray-300 shadow-sm text-gray-700"
    >
      <span>Logout</span>
    </button>
  );
}
