"use client";

import { useState, FormEvent, useRef, useEffect } from "react";
import { searchFoodProducts } from "@/app/actions";
import { OpenAIResponse } from "@/app/types";
import { useSession } from "next-auth/react";
import Search from "@/app/components/Search";
import SearchResults from "@/app/components/SearchResults";
import { doritosExampleData } from "@/app/example-data";

export default function ClientPage() {
  const { data: session } = useSession();
  const [query, setQuery] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [results, setResults] = useState<OpenAIResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node) &&
        showDropdown &&
        !loading
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown, loading]);

  const handleSearch = async (
    e: FormEvent,
    imageBase64?: string,
    imageType?: string
  ) => {
    e.preventDefault();

    if (!query.trim() && !imageBase64) return;

    setLoading(true);
    setShowDropdown(true);
    setSelectedProductIndex(0);
    setError(null);
    setResults(null);

    if (session?.user) {
      try {
        const data = await searchFoodProducts(
          query,
          imageBase64 || "",
          imageType
        );
        setResults(data);
        setQuery("");
        setImage(null);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(
          error instanceof Error
            ? error.message
            : "An error occurred while fetching data"
        );
      } finally {
        setLoading(false);
      }
    } else {
      setTimeout(() => {
        setResults(doritosExampleData);
        setQuery("");
        setImage(null);
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="relative max-w-3xl mx-auto" ref={searchContainerRef}>
        <Search
          query={query}
          setQuery={setQuery}
          handleSearch={handleSearch}
          loading={loading}
          image={image}
          setImage={setImage}
        />
        {error && (
          <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg">
            {error}
          </div>
        )}
        <SearchResults
          loading={loading}
          results={results}
          showDropdown={showDropdown}
          selectedProductIndex={selectedProductIndex}
          setSelectedProductIndex={setSelectedProductIndex}
        />
      </div>
    </div>
  );
}
