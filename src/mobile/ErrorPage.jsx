import { FaRegSadTear } from "react-icons/fa";

export default function ErrorPage() {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-center gap-4">
        <FaRegSadTear className="w-20 h-20 text-gray-400" />
        <h1 className="text-2xl font-bold">Something went wrong</h1>
        <p className="text-gray-500">
          We couldn’t find what you were looking for.
        </p>
      </div>
    );
}