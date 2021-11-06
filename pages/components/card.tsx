import React,{useState,useEffect} from 'react'


const Card = () => {
   //fetch('https://fakestoreapi.com/products
    const [fake,setFake]=useState([]);
    console.log(fake);
    useEffect(()=>{
        fakestore();
    },[])


    const fakestore=async()=>{
        const response=await fetch("https://fakestoreapi.com/products");
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

export default Card

 /*     <div className="card">
            {fake.map((values)=>{
                return(
                   <div className="box">
                        <div className="content">
                            <h5>{values.title}</h5>
                    
                        </div> 
                            <img src={values.image} alt="" />
                                
                                <button className="price">R${values.price}</button>
                   </div>
                   
                    
                   
                   
                
                )
            })}
            
        </div>   */
        


 

//fetch('https://fakestoreapi.com/products/1')
//            .then(res=>res.json())
//            .then(json=>console.log(json))




