import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";



const UpdateProduct = () => {
    const data = useLoaderData();
    const {id} = useParams();
    console.log(data,id);



    
const handleUpdateProduct = e =>{
    e.preventDefault()
    const form = e.target
    const name = form.name.value;
    const photo = form.photo.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    // const description = form.description.value;
    

    const product = {name, photo, brand,type,price,rating}
    console.log(product);

    fetch(`https://technology-electronics-server-2znvhdtbk-my-team-88e02784.vercel.app/products/${id}`,{
        method:'PUT',
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(product)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          swal("Product update successfully");
        }
    })
}



    return (
        
        <div className="my-20">
            <h1 className="text-center text-5xl font-bold underline "> Update  Product </h1>
           <form onSubmit={handleUpdateProduct}>
            <div className="card-body grid md:grid-cols-2 gap-8">
            <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="Photo URL"   name="photo" defaultValue={data.photo}  className="input input-bordered" required />
        </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name" 
                defaultValue={data.name}
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <input
                type="text"
                name="brand"
                defaultValue={data.brand}
                placeholder="Brand Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Type</span>
              </label>
              <input
              type="text"
              name="type"
              defaultValue={data.type}
              placeholder="Type"
              className="input input-bordered"
              required
            />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="price"
                defaultValue={data.price}
                placeholder="Price"
                className="input input-bordered"
                required
              />
            </div>
         
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="number"
                name="rating" 
                defaultValue={data.rating}
                placeholder="Rating"
                className="input input-bordered"
                
              />
            </div>
            {/* <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                name="description" 
                defaultValue={data.description}
                placeholder="Description"
                className="input input-bordered"
                
              />
            
                </div> */}
            
                </div>
  
                <button className=" my-12 btn text-white bg-orange-500 flex justify-center w-96 mx-auto"> Update product </button>
          </form>
          </div>
        
    );
};


export default UpdateProduct;