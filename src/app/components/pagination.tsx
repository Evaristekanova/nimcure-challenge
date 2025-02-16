import React from "react";
import CustomButton from "./button";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Generate an array of page numbers
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-2 text-gray-3">
      <CustomButton
        type="button"
        text="Prev"
        onClick={handlePrevClick}
        isDisabled={currentPage === 1}
        customstyle={`px-4 py-2 rounded-full border border-3 border-gray-3 text-gray-3 text-[14px] disabled:opacity-50 ${
          currentPage === 1 ? "cursor-not-allowed" : ""
        }`}
      />

      {pageNumbers.map((page) => (
        <CustomButton
          type="button"
          key={page}
          text={page.toString()}
          onClick={() => onPageChange(page)}
          customstyle={`p-4 text-gray-3 text-[14px] ${
            page === currentPage
              ? "border border-3 border-gray-3 rounded-full"
              : "border-none"
          }`}
        />
      ))}
      <CustomButton
        type="button"
        text="Next"
        onClick={handleNextClick}
        isDisabled={currentPage === totalPages}
        customstyle={`px-4 py-2 rounded-full border border-3 border-gray-3 text-gray-3 text-[14px] disabled:opacity-50 ${
          currentPage === totalPages ? "cursor-not-allowed" : ""
        }`}
      />
    </div>
  );
};

export default Pagination;
