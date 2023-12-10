import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";


const Cart = () => {
    const allProduct = useLoaderData();
    console.log(allProduct);
    const [products , setProducts] = useState(allProduct)

    const handleDelete = id =>{
     
      console.log(id);

      fetch( `https://technology-electronics-server-brovb1i90-my-team-88e02784.vercel.app/carts/${id}`,{
        method:"DELETE",

      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      
        if (data.deletedCount > 0) {
          swal('Products delete successfully' )
          const remainingProducts = products.filter(product => product._id !==id);
          setProducts(remainingProducts)
        }
      })
    }

  

    return (
        <div className="mt-20" >
        <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        
            {
                products.map(product => <div key={product._id} >
                   <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className="w-56 h-56" src= {product.photo} alt="Shoes" /></figure>
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