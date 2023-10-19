import { useState } from 'react';
import {useLoaderData} from 'react-router-dom'
import CardOFCart from './CardOFCart';

const CartPage = () => {
  const loadedData = useLoaderData()
  const [data,setData] = useState(loadedData);
  

  const handleDeleteProduct =(id)=>{
    fetch(`http://localhost:5000/deleteProduct/${id}`,{
        method:"DELETE"
    }).then(res => res.json())
    .then(data=>{
        console.log(data)
        if(data){
            alert('delete successfully')
            const filterData = loadedData.filter(item=> item._id !== id);
            setData(filterData)
            
        }
       
    })
}


    return (
        <div>
            
            {   data.length > 0?
                <div className='container mx-auto my-20'>
                {
                    data.map(item => <CardOFCart handleDeleteProduct={handleDeleteProduct} key={item._id} item={item}></CardOFCart>)
                }
            </div>: <div className='flex justify-center items-center h-[50vh]'><h1 className='text-4xl font-semibold'>No Cards Here.</h1></div>
            }
            
           
        </div>
    );
};

export default CartPage;