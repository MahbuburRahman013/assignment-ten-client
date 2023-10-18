

const Services = () => {
    return (
        <div className="bg-gray-100 my-10 pb-10">
            <h1 className="text-center uppercase text-4xl py-7 font-semibold">Our Services</h1>
           <div className="grid grid-cols-4 container mx-auto px-12 gap-6">

           <div className="bg-blend-overlay bg-gray-700 rounded bg-[url(https://i.ibb.co/428hy4p/engine-repair.jpg)] bg-no-repeat h-[200px] flex justify-center items-center"><p className="text-gray-50 font-semibold text-xl">Engine Repair</p></div>
            <div className="bg-blend-overlay bg-gray-700 rounded bg-[url(https://i.ibb.co/6nY9083/Car-Repairs.jpg)]   bg-no-repeat h-[200px] flex justify-center items-center"><p className="text-gray-50 font-semibold text-xl">Auto Repair</p></div>
            <div className="bg-blend-overlay bg-gray-700 rounded bg-[url(https://i.ibb.co/KDJZ3Vf/car-servicing-main-photo.jpg)] bg-no-repeat h-[200px] flex justify-center items-center"><p className="text-gray-50 font-semibold text-xl">Servicing</p></div>
            <div className="bg-blend-overlay bg-gray-700 rounded bg-[url(https://i.ibb.co/FKfdW38/header-image-battery-test.jpg)] bg-no-repeat h-[200px] flex justify-center items-center"><p className="text-gray-50 font-semibold text-xl">Battery Service</p></div>

           </div>
            
        </div>
    );
};

export default Services;