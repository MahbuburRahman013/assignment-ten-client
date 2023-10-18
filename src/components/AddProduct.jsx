

const AddProduct = () => {


const handleAddProduct = (e) =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const newForm = {name,photo,brand,type,description,price,rating};
    console.log(newForm)
    fetch('http://localhost:5000/postData', {
        method:"POST",
        headers:{
            'content-type': "application/json"
        },
        body: JSON.stringify(newForm)
    })
    .then(res=> res.json())
    .then(data=> {
        if(data.acknowledged){
            alert('product added successfully')
        }
        
    })

}




    return (
        <div className="container mx-auto flex justify-center  h-screen">
            <div className="w-[50%] mt-16">
                <h1 className="text-center text-3xl font-semibold">Add Product</h1>
            <form onSubmit={handleAddProduct} className="w-full">
                <input placeholder="Photo URL" className="block w-full outline-none bg-gray-100  py-2 text-base font-semibold px-3 my-3" type="text" name="photo" id="" />
                <input placeholder="Product Name" className="block w-full outline-none bg-gray-100  py-2 text-base font-semibold px-3 my-3" type="text" name="name" id="" />
                <select className="block w-full outline-none bg-gray-100  py-2 text-base font-semibold px-3 my-3" name="brand">
                     <option value="bmw">bmw</option>
                     <option value="toyota">toyota</option>
                     <option value="honda">honda</option>
                     <option value="tesla">tesla</option>
                     <option value="ford">ford</option>
                     <option value="audi">audi</option>
                </select>
                <input placeholder="Type" className="block w-full outline-none bg-gray-100  py-2 text-base font-semibold px-3 my-3" type="text" name="type" id="" />
                <input placeholder="Description" className="block w-full outline-none bg-gray-100  py-2 text-base font-semibold px-3 my-3" type="text" name="description" id="" />
                <input placeholder="Price" className="block w-full outline-none bg-gray-100  py-2 text-base font-semibold px-3 my-3" type="number" name="price" id="" />
                <input placeholder="Rating" className="block w-full outline-none bg-gray-100  py-2 text-base font-semibold px-3 my-3" type="number" name="rating" max='5' min='1' id="" />
                <input className="block w-full outline-none bg-blue-500  py-2 text-base font-semibold px-3 my-3" type="submit" value="Add Product" />
            </form>
            </div>
        </div>
    );
};

export default AddProduct;