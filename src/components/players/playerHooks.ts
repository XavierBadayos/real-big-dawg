import type { Category } from "@/types/Category";
import { useState } from "react";

export const useSortDirection = (initialCategory: Category = {label: "pts", direction: "desc"}) => {
  const [sortedCategory, setSortedCategory] = useState<Category>(initialCategory);

  const toggleSortDirection = () => {
    setSortedCategory((prev) => ({
      ...prev,
      direction: prev.direction === "asc" ? "desc" : "asc"
    }));
  };

  return { sortedCategory, setSortedCategory, toggleSortDirection };
};

export const useNav = (totalPages: number) => {
  const [page, setPage] = useState("1");

  function handleForwardNav() {
    const intPage = Number(page);
    if (intPage >= totalPages) {
      return;
    }
    setPage(String(intPage + 1));
  }

  function handleBackNav() {
    const intPage = Number(page);
    if (intPage <= 1) {
      return;
    }
    setPage(String(intPage - 1));
  }

  return { 
    page, 
    setPage, 
    handleForwardNav, 
    handleBackNav,
    totalPages
  };
};