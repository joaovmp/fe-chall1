import React,{Children, ReactNode} from "react";
import Navbar from "./nav";
import Footer from "./footer"
import Card from "./card";
import Discover from "./discover";




interface IProps {
    children: ReactNode;
    // Declarando o children, não funcinou sem esse código 
}


const Layout = ({children,...props}:IProps) => {
    return (
        
        <div className="container">
           <> <Navbar/>
                {children}
                
                <h6>DISCOVER</h6>
                  
                    <div className="row">
                        <div className="container2 justify-content-start">                  
                            <Discover/>
                        </div>  
                            <div className="body2">
                                <h6>FEATURED</h6>
                                <Card/>
                            </div>
                                <Footer/>
                    </div>
            </>
        </div>
    );
    
}


export default Layout;