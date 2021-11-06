import React,{useState,useEffect} from 'react'


const Product = () => {
   //fetch('https://fakestoreapi.com/products
    const [fake,setFake]=useState([]);
    console.log(fake);
    useEffect(()=>{
        fakestore();
    },[])


    const fakestore=async()=>{
        const response=await fetch("https://fakestoreapi.com/products/category/men's%20clothing");
     //   console.log(response);
        const jsonData=await response.json()
     //   console.log(jsonData);
        setFake(jsonData);
    }
    
    
    
    return ( 
        
        <div className="row">
            {fake.map((values)=>{
                return(
                        
                        <div className="col-sm-2">
                            <div className="card" >
                                <div className="card-body">
                                    <img src={values.image} className="card-img-top" alt=""></img>
                                    <p className="card-text"></p>
                                    <a href="#" className="btn btn-danger">R${values.price}</a>
                                  
                                </div>
                                <div className="card-footer bg-dark">
                                    <small className="text-white text-center">Mens casual slim fit</small>
                                </div>
                            </div>
                        </div>
                )
            })}
      
        </div>

    );
   
}

export default Product