import { useState } from 'react';
import {useLoaderData} from 'react-router-dom'
import Swal from 'sweetalert2';
import CardOFCart from './CardOFCart';

const CartPage = () => {
  const loadedData = useLoaderData()
  const [dataNew,setDataNew] = useState(loadedData);
  

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
                
                if(data.deletedCount > 0){
                    const filterData = dataNew.filter(item=> item._id !== id);
                    setDataNew(filterData)
                  
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
            
            {   dataNew.length > 0?
                <div className='container mx-auto my-20'>
                {
                    dataNew.map(item => <CardOFCart handleDeleteProduct={handleDeleteProduct} key={item._id} item={item}></CardOFCart>)
                }
            </div>: <div className='flex justify-center items-center h-[50vh]'><h1 className='text-4xl font-semibold'>No Cards Here.</h1></div>
            }
            
           
        </div>
    );
};

export default CartPage;