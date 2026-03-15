import { useRef, useState } from "react";
import { FiCamera, FiX } from "react-icons/fi";

export default function MultiImageUpload() {
  const inputRef = useRef(null);
  const [images, setImages] = useState([]);

  function handleClick() {
    inputRef.current.click();
  }

  function handleChange(e) {
    const files = Array.from(e.target.files);

    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages((prev) => [...prev, ...newImages]);

    // Reset input so same image can be re-selected
    e.target.value = null;
  }

  function handleRemove(index) {
    setImages((prev) => {
      // Revoke object URL to free memory
      URL.revokeObjectURL(prev[index].preview);

      return prev.filter((_, i) => i !== index);
    });
  }

  return (
    <div className="p-5">
      {/* Upload trigger */}
      <button
        type="button"
        onClick={handleClick}
        className="
          w-20 h-20
          flex items-center justify-center
          rounded-lg
          border-2 border-dashed border-gray-300
          text-gray-500
          hover:border-teal-500 hover:text-teal-500
          transition
        "
      >
        <FiCamera className="text-2xl" />
      </button>

      {/* Hidden input */}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={handleChange}
        className="hidden"
      />

      {/* Preview grid */}
      {images.length > 0 && (
        <div className="grid grid-cols-4 gap-3 mt-4">
          {images.map((img, index) => (
            <div key={index} className="relative group">
              <img
                src={img.preview}
                alt="preview"
                className="w-full h-20 object-cover rounded-lg"
              />

              {/* Remove button */}
              <button
                type="button"
                onClick={() => handleRemove(index)}
                className="
                  absolute -top-2 -right-2
                  w-6 h-6
                  flex items-center justify-center
                  rounded-full
                  bg-black/70 text-white
                  text-xs
                  opacity-90
                  hover:bg-red-600
                  transition
                "
              >
                <FiX />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
