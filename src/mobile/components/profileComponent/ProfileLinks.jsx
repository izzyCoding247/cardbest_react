import { Link } from "react-router-dom";
import { LINKPAGES } from "../../../data/ProfileLinkData";

export default function ProfileLinks({ user }) {
  
  if (!user) return null;

  return (
    <div className="mt-10">
      {LINKPAGES.map((page) => {
       
        const linkTo =
          page.to === "/profile-update"
            ? `${page.to}/${user.uId}` 
            : page.to;

        return (
          <Link
            key={page.linkId} 
            to={linkTo} 
            className="block"
          >
            <div
              className={`
                flex items-center
                bg-white
                rounded-xl
                px-4 py-3
                shadow-sm hover:shadow-lg
                active:scale-[0.98]
                transition
                m-3
                text-gray-700
                ${page.style ?? ""}
              `}
            >
              {/* CHANGED: icon rendered as component */}
              <page.icon className="text-lg" />

              <span className="ml-3 text-sm">{page.pageName}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
