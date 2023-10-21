
const Header = () => {
    return (
        <div className="carousel w-full h-[600px]">
  <div id="slide1" className="carousel-item relative w-full ">
    <img src="https://www.macobserver.com/wp-content/uploads/2016/07/apple-website-scales.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3VwkIw436qpYSjwGyZs1iiDBcLktHU5XT1Bkfj3jo0kNb92cTOxoWFMinPbjeLcNsCI&usqp=CAU" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://images.samsung.com/is/image/samsung/assets/hk/offer/im/bank/sc/green_KV_pc_en.png?imwidth=1366" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  
  </div>
// </div>
    );
};

export default Header;