import { Search as SearchIcon, ShoppingBag } from "lucide-react";
import ProductInfo from "@/app/components/ProductInfo";
import { OpenAIResponse } from "@/app/types";

interface SearchResultsProps {
  loading: boolean;
  results: OpenAIResponse | null;
  showDropdown: boolean;
  selectedProductIndex: number;
  setSelectedProductIndex: (index: number) => void;
}

export default function SearchResults({
  loading,
  results,
  showDropdown,
  selectedProductIndex,
  setSelectedProductIndex,
}: SearchResultsProps) {
  if (!showDropdown) return null;

  return (
    <div className="absolute mt-3 w-full bg-white rounded-2xl shadow-xl z-10 overflow-hidden border border-gray-100">
      {loading ? (
        <div className="p-8 text-center">
          <div className="animate-pulse flex flex-col items-center justify-center space-y-3">
            <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-green-500" />
            </div>
            <p className="text-gray-600 font-medium">Analyzing your food...</p>
          </div>
        </div>
      ) : results?.products && results.products.length > 0 ? (
        <div className="max-h-[32rem] overflow-y-auto">
          {results.products.length > 1 && (
            <div className="border-b border-gray-100 p-3">
              <div className="flex flex-wrap gap-2">
                {results.products.map((product, index: number) => (
                  <button
                    key={index}
                    className={`px-3 py-1 text-sm rounded-full transition-colors ${
                      selectedProductIndex === index
                        ? "bg-green-500 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                    onClick={() => setSelectedProductIndex(index)}
                  >
                    {product.product_name}
                  </button>
                ))}
              </div>
            </div>
          )}

          <ProductInfo
            product={results.products[selectedProductIndex]}
            searchPreview={results.search_preview}
          />
        </div>
      ) : (
        <div className="p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-4">
            <SearchIcon className="w-8 h-8 text-gray-400" />
          </div>
          <p className="text-gray-700 font-medium mb-2">No results found</p>
          <p className="text-sm text-gray-500">
            Try searching for a different food product
          </p>
        </div>
      )}
    </div>
  );
}
