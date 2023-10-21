import { useState } from 'react';
import {useLoaderData} from 'react-router-dom'
import Swal from 'sweetalert2';
import CardOFCart from './CardOFCart';

const CartPage = () => {
  const loadedData = useLoaderData()
  const [data,setData] = useState(loadedData);
  

  const handleDeleteProduct =(id)=>{

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {


            fetch(`https://backend-side.vercel.app/deleteProduct/${id}`,{
                method:"DELETE"
            }).then(res => res.json())
            .then(data=>{
                console.log(data)
                if(data){
                    const filterData = loadedData.filter(item=> item._id !== id);
                    setData(filterData)
                    window.location.reload()
                    
                }
               
            })


          Swal.fire(
            'Deleted!',
            'Your Product has been deleted.',
            'success'
          )
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