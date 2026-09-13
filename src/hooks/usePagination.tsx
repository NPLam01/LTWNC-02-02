import { useMemo, useState } from "react";

interface PaginationResult<T> {
  currentPage: number;
  totalPages: number;
  currentItems: T[];
  next: () => void;
  prev: () => void;
  goToPage: (page: number) => void;
}

function usePagination<T>(
  data: T[],
  itemsPerPage: number
): PaginationResult<T> {
  const [currentPage, setCurrentPage] = useState(1);


  const totalPages = Math.ceil(data.length / itemsPerPage);

  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return data.slice(startIndex, endIndex);
  }, [data, currentPage, itemsPerPage]);

  const next = () => {
    setCurrentPage((page) =>
      Math.min(page + 1, totalPages)
    );
  };

  const prev = () => {
    setCurrentPage((page) =>
      Math.max(page - 1, 1)
    );
  };

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) {
      return;
    }

    setCurrentPage(page);
  };

  return {
    currentPage,
    totalPages,
    currentItems,
    next,
    prev,
    goToPage,
  };
}

export default usePagination;

