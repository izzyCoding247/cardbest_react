import React, { useState, useMemo } from "react";
import BackNav from "./components/BackNav";

export default function Invite() {
  /* -------------------------------------------------
     REFERRAL DATA
     Wrapped in useMemo to prevent re-creation
     on every render (ESLint-safe & production-ready)
  -------------------------------------------------- */

  const referralData = useMemo(
    () => [
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        hasTraded: true,
        reward: 500,
      },
      {
        id: 2,
        name: "Sarah Kim",
        email: "sarah@example.com",
        hasTraded: false,
        reward: 0,
      },
      {
        id: 3,
        name: "Michael Lee",
        email: "michael@example.com",
        hasTraded: true,
        reward: 500,
      },
      {
        id: 4,
        name: "Aisha Bello",
        email: "aisha@example.com",
        hasTraded: true,
        reward: 500,
      },
    ],
    [] // empty dependency array = stable reference
  );

  /* -------------------------------------------------
     DERIVED VALUES
  -------------------------------------------------- */

  const totalInvites = referralData.length;

  const totalEarnings = useMemo(() => {
    return referralData.reduce(
      (sum, user) => sum + (user.hasTraded ? user.reward : 0),
      0
    );
  }, [referralData]);

  /* -------------------------------------------------
     UI STATE
  -------------------------------------------------- */

  const referralCode = "IZZY-4F92";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-dvh bg-gray-50">
      <BackNav to="/">Invite</BackNav>

      <div className="px-5 pt-24 pb-40">
        {/* ---------------- HEADER ---------------- */}
        <h1 className="text-xl font-semibold mb-2">
          Invite friends & earn rewards
        </h1>

        <p className="text-sm text-gray-500 mb-6">
          Earn ₦500 for every friend who signs up and completes at least one
          trade.
        </p>

        {/* ---------------- STATS ---------------- */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="text-xs text-gray-500 mb-1">Friends invited</p>
            <p className="text-xl font-semibold">{totalInvites}</p>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="text-xs text-gray-500 mb-1">Total earned</p>
            <p className="text-xl font-semibold">₦{totalEarnings}</p>
          </div>
        </div>

        {/* ---------------- REFERRAL CODE ---------------- */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <p className="text-sm text-gray-500 mb-2">Your invite code</p>

          <div className="flex items-center justify-between border rounded-md px-4 py-3">
            <span className="font-mono font-semibold tracking-wide">
              {referralCode}
            </span>

            <button
              onClick={handleCopy}
              className="text-sm font-medium text-black"
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </div>

        {/* ---------------- INVITE BUTTON ---------------- */}
        <button className="w-full bg-black text-white py-3 rounded-lg font-semibold mb-8">
          Invite friends
        </button>

        {/* ---------------- INVITE HISTORY ---------------- */}
        <div>
          <h2 className="text-sm font-semibold mb-3">Invite history</h2>

          <div className="flex flex-col gap-3">
            {referralData.map((user) => (
              <div
                key={user.id}
                className="bg-white rounded-lg p-4 shadow-sm flex justify-between items-center"
              >
                <div>
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>

                <div className="text-right">
                  {user.hasTraded ? (
                    <p className="text-sm font-semibold text-green-600">
                      +₦{user.reward}
                    </p>
                  ) : (
                    <p className="text-xs text-gray-400">No trade yet</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          Rewards are credited once an invited friend completes their first
          trade.
        </p>
      </div>
    </div>
  );
}
