import React from "react";

export const PaginationButtons = ({
  currentPage,
  itemsPerPage,
  setCurrentPage,
  setItemsPerPage,
}) => {
  const goToNextPage = function () {
    setCurrentPage(currentPage + 24);
    setItemsPerPage(itemsPerPage + 24);
  };
  const goToPreviousPage = function () {
    setCurrentPage(currentPage - 24);
    setItemsPerPage(itemsPerPage - 24);
  };
  return (
    <div className="mx-auto">
      <button
        onClick={goToPreviousPage}
        className="mt-10 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Previous Page
      </button>
      <button
        onClick={goToNextPage}
        className="mt-10 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Next Page
      </button>
    </div>
  );
};

export default PaginationButtons;
