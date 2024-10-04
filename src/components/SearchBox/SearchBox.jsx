import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../../redux/filtersSlice";

import styles from "./SearchBox.module.css";

export default function SearchBox() {
  const searchTerm = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };

  return (
    <div className={styles.searchBox}>
      <label htmlFor="searchInput" className={styles.label}>
        Find contacts by name
      </label>
      <input
        id="searchInput"
        type="text"
        className={styles.input}
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Type a name..."
        aria-label="Search for contacts by name"
      />
    </div>
  );
}
