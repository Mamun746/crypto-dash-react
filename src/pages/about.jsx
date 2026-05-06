const AboutPage = () => {
    return ( 
        <div className="about">
            <h1>About Crypto Dash</h1>
            <p>Crypto Dash is a simple React application that allows users to view and sort cryptocurrency data. It fetches data from the CoinGecko API and displays it in a user-friendly format.</p>
            <h2>Features</h2>
            <ul>
                <li>View real-time cryptocurrency prices</li>
                <li>Sort coins by price, market cap, and 24h change</li>
                <li>Filter coins by name or symbol</li>
                <li>Adjust the number of coins displayed</li>
            </ul>
            <h2>Technologies Used</h2>
            <ul>
                <li>React</li>
                <li>React Router</li>
                <li>CoinGecko API</li>
                <li>CSS for styling</li>
            </ul>
            <p>Created by Mamun.</p>


        </div>
     );
}
 
export default AboutPage;