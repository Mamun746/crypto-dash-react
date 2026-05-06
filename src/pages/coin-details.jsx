import { useParams } from "react-router";
import { useEffect,useState } from "react";
const API_COIN_URL = import.meta.env.VITE_COIN_API_URL;

const CoinDetails = () => {
    const { id } = useParams();
    const [coin, setCoin] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCoin = async () => {
            try {
                const response = await fetch(`${API_COIN_URL}/${id}`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setCoin(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchCoin();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return ( 
        <div>
            <h1>{coin.name} ({coin.symbol.toUpperCase()})</h1>
            <p>Current Price: ${coin.market_data.current_price.usd.toLocaleString()}</p>
            <p>Market Cap: ${coin.market_data.market_cap.usd.toLocaleString()}</p>
            <p>24h Change: {coin.market_data.price_change_percentage_24h.toFixed(2)}%</p>
        </div>
     );
}
 
export default CoinDetails;