import { Link } from "react-router";

const NotFound = () => {
    return ( 
        <div style={style.container}>
            <h1 style={style.title}>404</h1>
            <p style={style.message}>Page Not Found</p>
            <Link to="/" style={style.link}>Go Back Home</Link>
        </div>
     );
}
 
const style={
    container:{
        textAlign:"center",
        padding:"50px",
        fontSize:"24px",
        color:"#fff"
    },
    title:{
        fontSize:"72px",
        fontWeight:"bold",
        marginBottom:"20px"
    },
    message:{
        fontSize:"24px",
        marginBottom:"20px"
    },
    link:{
        color:"#61dafb",
        textDecoration:"none",
        fontSize:"18px"
    }

}
export default NotFound;