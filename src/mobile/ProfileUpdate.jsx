import { useParams } from "react-router-dom";
import BackNav from "./components/BackNav";

export default function ProfileUpdate() {
  const { uId } = useParams();
  return (
    <div>
      <BackNav to="/profile">Account Setting</BackNav>
      <div className="pt-30">
        <p>Profile Update {uId}</p>
      </div>
    </div>
  );
}
