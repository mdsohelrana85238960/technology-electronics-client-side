import { useLoaderData } from "react-router-dom";


const Details = () => {

    const product = useLoaderData();
    console.log(product);
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img className="w-[700px]" src={product.photo} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{product.name}</h2>
    <p>${product.price}</p>
    <p className="text-2xl text-orange-500">{product.brand}</p>

    <p>
    Great to hear that your product update form is working fine now! If you have any more questions or need further assistance with any other aspects of your project, feel free to ask. I'm here to help!
    </p>
   
  </div>
</div>
        </div>
    );
};

export default Details;