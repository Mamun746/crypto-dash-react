import { useState,useEffect } from "react";
import HomePage from "./pages/home";
import {Routes,Route} from "react-router";
import AboutPage from "./pages/about";
import Header from "./components/Header";
import NotFound from "./pages/not-found";
import CoinDetails from "./pages/coin-details";
// import CoinCard from "./components/CoinCard";
// import Filter from "./components/Filter";
// import SortSelect from "./components/SortSelect";
//CG-tSzcJ43dJNF8DL9T1RWPYgea
// const API_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&x_cg_demo_api_key=CG-tSzcJ43dJNF8DL9T1RWPYgea";
const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const App = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(10);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("market_cap_desc");

  useEffect(() => {
      const fetchData = async () => { 
        try {
          const response = await fetch(`${API_URL}&order=${sort}&per_page=${limit}&page=1&sparkline=false&x_cg_demo_api_key=${API_KEY}`);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setCoins(data);
        }
        catch (error) {
          setError(error.message);
        }
        finally {
          setLoading(false);
        }
      };
      fetchData();
  }, [limit, sort]);

  
  return ( 
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage coins={coins} filter={filter} sort={sort} limit={limit} loading={loading} error={error} setSort={setSort} setFilter={setFilter} setLimit={setLimit} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/coin/:id" element={<CoinDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
   );
}
 
export default App;