import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function BackNav({ children, to }) {
  const navigate = useNavigate();

  function handleBack() {
    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  }

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-center h-14 px-5 bg-white shadow-2xs">
        <button
          onClick={handleBack}
          className="
            absolute left-3
            flex items-center justify-center
            w-10 h-10
            rounded-full
            hover:bg-gray-100
            active:bg-gray-200
            transition
          "
        >
          <MdKeyboardArrowLeft className="text-2xl text-gray-700" />
        </button>
        <p className="font-semibold text-base">{children}</p>
      </div>
    </div>
  );
}
