import { Link } from "react-router-dom";

const JsonBrand = ({item}) => {
       const {brandName,img} = item;

    return (
        <div>
                <Link to={`/brandProduct/${brandName}`}>
                    <div className="flex items-center border-2 rounded-md border-blue-500 h-36">
                        <img className="h-full w-[50%]" src={img} alt="" />
                        <h1 className="text-3xl uppercase h-full font-semibold w-[50%] bg-blue-400 flex justify-center items-center"><p>{brandName}</p></h1>
                    </div>
                </Link>
        </div>
    );
};

export default JsonBrand;