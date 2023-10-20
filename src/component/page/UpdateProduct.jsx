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
    const technology = form.technology.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;

    const product = {name, photo, brand,technology,price,rating,description}
    console.log(product);

    fetch(`http://localhost:5000/products/${id}`,{
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
            <h1 className="text-center text-5xl font-bold underline "> Add Product </h1>
           <form onSubmit={handleUpdateProduct}>
            <div className="card-body grid md:grid-cols-2 gap-8">
            <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="Photo URL"   name="photo"   className="input input-bordered" required />
        </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name" 
                // defaultValue={name}
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
                // defaultValue={brand}
                placeholder="Brand Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Technology</span>
              </label>
              <input
              type="text"
              name="technology"
            //   defaultValue={technology}
              placeholder="Technology"
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
                // defaultValue={price}
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
                // defaultValue={rating}
                placeholder="Rating"
                className="input input-bordered"
                
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                name="description" 
                // defaultValue={description}
                placeholder="Description"
                className="input input-bordered"
                
              />
            
                </div>
                </div>
  
                <button className=" my-12 btn btn-primary  flex justify-center w-96 mx-auto"> Update product </button>
          </form>
          </div>
        
    );
};


export default UpdateProduct;