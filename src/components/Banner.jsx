


const Banner = () => {
    return (
        <div className="mt-4 ">
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/kxR0ygK/img1.jpg" className="w-full h-2/3 opacity-85 " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <p className="font-bold md:text-xl lg:text-2xl   md:mx-40  lg:mx-40 text-center text-black mb-5 lg:mb-5 md:mt-16 lg:mt-16 shadow-2xl ">Welcome to a world Explore the canvas of possibilities on our platform dedicated to the art of drawing and painting</p>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/JQJnCrq/img2.jpg" className="w-full h-2/3 opacity-80" />
    
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <p className="font-bold md:text-xl lg:text-2xl   md:mx-40  lg:mx-40 text-center text-black mb-5 lg:mb-5 md:mt-16 lg:mt-16 shadow-2xl">Where imagination meets expression, and every brushstroke carries a message. Join us on a journey  </p>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/qW8xBR7/img3.jpg" className="w-full h-2/3 opacity-70" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <p className="font-bold md:text-xl lg:text-2xl   md:mx-40  lg:mx-40 text-center text-black mb-5 lg:mb-5 md:mt-16 lg:mt-16 shadow-2xl">Unlock the power of your imagination and let your creativity flow freely. </p>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  
</div>
        </div>
    );
};

export default Banner;