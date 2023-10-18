import { Link } from "react-router-dom";

const Brands = () => {

    return (
        <div>
            <h1 className="flex justify-center items-center mt-16"><p className="text-4xl font-semibold border-b-4 border-blue-500 py-2 my-10">BRANDS</p></h1>
            <div className="grid grid-cols-3 gap-8 container mx-auto mb-24">
                <Link to='/brandProduct/toyota'>
                    <div className="flex items-center border-2 rounded-md border-blue-500 h-36">
                        <img className="h-full w-[50%]" src="https://i.ibb.co/26wQJKH/Color-Toyota-logo.jpg" alt="" />
                        <h1 className="text-3xl uppercase h-full font-semibold w-[50%] bg-blue-400 flex justify-center items-center"><p>Toyota</p></h1>
                    </div>
                </Link>
                <Link to='/brandProduct/bmw'>
                <div className="flex items-center border-2 rounded-md border-blue-500 h-36">
                    <img className="h-full w-[50%]" src="https://i.ibb.co/cy400fz/BMW-logo.jpg" alt="" />
                    <h1 className="text-3xl uppercase h-full font-semibold w-[50%] bg-blue-400 flex justify-center items-center"><p>BMW</p></h1>
                </div>
                </Link>
                <Link to='/brandProduct/honda'>
                <div className="flex items-center border-2 rounded-md border-blue-500 h-36">
                    <img className="h-full w-[50%]" src="https://i.ibb.co/3SR7YTW/ghows-OH-a6f37397-c8e8-4179-8585-5ee3f80ce062-af0cbbc5.webp" alt="" />
                    <h1 className="text-3xl uppercase h-full font-semibold w-[50%] bg-blue-400 flex justify-center items-center"><p>Honda</p></h1>
                </div>
                </Link>
               <Link to='/brandProduct/tesla'>
               <div className="flex items-center border-2 rounded-md border-blue-500 h-36">
                    <img className="h-full w-[50%]" src="https://i.ibb.co/GxrbcMF/images.jpg" alt="" />
                    <h1 className="text-3xl uppercase h-full font-semibold w-[50%] bg-blue-400 flex justify-center items-center"><p>Tesla</p></h1>
                </div>
               </Link>
                <Link to='/brandProduct/ford'>
                <div className="flex items-center border-2 rounded-md border-blue-500 h-36">
                    <img className="h-full w-[50%]" src="https://i.ibb.co/qxxnr6k/ford-brand-logo-car-symbol-blue-design-usa-automobile-illustration-free-vector.jpg" alt="" />
                    <h1 className="text-3xl uppercase h-full font-semibold w-[50%] bg-blue-400 flex justify-center items-center"><p>Ford</p></h1>
                </div>
                </Link>
                <Link to='/brandProduct/audi'>
                <div className="flex items-center border-2 rounded-md border-blue-500 h-36">
                    <img className="h-full w-[50%]" src="https://i.ibb.co/TbggjLf/pngimg-com-car-logo-PNG1640.png" alt="" />
                    <h1 className="text-3xl uppercase h-full font-semibold w-[50%] bg-blue-400 flex justify-center items-center"><p>Audi</p></h1>
                </div>
                </Link>
            </div>
        </div>
    );
};

export default Brands;