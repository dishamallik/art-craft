




const ArtGallery = () => {
    return (
        <div>
             <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Artwork Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Artwork Card 1 (spanning two columns on large screens) */}
        <div className="shadow-lg rounded-lg overflow-hidden ">
          <img src=" https://i.ibb.co/kmkThkh/img7.jpg" alt="Sunset Landscape" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Sunset Landscape</h3>
            <p className="text-gray-600 mb-2">Painting</p>
            {/* Additional details or buttons */}
          </div>
        </div>

        {/* Artwork Card 2 */}
        <div className="shadow-lg rounded-lg overflow-hidden lg:col-span-3">
          <img src=" https://i.ibb.co/n8ZFKR2/img9.jpg" alt="Charcoal Portrait" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Charcoal Portrait</h3>
            <p className="text-gray-600 mb-2">Drawing</p>
            {/* Additional details or buttons */}
          </div>
        </div>

        {/* Artwork Card 3 */}
        <div className="shadow-lg rounded-lg overflow-hidden lg:col-span-3">
          <img src=" https://i.ibb.co/cLtzp0x/img8.jpg" alt="Mixed Media Abstract" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Mixed Media Abstract</h3>
            <p className="text-gray-600 mb-2">Mixed Media</p>
            {/* Additional details or buttons */}
          </div>
        </div>

        {/* Artwork Card 4 (spanning two columns on large screens) */}
        <div className="shadow-lg rounded-lg overflow-hidden ">
          <img src="https://i.ibb.co/fx08JfK/img10.jpg" alt="Landscape Painting" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Landscape Painting</h3>
            <p className="text-gray-600 mb-2">Painting</p>
            {/* Additional details or buttons */}
          </div>
        </div>
      </div>
    </div>
        </div>
        
    );
};

export default ArtGallery;