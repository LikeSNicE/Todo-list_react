import { useState,createContext,useContext } from "react";

const FilterContext = createContext();

const useFilter = () => useContext(FilterContext);

const FilterProvider = ({children}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy,setSortBy] = useState("");

  return(
    <FilterContext.Provider value={{
      searchQuery,
      setSearchQuery,
      sortBy,
      setSortBy
    }}>
    {children}
  </FilterContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export { useFilter, FilterProvider };

