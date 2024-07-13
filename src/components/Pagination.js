import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Pagination() {
  const { totalPages, page, HandlePageChange } = useContext(AppContext);
  return (
    <div className="w-full flex justify-center items-center border-2  pt-1 fixed bottom-0 bg-white">
      <div className="w-11/12 max-w-[650px] flex flex-row justify-between">
        {page > 1 && (
          <button
            className="rounded-md border px-4 py-1 "
            onClick={() => HandlePageChange(page - 1)}
          >
            Previous
          </button>
        )}
        {page < totalPages && (
          <button
            className="rounded-md border px-4 py-1 "
            onClick={() => HandlePageChange(page + 1)}
          >
            Next
          </button>
        )}
        <p className="font-bold text-sm mt-1">
          page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
}

export default Pagination;
