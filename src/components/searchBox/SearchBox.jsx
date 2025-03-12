import css from './SearchBox.module.css';


function SearchBox({ filter, onChange }) {
  return (
    <div className={css.searchBox}>
      <h3 className={css.searchTitle}>Find contacts by name</h3>
      <input
        type="text"
        value={filter}
        onChange={onChange}
        placeholder="Search contacts"
      />
    </div>
  );
}
export default SearchBox;
