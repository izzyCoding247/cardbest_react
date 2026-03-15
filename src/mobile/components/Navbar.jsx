import { NavLink } from "react-router-dom";
import { RiHome5Fill } from "react-icons/ri";
import { ImUser } from "react-icons/im";
import { TbCards } from "react-icons/tb";

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-gray-200 will-change-transform">
      <ul className="flex items-center justify-between px-10 py-1">
        {/* Home */}
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 text-sm ${
              isActive ? "text-gray-900" : "text-gray-400"
            }`
          }
        >
          <RiHome5Fill className="text-xl" />
          <span className="text-[11px] font-medium">Home</span>
        </NavLink>

        <NavLink
          to="/sell"
          className="relative -mt-6 flex flex-col items-center text-gray-400"
        >
          <span
            className="
            flex items-center justify-center
            w-14 h-14
            rounded-full
            bg-linear-to-br from-teal-400 to-sky-400
            shadow-lg
          "
          >
            <TbCards className="text-white text-3xl" />
          </span>

          <span className="mt-1 mb-2 text-[11px] font-semibold ">Sell</span>
        </NavLink>

        {/* Profile */}
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 text-sm ${
              isActive ? "text-gray-900" : "text-gray-400"
            }`
          }
        >
          <ImUser className="text-xl" />
          <span className="text-[11px] font-medium">Me</span>
        </NavLink>
      </ul>
    </nav>
  );
}
