import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";


const Cart = () => {
    const allProduct = useLoaderData();
    const [products , setProducts] = useState(allProduct)

    const handleDelete = _id =>{
     


      fetch(`http://localhost:5000/products/${_id}`,{
        method:'DELETE',
        headers:{
            "Content-Type": "application/json",
        },
        
    })
    .then(res => res.json())
    .then(data => {
       
        if (data.deletedCount > 0) {
          swal("Product delete successfully");

          const filterdata = products.filter(item => item._id !==_id )
          setProducts(filterdata)
        }
    })
    }

  

    return (
        <div className="mt-20" >
        <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        
            {
                products.map(product => <div key={product._id} >
                   <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className="w-56 h-44" src= {product.photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {product.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>${product.price}</p>
    <div className="card-actions justify-end">
      <button onClick={() => handleDelete(product._id)}  className="btn btn-warning"> Delete</button>
    </div>
  </div>
</div>

                </div>)
            }

        </div>
        </div>
    );
};

export default Cart;