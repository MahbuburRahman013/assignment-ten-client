

const BrandCard = ({dataCard}) => {

 const {name,brand,type,price,rating,photo} = dataCard;

    return (
        <div className="bg-white rounded-lg shadow-md p-4">
        <img
          src={photo}
          alt={`${name} Image`}
          className="w-full h-40 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-gray-600">{brand}</p>
          <p className="text-blue-500">{type}</p>
          <div className="flex items-center justify-between mt-2">
          <p className="text-lg font-bold mt-2">${price}</p>
            <span className="text-yellow-500">{rating}</span>
          </div>
          <div className="mt-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2">
              Details
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Update
            </button>
          </div>
        </div>
      </div>
    );
};

export default BrandCard;