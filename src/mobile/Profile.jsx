import { USERSDATA } from "../data/UsersData";
import Balance from "./components/homeComponents/Balance";
import ProfileLinks from "./components/profileComponent/ProfileLinks";
import ProfileNav from "./components/profileComponent/ProfileNav";

export default function Profile() {
  const user = USERSDATA[0];
  return (
    <div className="bg-gray-50 h-dvh">
      <div className="bg-linear-to-t from-white to-teal-100 shadow-xs rounded-b-3xl">
        <ProfileNav user={user} />
        <div className="p-5">
          <Balance />
        </div>
      </div>
      <div className="">
        <ProfileLinks user={user} />
      </div>
    </div>
  );
}
