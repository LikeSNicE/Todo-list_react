import { useFilter } from "../../context/FilterContext";

const Header = () => {
  const { searchQuery, setSearchQuery, setSortBy } = useFilter();

  const handleOnChangeSearchQuery = (event) => {
    setSearchQuery(event.target.value);
    console.log("SearchQuery:", event.target.value);
  };

  const handleOnChangeSortBy = (event) => {
    setSortBy(event.target.value);
    console.log("SortBy:", event.target.value);
  };

  return (
    <header className="flex gap-4 items-center justify-center mb-6">
      <input
        type="search"
        onChange={handleOnChangeSearchQuery}
        value={searchQuery}
        className="border border-gray-300 dark:border-gray-600 block p-2.5 w-4/5 text-sm text-gray-900 dark:text-gray-100 rounded-lg h-[43px] bg-white dark:bg-gray-800"
        placeholder="Поиск задачи..."
      />
      <select
        onChange={handleOnChangeSortBy}
        className="border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 text-sm rounded-lg block p-2.5 w-1/5"
      >
        <option
          value=""
          className="text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800"
        >
          Все
        </option>
        <option
          value="-completed"
          className="text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800"
        >
          Завершенные
        </option>
        <option
          value="title"
          className="text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800"
        >
          По алфавиту
        </option>
      </select>
    </header>
  );
};

export default Header;
