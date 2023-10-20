import swal from "sweetalert";



const AddProduct = () => {

const handleAddProduct = e =>{
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

    fetch('http://localhost:5000/products',{
        method:'POST',
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(product)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        swal("Product add successfully");
    })
}



    return (
        
        <div className="my-20">
            <h1 className="text-center text-5xl font-bold underline "> Add Product </h1>
           <form onSubmit={handleAddProduct}>
            <div className="card-body grid md:grid-cols-2 gap-8">
            <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
        </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name" 
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
                placeholder="Description"
                className="input input-bordered"
                
              />
            
                </div>
                </div>
  
                <button className=" my-12 btn btn-primary  flex justify-center w-96 mx-auto"> Add product </button>
          </form>
          </div>
        
    );
};

export default AddProduct;