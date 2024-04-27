


const ArtGallery = () => {
    return (
        <div>
             <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Artwork Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
       
        <div className="shadow-2xl rounded-lg overflow-hidden col-span-3">
          <img src="https://i.ibb.co/kmkThkh/img7.jpg" alt="Sunset Landscape" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Sunset Landscape</h3>
            <p className="text-gray-600 mb-2">Painting</p>
           
          </div>
        </div>

       
        <div className="shadow-2xl rounded-lg overflow-hidden col-span-2">
          <img src="https://i.ibb.co/n8ZFKR2/img9.jpg" alt="Charcoal Portrait" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Charcoal Portrait</h3>
            <p className="text-gray-600 mb-2">Drawing</p>
           
          </div>
        </div>
       
      
        <div className="shadow-2xl rounded-lg overflow-hidden">
          <img src= "https://i.ibb.co/cLtzp0x/img8.jpg" alt="Landscape Painting" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Landscape Painting</h3>
            <p className="text-gray-600 mb-2">Painting</p>
        
          </div>
        </div>
      </div>
    </div>


        </div>
        
    );
};

export default ArtGallery;