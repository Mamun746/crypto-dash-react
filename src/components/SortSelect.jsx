const SortSelect = ({ sort, setSort }) => {
    return ( 
        <div className="controls">
            <label htmlFor="sort">Sort by:</label>
            <select id="sort" value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="market_cap_desc">Market cap (High to Low)</option>
                {/* <option value="market_cap_asc">Market cap (Low to High)</option> */}
                <option value="price_desc">Price (High to Low)</option>
                <option value="price_asc">Price (Low to High)</option>
                <option value="change_asc">Change (Low to High)</option>
                <option value="change_desc">Change (High to Low)</option>
            </select>
        </div>
     );
}
 
export default SortSelect;