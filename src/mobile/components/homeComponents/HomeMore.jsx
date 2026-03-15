import { RiCouponFill, RiShakeHandsFill } from "react-icons/ri";
import { GiTrophy } from "react-icons/gi";
import { IoReceiptSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function HomeMore() {
  const MORETHINGS = [
    {
      id: "1",
      name: "Coupon",
      icon: <RiCouponFill className="text-purple-400" />,
      linkTo: "/coupon"
    },
    {
      id: "2",
      name: "Ranking",
      icon: <GiTrophy className="text-red-500" />,
      linkTo: "/ranking"
    },
    {
      id: "3",
      name: "Transaction",
      icon: <IoReceiptSharp className="text-teal-500" />,
      linkTo: "/transaction"
    },
    {
      id: "4",
      name: "Invite",
      icon: <RiShakeHandsFill className="text-blue-400" />,
      linkTo: "/invite"
    },
  ];
  return (
    <div className="grid grid-cols-4 py-4">
      {MORETHINGS.map((more) => (
        <Link to={more.linkTo}
          key={more.id}
          className="flex flex-col items-center justify-center "
        >
          <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-2xs text-2xl">
            {more.icon}
          </span>

          <p className="text-center text-[12px] font-medium text-gray-700">
            {more.name}
          </p>
        </Link>
      ))}
    </div>
  );
}
