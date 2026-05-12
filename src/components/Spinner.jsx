import { BarLoader } from "react-spinners";
const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
const Spinner = ({ color = "#36d7b7", size = 150 }) => {
    return ( 
    <div>
        <BarLoader color={color} width={size} cssOverride={override} aria-label="Loading..."/>
    </div> );
}
 
export default Spinner;