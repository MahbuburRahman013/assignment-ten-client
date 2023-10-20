import { useEffect, useState } from "react";
import JsonBrand from "./JsonBrand";


const Brands = () => {
    const [data,setData] = useState([])

    useEffect(()=>{

        fetch('/data.json')
        .then(res=> res.json())
        .then(data1=> setData(data1))

    },[])

    return (
        <div>
            <h1 className="flex justify-center items-center mt-16"><p className="text-4xl font-semibold border-b-4 border-blue-500 py-2 my-10">BRANDS</p></h1>
            <div className="lg:grid grid-cols-3 gap-8 container mx-auto mb-24">
            {
                data.map((item, i) => <JsonBrand item={item} key={i}></JsonBrand>)
            }
            </div>
            
        </div>
    );
};

export default Brands;