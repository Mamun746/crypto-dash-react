import CoinCard from "../components/CoinCard";
import Filter from "../components/Filter";
import SortSelect from "../components/SortSelect";

const HomePage = ({coins,filter,sort,limit,loading,error,setSort,setFilter,setLimit}) => {

    const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(filter.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(filter.toLowerCase())
  ).slice()
  .sort((a, b) => {
    switch (sort) {
      case "price_desc":
        return b.current_price - a.current_price;
      case "price_asc":
        return a.current_price - b.current_price;
      case "change_desc":
        return b.price_change_percentage_24h - a.price_change_percentage_24h;
      case "change_asc":
        return a.price_change_percentage_24h - b.price_change_percentage_24h;
        case "market_cap_asc":
          return a.market_cap - b.market_cap; 
        case "market_cap_desc":
           return b.market_cap - a.market_cap;
      default:
        return 0; // No sorting for market_cap_desc as it's already sorted by API
    }
  });
    return (  
<div>
      <h1>🚀 Crypto Dash</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <div className="top-controls">
        <Filter filter={filter} setFilter={setFilter} />
        <div className="controls">
        <label htmlFor="limit">Show:</label>
        <select id="limit" value={limit} onChange={(e) => setLimit(Number(e.target.value))}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select> 
      </div>
      <SortSelect sort={sort} setSort={setSort} />
      </div>
      {!loading && !error && (
      <main className="grid">
        {filteredCoins.length>0?filteredCoins.map((coin) => (
          <CoinCard key={coin.id} coin={coin} />
        )):<p>No coins match</p>}
      </main>
        
        )}
    </div>
    );
}
 
export default HomePage;