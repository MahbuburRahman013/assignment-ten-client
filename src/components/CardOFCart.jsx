import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';


const CardOFCart = ({ item, handleDeleteProduct }) => {
    const { photo, name, brand, price, rating, type, _id } = item;


    return (
        
            <div className=" lg:h-[150px] mx-5 lg:mx-0 border-2 lg:flex  justify-start items-center  rounded">
                
                    <img className='h-full' src={photo} alt="Movie" />
                
                <div className="ml-10">
                    <div className=" lg:flex items-center gap-x-10 justify-center">
                        <div>
                            <p className=" font-bold text-blue-400">NAME:</p>
                            <h2 className="card-title">{name}</h2>
                        </div>
                        <div>
                            <p className=" font-bold text-blue-400">BRAND NAME:</p>
                            <p className=' font-semibold my-1'>{brand}</p>
                        </div>
                        <div>
                            <p className=" font-bold text-blue-400">PRICE:</p>
                            <p >${price}</p>
                        </div>
                        <div>
                            <p className=" font-bold text-blue-400">RATING:</p>

                            <Stack spacing={1}>
                                <Rating name="half-rating-read" defaultValue={rating} readOnly />
                            </Stack>


                            
                        </div>
                        <div>
                            <p className=" font-bold text-blue-400">TYPE:</p>
                            <p>{type}</p>
                        </div>
                        
                        <button onClick={() => handleDeleteProduct(_id)} className="btn  block  btn-warning my-3">Delete</button>
                    

                    </div>

                    

                </div>

            </div>
        
    );
};

CardOFCart.propTypes = {
    item: PropTypes.object.isRequired,
    handleDeleteProduct: PropTypes.func.isRequired
}

export default CardOFCart;