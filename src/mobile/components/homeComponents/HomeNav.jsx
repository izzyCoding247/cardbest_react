import { USERSDATA } from "../../../data/UsersData";
import GraceA from "../../../assets/GraceA.png";
import { BsChatLeftText } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MESSAGEDATA } from "../../../data/MessageData";

export default function HomeNav() {
  const messageData = MESSAGEDATA;
  const user = USERSDATA[0];
  return (
    <div className="flex justify-between items-center px-3 py-5">
      <Link
        to="/profile"
        className="flex items-center lg:max-w-100 max-w-45 bg-white rounded-full shadow-sm px-3 py-1 hover:shadow-md transition-shadow cursor-pointer"
      >
        <img
          src={GraceA}
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover"
        />

        <h2 className="font-semibold text-gray-800 pl-3 text-sm sm:text-base truncate">
          {user.name}
        </h2>
      </Link>
      <div className="">
        <Link
          to="/message"
          className="relative w-10 h-10 flex items-center justify-center bg-white text-black rounded-full shadow-md"
        >
          <BsChatLeftText className="text-lg" />

          <span
            className="
        absolute top-0 right-0
        w-5 h-5
        bg-red-600 text-white
        text-xs font-bold
        flex items-center justify-center
        rounded-full
        border-2 border-white
      "
          >
            {messageData?.length ?? 0}
          </span>
        </Link>
      </div>
    </div>
  );
}
