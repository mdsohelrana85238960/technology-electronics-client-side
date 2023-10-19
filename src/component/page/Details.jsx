import { useLoaderData } from "react-router-dom";


const Details = () => {

    const product = useLoaderData();
    console.log(product);
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={product.photo} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{product.name}</h2>
    <p>${product.price}</p>

    
   
  </div>
</div>
        </div>
    );
};

export default Details;