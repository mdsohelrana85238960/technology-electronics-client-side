import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const BrandProduct = () => {
const [selected , setSelected]=useState([]);
    const products = useLoaderData();
    const brandName = useParams()
    

    useEffect(()=>{
const getData=products.filter(product=>product.brand.toLowerCase()===brandName.brand.toLocaleLowerCase())
setSelected(getData)
    },[])

    
    return (
        <div>
           

           <div className="carousel w-full pb-8 h-[600px]">
  <div id="slide1" className="carousel-item relative w-full ">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTVN16kasKVfIDUVLTck5Lwp46kwxvKcj1cw&usqp=CAU&reload=on" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3VwkIw436qpYSjwGyZs1iiDBcLktHU5XT1Bkfj3jo0kNb92cTOxoWFMinPbjeLcNsCI&usqp=CAU" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9opwtLPP3k5BFFvHmyfsh28Xy5VyuZ_glulZtp10dOailLV2Fbi6GDrv1RB9ZRMx6URM&usqp=CAU" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://www.selectcitywalk.com/wp-content/uploads/2020/10/Applemain-banner.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>












          <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {
            selected.map(product => <div key={product._id}> 

                  
             

            <div className="card  mx-auto h-[700px]  w-96  bg-base-100 shadow-xl">
  <figure><img className="h-[450px]" src= {product.photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h1 className="font-bold text-3xl"> {product.name} </h1>
    <div className="flex gap-4" >
    <h1 className="text-1xl px-1 rounded bg-red-100 "> {product.brand} </h1> 
       <h1 className="bg-red-100 px-1 rounded"> {product.type} </h1> 
    </div>
   
    <p className=" text-orange-500 font-bold text-2xl "> ${product.price} </p>
    <p className=""> {product.description} </p>
    
   
    <p>   <Rating
      style={{ maxWidth: 180 }}
      value={product.rating}
      readOnly
    /> </p>


    </div>
    <div className="card-actions flex px-8 justify-between">
      
      <Link to={`/details/${product._id} `}> <button className="btn text-white bg-orange-500">Details</button> </Link>
      <Link to={`/updateProduct/${product._id} `}> <button className="btn text-white bg-orange-500">Update</button> </Link>
    </div>
  

</div>
              </div>)
           }
          </div>
        </div>
    );
};

export default BrandProduct;