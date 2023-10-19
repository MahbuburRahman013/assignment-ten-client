import { useLoaderData } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import BrandCard from './BrandCard';

const BrandProduct = () => {
    const data = useLoaderData()
    console.log(data)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div >
            {
                data.length > 0?
                <div>
                <div className='bg-gray-200 container px-24 rounded mx-auto pb-10'>
                    <div >
                        <Slider {...settings}>
                            {
                                data.map(data1 => <div key={data1._id}>
                                    <p className='text-4xl text-center py-2 uppercase'>{data1.name}</p>
                                    <img className='h-[400px] w-full' src={data1.photo} alt="" /> </div>)
                            }
                        </Slider>
                    </div>
                </div>

                <div className='grid grid-cols-3 my-16 container mx-auto gap-8'>
                    {
                        data.map(dataCard => <BrandCard key={dataCard._id} dataCard={dataCard}></BrandCard>)
                    }
                </div>
            </div>: <div className='flex justify-center items-center h-screen'><h1 className='text-4xl font-bold'>No Product Available!</h1></div>
            }

        </div>
    );
};

export default BrandProduct;