const Filter = ({ filter, setFilter }) => {
    return ( 
        <div className="filter">
            <label htmlFor="filter">Filter:</label>
            <input
                type="text"
                id="filter"
                value={filter}
                placeholder="Filter coins by name or symbol"
                onChange={(e) => setFilter(e.target.value)}
            />
        </div>
    );
}
 
export default Filter;