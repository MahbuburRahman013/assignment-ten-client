import toast, { Toaster } from 'react-hot-toast';
import {useLoaderData} from 'react-router-dom'

const UpdateProduct = () => {
       const loadedData = useLoaderData();
       const {photo,name,brand,price,rating,type,_id} = loadedData;
    

    const handleUpdateProduct = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const newForm = {name,photo,brand,type,price,rating};
        console.log(newForm)
        fetch(`http://localhost:5000/updateProduct/${_id}`, {
            method:"PUT",
            headers:{
                'content-type': "application/json"
            },
            body: JSON.stringify(newForm)
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.acknowledged){
                toast.success('product Updated successfully')
            }
            
        })
    
    }



    return (
        <div className="container mx-auto px-5 lg:px-0 flex justify-center  lg:h-screen">
            <div className="lg:w-[50%] w-full my-14">
                <h1 className="text-center text-3xl font-semibold">Update Product</h1>
            <form onSubmit={handleUpdateProduct} className="w-full">
                <input defaultValue={photo} placeholder="Photo URL" className="block w-full outline-none bg-gray-100  py-2 text-base font-semibold px-3 my-3" type="text" name="photo" id="" />
                <input defaultValue={name} placeholder="Product Name" className="block w-full outline-none bg-gray-100  py-2 text-base font-semibold px-3 my-3" type="text" name="name" id="" />
                <select defaultValue={brand} className="block w-full outline-none bg-gray-100  py-2 text-base font-semibold px-3 my-3" name="brand">
                     <option value="bmw">bmw</option>
                     <option value="toyota">toyota</option>
                     <option value="honda">honda</option>
                     <option value="tesla">tesla</option>
                     <option value="ford">ford</option>
                     <option value="audi">audi</option>
                </select>
                <input defaultValue={type} placeholder="Type" className="block w-full outline-none bg-gray-100  py-2 text-base font-semibold px-3 my-3" type="text" name="type" id="" />
                <input defaultValue={price} placeholder="Price" className="block w-full outline-none bg-gray-100  py-2 text-base font-semibold px-3 my-3" type="number" name="price" id="" />
                <input defaultValue={rating} placeholder="Rating" className="block w-full outline-none bg-gray-100  py-2 text-base font-semibold px-3 my-3" type="number" name="rating" max='5' min='1' id="" />
                <input className="block w-full outline-none bg-blue-500  py-2 text-base font-semibold px-3 my-3" type="submit" value="Update Product" />
            </form>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default UpdateProduct;