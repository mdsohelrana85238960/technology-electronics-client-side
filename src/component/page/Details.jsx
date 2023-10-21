import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import swal from "sweetalert";



const Details = () => {
    const product = useLoaderData();
    console.log(product);
    const {user} = useContext(AuthContext);
    const email=user.email;
    const {brand,name,price,photo} = product;
    const cart = {email,brand,name,price,photo}

    const handleAddCart = () =>{
      fetch('https://technology-electronics-server-2znvhdtbk-my-team-88e02784.vercel.app/carts',{
        method:'POST',
        headers:{
          "Content-Type": "application/json",
        },
        body:JSON.stringify(cart)

      })
      .then(res => res.json()
      .then(data => {
        console.log(data);
        swal("Product add to cart successfully");
      })
      )
    }


    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img className="w-[700px]" src={product.photo} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{product.name}</h2>
    <p>${product.price}</p>
    <p className="text-2xl text-orange-500">{product.brand}</p>
   
    <p className="">{product.description}</p>

    <div className="card-actions ">
      <button onClick={handleAddCart} className="btn text-white bg-orange-500">Add to Cart</button>
      {/* <button>add to product</button> */}
    </div>

  </div>
</div>
        </div>
    );
};

export default Details;