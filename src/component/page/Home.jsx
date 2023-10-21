
import { Link, useLoaderData } from "react-router-dom";
import Header from "./Header";

const Home = () => {
    const brands = useLoaderData();
    return (
        <div >
            <Header></Header>
        <section  className=" gap-8 mt-16 lg:flex space-y-6 ">
            <div className="md:flex gap-4">
                <img className="w-56 mx-auto h-56" src="https://i.insider.com/62e2ce23536a230019121a76?width=1136&format=jpeg" alt="" />
                <div>
                <h1 className="font-bold text-2xl">Ipad in education</h1>
                <p className="text-lg"> iPads run  iOS or iPadOS, which is a mobile operating system designed specifically for these devices.Apple regularly releases new iPad models, with varying features and specifications. Some of the popular ones include the standard iPad, iPad Air, iPad mini, and iPad Pro.</p>
                </div>
                 </div>
            <div className="md:flex  gap-4">
                <img className="w-56 mx-auto h-56" src="https://photos5.appleinsider.com/gallery/45240-88149-The-new-MacBook-Pro-16-inch-xl.jpg" alt="" />
                <div>
                <h1 className="font-bold text-2xl">Ipad in education</h1>
                <p className="text-lg"> MacBooks are known for their sleek and minimalist design. They are typically made of aluminum and are available in different sizes and configurations.  Apple offers various models of MacBooks, including the MacBook Air and MacBook Pro. The MacBook Air is lightweight design, Pro is more powerful.</p>
                </div>
                 </div>
            
        </section>

     <div  className="   mt-20 grid gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
     {
        brands.map(brand => <div key={brand.id}> <Link to= {`/products/${brand.brand}`} > <div  className="card card-compact mx-auto  w-96 bg-base-100 shadow-xl">
        <figure><img className="h-60 " src= {brand.img} alt="Shoes" /></figure>
        
          <h2 className="card-title text-2xl p-4 text-orange-600">{brand.brand}</h2>
          
      </div></Link> </div>)
      }
     </div>

        <section className=" my-16 md:flex space-y-6 gap-4 mx-auto">
            <div className="w-[570px] mx-auto text-center">
                <h1 className="text-4xl font-medium py-4">100 Kindle Books for <span className="text-red-800 "> $ 2.33 </span> or less</h1>
                <p className="text-lg">MacBooks use custom-designed Apple silicon processors, such as the M1 chip, which are known for their performance and energy efficiency. They also come with high-resolution Retina displays,  .</p>
             
            </div>
            <img className="w-80 mx-auto" src="https://hiraoka.com.pe/media/mageplaza/blog/post/m/a/macbook_air_vs._macbook_pro-_cuales_son_sus_diferencias.jpg" alt="" />
        </section>


            
        </div>
    );
};

export default Home;