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
        if(data.deletedCount > 0){
            alert('delete successfully')
            const filterData = loadedData.filter(item=> item._id !== id);
            setData(filterData)
            
        }
       
    })
}


    return (
        <div className='container mx-auto my-20'>
            
            {   loadedData.length > 0?
                <div>
                {
                    data.map(item => <CardOFCart handleDeleteProduct={handleDeleteProduct} key={item._id} item={item}></CardOFCart>)
                }
            </div>: <h1 className='text-4xl font-semibold text-center'>No Cards Here.</h1>
            }
            
           
        </div>
    );
};

export default CartPage;