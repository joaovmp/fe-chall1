

const Navbar = () => {
    return (
        <nav>
                       
                
                <div className="row">
                    <div className="col">
                        <img className="logo2" src="logo.png"></img>
                    </div>
                    
                    <div className="cuponeria col-md-6">
                        <h1>Cuponeria Store</h1>
                    </div>
                    
                    <div className="col">
                        
                    </div>
                    
                       
                </div>
                
                
               <div className="buttons"> 
                    <div>             
                    <button type="button" className="btn btn-warning "><a href="http://localhost:3000/"><strong>HOME</strong></a></button>
                    </div>
                    
                    <div>
                    <button type="button" className="btn btn-light"><a href="http://localhost:3000/product.tsx"><strong>MEN CLOTHING</strong></a></button>
                    </div>
                    
                    <div>
                    <button className="btn btn-light"><a><strong>WOMEN CLOTHING</strong></a></button>
                    </div>

                    <div>
                    <button className="btn btn-light"><a><strong>ELETRONICS</strong></a></button>
                    </div>
                    
                    
                    <div>
                    <button className="btn btn-light"><a><strong>JEWELERY </strong></a></button>
                    </div>

                    
                           
               </div>             

        </nav>
    );
}

export default Navbar;


//<div className="logo2">
//            <img src="https://media.cuponeria.com.br/cuponeria4/imagens/logos/cuponeria/cuponeria-logo-whats.jpg">
//            </img>
//           </div>