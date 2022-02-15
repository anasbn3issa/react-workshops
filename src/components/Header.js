import { Link, Route, Router, Routes } from "react-router-dom";
import App from "../App";
import Home from "./Home";

export default function Header() {
    return(
       
            <div>
                 <nav>
                    <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    </ul>
                </nav> 

              
            </div>
      
    );
    
}