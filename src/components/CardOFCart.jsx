import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


const CardOFCart = ({ item, handleDeleteProduct }) => {
    const { photo, name, brand, price, rating, type, _id } = item;




    return (
        <div className='my-10'>
            <div className=" h-[150px] border-2 flex gap-x-10 rounded">
                <div className='w-[40%] '>
                    <img className='w-full h-full' src={photo} alt="Movie" />
                </div>
                <div className="w-[60%] ">
                    <div className=" flex items-center gap-x-10 justify-center">
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

                    </div>

                    <div className="flex justify-end pr-10">
                        <button onClick={() => handleDeleteProduct(_id)} className="btn w-[20%] block  btn-warning my-3">Delete</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default CardOFCart;