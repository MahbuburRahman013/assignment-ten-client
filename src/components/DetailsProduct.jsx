import { Rating, Stack } from '@mui/material';
import { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { ContextProvider } from './AuthProvider';

const DetailsProduct = () => {
    const loadedData = useLoaderData()
    const { photo, name, description, brand, price, rating, type } = loadedData;
    const {user} = useContext(ContextProvider)
    const id = user.uid;
    const dataAddToCart = { photo, name, description, brand, price, rating, type ,id};

    const handleAddCart = () => {
        fetch(`http://localhost:5000/addToCart`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(dataAddToCart)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Added To Cart Successfully!')
                }
                
            })
    }


    return (
        <div className='container mx-auto px-32 my-16'>
            <div className=" border-2 flex gap-x-10 rounded">
                <div className='w-[60%] h-[300px]'>
                    <img className='w-full h-full' src={photo} alt="Movie" />
                </div>
                <div className=" w-[60%] flex flex-col gap-y-2 justify-center">
                    <h2 className="card-title">{name}</h2>
                    <p className=' font-semibold my-1'>{brand}</p>
                    <p >${price}</p>
                    <div>
                        <Stack spacing={1}>
                            <Rating name="half-rating-read" defaultValue={rating} readOnly />
                        </Stack>
                    </div>
                    <p>{type}</p>
                    <p>{description}</p>

                    <button onClick={handleAddCart} className="btn btn-primary my-3 mr-8">Add To Cart</button>

                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default DetailsProduct;