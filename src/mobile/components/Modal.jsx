import { useEffect } from "react";

export default function Modal({ open, onClose, children }) {
  // Added side effect to handle ESC key when modal is open
  useEffect(() => {
    if (!open) return; 

    function handleKeyDown(e) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    // Added cleanup to prevent memory leaks
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center">

      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div
        role="dialog" 
        aria-modal="true" 
        className="
          relative z-10
          bg-white
          rounded-xl
          p-4
          max-w-3xl
          w-full
          mx-4
        "
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="
            absolute top-3 right-3
            w-9 h-9
            flex items-center justify-center
            rounded-full
            text-white
            hover:text-gray-700
            bg-gray-700
            hover:bg-gray-100
            font-bold text-lg
          "
        >
          ×
        </button>

        {children}
      </div>
    </div>
  );
}
