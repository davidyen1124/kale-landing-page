import { Search as SearchIcon, Upload } from "lucide-react";
import { FormEvent, useState, useRef } from "react";

interface SearchProps {
  query: string;
  setQuery: (query: string) => void;
  handleSearch: (
    e: FormEvent,
    imageBase64?: string,
    imageType?: string
  ) => void;
}

export default function Search({ query, setQuery, handleSearch }: SearchProps) {
  const [image, setImage] = useState<string | null>(null);
  const [imageType, setImageType] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (file: File) => {
    if (file && file.type.startsWith("image/")) {
      setImageType(file.type);
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = e.target?.result as string;
        setImage(base64);
        setQuery("");

        // Automatically trigger search when image is uploaded
        const base64Data = base64.split(",")[1];
        const dummyEvent = new Event("submit", {
          cancelable: true,
        }) as unknown as FormEvent;
        handleSearch(dummyEvent, base64Data, file.type);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      handleSearch(e);
    } else if (image) {
      const base64Data = image.split(",")[1];
      handleSearch(e, base64Data, imageType || "image/jpeg");
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="relative w-full">
      <div className="relative">
        <form onSubmit={handleSubmit} className="relative">
          <div className="w-full px-6 py-4 rounded-full border border-gray-200 focus-within:ring-2 focus-within:ring-green-500 focus-within:border-transparent text-gray-700 flex items-center">
            {image && (
              <div className="mr-2">
                <img
                  src={image}
                  alt="Preview"
                  className="h-6 w-6 rounded object-cover"
                />
              </div>
            )}
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Try Doritos, Nutella, or Gatorade"
              className="w-full focus:outline-none"
            />
          </div>

          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center">
            <button
              type="button"
              onClick={handleUploadClick}
              className="bg-blue-100 p-2 mr-2 rounded-full text-blue-500 hover:bg-blue-200 transition-colors"
            >
              <Upload className="h-5 w-5" />
            </button>

            <button
              type="submit"
              className="bg-green-100 p-2 rounded-full text-green-500 hover:bg-green-200 transition-colors"
            >
              <SearchIcon className="h-5 w-5" />
            </button>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                handleFileChange(e.target.files[0]);
              }
            }}
          />
        </form>
      </div>
    </div>
  );
}
