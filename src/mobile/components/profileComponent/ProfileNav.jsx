import GraceA from "../../../assets/GraceA.png";


export default function ProfileNav({ user }) {
  return (
    <div className="flex p-5 items-center ">
      <div className="">
        <img
          src={GraceA}
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover"
        />
      </div>
      <div className="ml-3">
        <p className="text-xl lg:max-w-100 max-w-45 font-semibold">
          {user.name}
        </p>
        <p className="flex items-center mt-1 bg-slate-200 rounded-full pr-3">
          <span
            className="w-5.5 h-5.5 bg-slate-400 text-white flex items-center justify-center font-bold text-sm 
                clip-hexagon"
          >
            {user.level}
          </span>
          <p className="text-xs ml-2 text-gray-700">Upgrade to next Level</p>
        </p>
      </div>
    </div>
  );
}
