import SearchIcon from "../../../assets/img/icons/SearchIcon";
import styles from "./Search.module.css";

const Search = () => {
    return (
        <a href="" className={styles.search}>
            <SearchIcon/>
        <div className={styles.searchText}>Поиск</div>
        </a>

    )

}
export default Search