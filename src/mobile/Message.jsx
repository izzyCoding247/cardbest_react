import { PiBroomBold } from "react-icons/pi";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";
import BackNav from "./components/BackNav";
import { MESSAGEDATA } from "../data/MessageData";
import { useState } from "react";

export default function Message() {

  const [messages, setMessages] = useState(
    MESSAGEDATA.map((msg) => ({
      ...msg,
      isExpanded: false, 
    }))
  );

  const handleViewDetails = (id) => {
    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.mId === id
          ? {
              ...msg,
              status: "read", 
              isExpanded: !msg.isExpanded, 
            }
          : msg
      )
    );
  };

  return (
    <div className="bg-gray-50 min-h-dvh">
      <BackNav to="/">
        Message
        <span className="absolute right-5 text-xl">
          <PiBroomBold />
        </span>
      </BackNav>

      <div className="px-5 pt-20 flex flex-col gap-3 pb-40">
        {messages.map((message) => {
          const isUnread = message.status === "unread";

          return (
            <div
              key={message.mId}
              className="bg-white rounded-lg shadow-sm p-4"
            >
              {/* Message title */}
              <div className="flex justify-between">
                <p
                  className={`font-semibold mb-3 transition-colors ${
                    isUnread ? "text-black" : "text-gray-500"
                  } ${!message.isExpanded && "truncate"}`}
                >
                  {message.msgTitle}
                </p>
                <span className="text-red-500"><RiDeleteBin6Fill/></span>
              </div>

              {/* Message content */}
              <p
                className={`mb-4 transition-colors ${
                  isUnread ? "text-black" : "text-gray-500"
                } ${!message.isExpanded && "truncate"}`}
              >
                {message.msgContent}
              </p>

              {/* Footer */}
              <div className="flex justify-between items-center border-t border-gray-100 pt-2">
                <p className="text-sm text-gray-500">Dec 26, 2025 at 1:36 PM</p>

                <button
                  onClick={() => handleViewDetails(message.mId)}
                  className="flex items-center text-sm text-gray-500 hover:text-gray-700"
                >
                  <span>
                    {message.isExpanded ? "Hide details" : "View details"}
                  </span>
                  <MdKeyboardArrowRight />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
