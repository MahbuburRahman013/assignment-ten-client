

const Footer = () => {
    return (
            <div className=" bg-gray-300">
                <div className="py-14 gap-9 grid grid-cols-5 container mx-auto">
                <div className="col-span-2">
                <div className="h-14 flex items-center  gap-2">
                        <img className="w-10" src="https://i.ibb.co/3fP9mBm/sm-5ad1c8addfe79-removebg-preview-1-removebg-preview.png" alt="" />
                        <h1 className="font-semibold text-3xl uppercase">Road<span className="font-bold text-blue-700">Wiz</span></h1>
                    </div>
                    <p>Your one-stop destination for automotive news, reviews, and resources. We are passionate about cars and strive to provide you with the latest information in the world of automobiles.</p>
                </div>
                    <div className="">
                        <section className="widget">
                            <h3 className="text-xl font-bold">Quick Links</h3>
                            <ul className="text-base">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">News</a></li>
                                <li><a href="#">Reviews</a></li>
                                <li><a href="#">Shop</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </section>
                    </div>
                    <div className="">
                        <section className="widget">
                            <h3 className="text-xl font-bold">About Us</h3>
                            <ul className="text-base">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">News</a></li>
                                <li><a href="#">Reviews</a></li>
                                <li><a href="#">Shop</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </section>
                    </div>
                    <div >
                        <section >
                            <h3 className="text-xl font-bold">Contact Us</h3>
                            <address>
                                <p><i className="fa fa-map-marker"></i> 123 Main Street, Anytown, USA</p>
                                <p><i className="fa fa-envelope"></i> info@yourwebsite.com</p>
                                <p><i className="fa fa-phone"></i> +1 (123) 456-7890</p>
                            </address>
                        </section>
                    </div>
                </div>
                <p className="text-center">&copy; {new Date().getFullYear()} YourWebsite. All Rights Reserved.</p>
            </div>
        
    );
};

export default Footer;