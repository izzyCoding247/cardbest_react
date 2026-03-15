import { useState } from "react";

export default function Auth() {
  /* -------------------------------------------------
     FORM VISIBILITY STATE
  -------------------------------------------------- */

  const [activeForm, setActiveForm] = useState("login");

  /* -------------------------------------------------
     LOGIN STATE
  -------------------------------------------------- */

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  /* -------------------------------------------------
     REGISTER STATE
  -------------------------------------------------- */

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  /* -------------------------------------------------
     OTP STATE (REGISTER ONLY)
     Completely isolated from form data
  -------------------------------------------------- */

  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isSendingOtp, setIsSendingOtp] = useState(false);

  /* -------------------------------------------------
     LOGIN HANDLERS
  -------------------------------------------------- */

  const handleLoginChange = (e) => {
    const { name, value } = e.target;

    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // Production: send loginData to backend
    console.log("Login payload:", loginData);
  };

  /* -------------------------------------------------
     REGISTER HANDLERS
  -------------------------------------------------- */

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;

    setRegisterData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* -------------------------------------------------
     OTP HANDLERS
  -------------------------------------------------- */

  const handleSendOtp = async () => {
    if (!registerData.email) return;

    setIsSendingOtp(true);

    // Production: call API to send OTP
    console.log("Sending OTP to:", registerData.email);

    setTimeout(() => {
      setIsOtpSent(true);
      setIsSendingOtp(false);
    }, 1000);
  };

  const handleVerifyOtp = async () => {
    // Production: verify OTP via API
    console.log("Verifying OTP:", otp);

    // Mock success
    if (otp === "123456") {
      setIsEmailVerified(true);
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    if (!isEmailVerified) {
      alert("Please verify your email first.");
      return;
    }

    // Production: send registerData to backend
    console.log("Register payload:", registerData);
  };

  return (
    <div className="min-h-dvh flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow p-6">
        {/* ---------------- FORM TOGGLE ---------------- */}
        <div className="flex mb-6">
          <button
            type="button"
            onClick={() => setActiveForm("login")}
            className={`flex-1 py-2 font-semibold border-b-2 ${
              activeForm === "login"
                ? "border-black text-black"
                : "border-transparent text-gray-400"
            }`}
          >
            Login
          </button>

          <button
            type="button"
            onClick={() => setActiveForm("register")}
            className={`flex-1 py-2 font-semibold border-b-2 ${
              activeForm === "register"
                ? "border-black text-black"
                : "border-transparent text-gray-400"
            }`}
          >
            Register
          </button>
        </div>

        {/* ---------------- LOGIN FORM ---------------- */}
        {activeForm === "login" && (
          <form onSubmit={handleLoginSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={loginData.email}
              onChange={handleLoginChange}
              className="p-2 w-full h-11 px-4 pr-10
            text-sm text-gray-800
            bg-white
            border border-gray-300
            rounded-lg
            appearance-none
            focus:outline-none
            focus:border-teal-500
            focus:ring-2 focus:ring-teal-200
            transition"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleLoginChange}
              className="p-2 w-full h-11 px-4 pr-10
            text-sm text-gray-800
            bg-white
            border border-gray-300
            rounded-lg
            appearance-none
            focus:outline-none
            focus:border-teal-500
            focus:ring-2 focus:ring-teal-200
            transition"
              required
            />

            <button type="submit" className="bg-black text-white py-2 rounded">
              Login
            </button>
          </form>
        )}

        {/* ---------------- REGISTER FORM ---------------- */}
        {activeForm === "register" && (
          <form onSubmit={handleRegisterSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full name"
              value={registerData.name}
              onChange={handleRegisterChange}
              className="p-2 w-full h-11 px-4 pr-10
            text-sm text-gray-800
            bg-white
            border border-gray-300
            rounded-lg
            appearance-none
            focus:outline-none
            focus:border-teal-500
            focus:ring-2 focus:ring-teal-200
            transition"
              required
            />

            {/* Email + OTP button */}
            <div className="flex gap-2">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={registerData.email}
                onChange={handleRegisterChange}
                disabled={isEmailVerified}
                className="flex-1 p-2 w-full h-11 px-4 pr-10
            text-sm text-gray-800
            bg-white
            border border-gray-300
            rounded-lg
            appearance-none
            focus:outline-none
            focus:border-teal-500
            focus:ring-2 focus:ring-teal-200
            transition"
                required
              />

              <button
                type="button"
                onClick={handleSendOtp}
                disabled={isSendingOtp || isEmailVerified}
                className="px-3 text-sm bg-gray-800 text-white rounded"
              >
                {isEmailVerified
                  ? "Verified"
                  : isOtpSent
                  ? "Resend"
                  : "Send OTP"}
              </button>
            </div>

            {/* OTP input */}
            {isOtpSent && !isEmailVerified && (
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="flex-1 p-2 w-full h-11 px-4 pr-10
            text-sm text-gray-800
            bg-white
            border border-gray-300
            rounded-lg
            appearance-none
            focus:outline-none
            focus:border-teal-500
            focus:ring-2 focus:ring-teal-200
            transition"
                />

                <button
                  type="button"
                  onClick={handleVerifyOtp}
                  className="px-3 text-sm bg-black text-white rounded"
                >
                  Verify
                </button>
              </div>
            )}

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={registerData.password}
              onChange={handleRegisterChange}
              className="p-2 w-full h-11 px-4 pr-10
            text-sm text-gray-800
            bg-white
            border border-gray-300
            rounded-lg
            appearance-none
            focus:outline-none
            focus:border-teal-500
            focus:ring-2 focus:ring-teal-200
            transition"
              required
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={registerData.confirmPassword}
              onChange={handleRegisterChange}
              className="p-2 w-full h-11 px-4 pr-10
            text-sm text-gray-800
            bg-white
            border border-gray-300
            rounded-lg
            appearance-none
            focus:outline-none
            focus:border-teal-500
            focus:ring-2 focus:ring-teal-200
            transition"
              required
            />

            {/* Final submit */}
            <button
              type="submit"
              disabled={!isEmailVerified}
              className={`py-2 rounded text-white ${
                isEmailVerified ? "bg-black" : "bg-gray-400"
              }`}
            >
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
