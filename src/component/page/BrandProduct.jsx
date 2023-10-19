import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BrandProduct = () => {
const [selected , setSelected]=useState([]);
    const products = useLoaderData();
    const brandName = useParams()

    useEffect(()=>{
const getData=products.filter(product=>product.brand.toLowerCase()===brandName.brand.toLocaleLowerCase())
setSelected(getData)
    },[])

    console.log(selected)
    return (
        <div>
           <h1>Products :  {products.length}</h1>
          <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {
            selected.map(product => <div key={product._id}> 
            <div className="card  mx-auto w-96 bg-base-100 shadow-xl">
  <figure><img className="w-96 h-96" src= {product.photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h1 className="font-bold text-3xl"> {product.name} </h1>
    <p className="text-1xl font-bold"> {product.brand} </p>
    <p className="text-red-700 font-bold text-2xl py-4"> ${product.price} </p>
    <p className=""> {product.technology} </p>
    <p className=""> {product.description} </p>
   
    <p> {product.rating} </p>
    <div className="card-actions flex justify-between">
      <button className="btn btn-primary">Details</button>
      <button className="btn btn-primary">Update</button>
    </div>
  </div>
</div>
              </div>)
           }
          </div>
        </div>
    );
};

export default BrandProduct;