

const Review = () => {
    return (
        <div>
            
    <div className="bg-lime-50 py-16 mb-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Client Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Review 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img src="https://i.ibb.co/QQbq4WP/img4.jpg" alt="Client 1" className="rounded-full mx-auto mb-4" style={{ width: '100px' }} />
            <p className="text-gray-600 mb-4">I absolutely love the artistic creations offered by this website. The attention to detail and creativity in every piece is truly inspiring. I highly recommend it to all art enthusiasts!</p>
            <p className="font-semibold">John Doe</p>
            <p className="text-sm text-gray-500">balzeia, Canada</p>
          </div>
          {/* Review 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img src="https://i.ibb.co/xjBsvxp/img5.jpg" alt="Client 2" className="rounded-full mx-auto mb-4" style={{ width: '100px' }} />
            <p className="text-gray-600 mb-4">Discovering this drawing and painting website was a game-changer for me; it's a treasure trove of inspiration and guidance for unleashing creativity!</p>
            <p className="font-semibold">Jane Smith</p>
            <p className="text-sm text-gray-500">banglaore,india</p>
          </div>
          {/* Review 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img src="https://i.ibb.co/4dQLbHY/img6.jpg" alt="Client 3" className="rounded-full mx-auto mb-4" style={{ width: '100px' }} />
            <p className="text-gray-600 mb-4">This website has transformed my artistic journey; its diverse tutorials and supportive community have truly elevated my skills and confidence.</p>
            <p className="font-semibold">David Johnson</p>
            <p className="text-sm text-gray-500">bangubar, Canada</p>
          </div>
        </div>
      </div>
    </div>
  
        </div>
    );
};

export default Review;