import swal from "sweetalert";



const AddProduct = () => {

const handleAddProduct = e =>{
    e.preventDefault()
    const form = e.target
    const name = form.name.value;
    const photo = form.photo.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;

    const product = {name, photo, brand,type,price,rating,description}
    console.log(product);

    fetch('https://technology-electronics-server-2znvhdtbk-my-team-88e02784.vercel.app/products',{
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
                <span className="label-text">Type</span>
              </label>
              <input
              type="text"
              name="type"
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
  
                <button className=" my-12 btn text-white bg-orange-500  flex justify-center w-96 mx-auto"> Add Product </button>
          </form>
          </div>
        
    );
};

export default AddProduct;