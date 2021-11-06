import React,{useState,useEffect} from 'react'


const Discover = () => {
    const [fake,setFake]=useState([]);
    console.log(fake);
    useEffect(()=>{
        fakestore();
    },[])
    
    
    const fakestore=async()=>{
        const response=await fetch('https://fakestoreapi.com/products/category/jewelery?limit=2');
     //   console.log(response);
        const jsonData=await response.json()
     //   console.log(jsonData);
        setFake(jsonData);
    }

    
    //fakestore();
    
    
    
    return (
        <div className="row mb-2 justify-content-start">
            {fake.map((values)=>{
                return(
            <div className="col-6">
                <div className="card mb-3" >
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={values.image} className="card-img" alt=""></img>
                            <button className="btn btn-info"><a>SHOP</a></button>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{values.title}</h5>
                                <p className="card-text">{values.description}</p>
                                

                            </div>

                        </div>
                    </div>
                </div>
            </div>
                )
                })}
        </div>
       
    );

    
   
}

/* <div className="discover">
            {fake.map((values)=>{
                return(
                   <><div className="box">
                        <div className="details">
                            <h5>{values.title}</h5>

                        </div>
                        <img src={values.image} alt="" />
                                <div className="shopButton">
                                <button><a>SHOP</a></button>
                                </div>
                        </div>
                    
                       
                    </>
                )
            })}
            
        </div> */


export default Discover





