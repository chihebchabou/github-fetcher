import Search from "../components/search/Search";

const SearchView = ({ onChangeView }) => {
  return (
    <>
      {/* Search Section */}
      <Search onChangeView={onChangeView} />
      {/* Users Section */}
    </>
  );
};

export default SearchView;
