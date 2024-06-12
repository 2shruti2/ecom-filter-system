import { XCircle } from "lucide-react";

const EmptyState = () => {
  return (
    <div className="relative col-span-full h-80 bg-gray-50 w-full p-12 flex flex-col items-center justify-center">
      <XCircle className="size-8 text-red-500" />
      <h3 className="font-semibold text-xl">No Products Found</h3>
      <p className="text-zince-500 text-sm">
        We found no search results for these filters.
      </p>
    </div>
  );
};

export default EmptyState;
