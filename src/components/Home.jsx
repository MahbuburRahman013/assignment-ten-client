import Banner from "./Banner";
import Blogs from "./Blogs";
import Brands from "./Brands";
import Services from "./Services";


const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
           <div className="px-5 lg:px-0"> <Brands></Brands></div>
            <Services></Services>
            <div className="px-5 lg:px-0"><Blogs></Blogs></div>
            
        </div>
    );
};

export default Home;