import { useLoaderData } from 'react-router-dom';

const DetailsProduct = () => {
    const loadedData = useLoaderData()
    const {photo,name,description,brand,price,rating,type} = loadedData;
    const dataAddToCart = {photo,name,description,brand,price,rating,type};

   const handleAddCart = () =>{
          fetch('http://localhost:5000/addToCart', {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(dataAddToCart)
          })
          .then(res=> res.json())
          .then(data=> {
            if(data.acknowledged){
                alert('dlkfjdslkfjsdkljflksdjfl')
            }
            console.log(data)
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
                    <p>{rating}</p>
                    <p>{type}</p>
                    <p>{description}</p>
                    
                        <button onClick={handleAddCart} className="btn btn-primary my-3 mr-8">Add To Cart</button>
                    
                </div>
            </div>
        </div>
    );
};

export default DetailsProduct;