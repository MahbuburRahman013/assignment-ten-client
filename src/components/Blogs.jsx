

const Blogs = () => {
    return (
        <div className="container mx-auto my-14">
            <h1 className=" my-5  flex justify-center"><p className="uppercase text-4xl font-semibold border-b-4 pb-2 border-blue-600">Latest Blogs</p></h1>
            <div className="lg:grid gap-9  grid-cols-3">
            <div className="bg-gray-100 my-5 py-3 px-5">
                <img className="h-[40%] w-full rounded" src="https://i.ibb.co/zbP9KLg/Toyota-Prius-Best-Fuel-Efficient-Car-2022-png.webp" alt="" />
                <p>comments: 22</p>
                <h1 className="text-2xl my-3 font-semibold">Top 10 Fuel-Efficient Cars of 2023</h1>
                <p> Discover the latest models and technology innovations that make these cars both eco-friendly and cost-effective. Learn about the MPG champions, hybrid options, and electric vehicles that are changing the game in fuel efficiency</p>
            </div>
            <div className="bg-gray-100 my-5 py-3 px-5">
                <img className="h-[40%] w-full rounded" src="https://i.ibb.co/DWCsvHK/Adobe-Stock-221156690-copy.jpg" alt="" />
                <p>comments: 22</p>
                <h1 className="text-2xl my-3 font-semibold">The Ultimate Guide to Car Maintenance: Tips and Tricks</h1>
                <p> Discover the latest models and technology innovations that make these cars both eco-friendly and cost-effective. Learn about the MPG champions, hybrid options, and electric vehicles that are changing the game in fuel efficiency</p>
            </div>
            <div className="bg-gray-100 py-3  my-5 px-5 rounded">
                <img className="h-[40%] w-full" src="https://i.ibb.co/4msPLn0/Self-Driving-Cars-Blog-1200x630-631061396.jpg" alt="" />
                <p>comments: 22</p>
                <h1 className="text-2xl my-3 font-semibold">Exploring the Future of Autonomous Vehicles</h1>
                <p> Discover the latest models and technology innovations that make these cars both eco-friendly and cost-effective. Learn about the MPG champions, hybrid options, and electric vehicles that are changing the game in fuel efficiency</p>
            </div>
            </div>
        </div>
    );
};

export default Blogs;