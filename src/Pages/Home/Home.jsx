import GoToTop from "../../assets/GoToTop/GoToTop";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import Exprences from "../Exprences/Exprences";
import Footer from "../Footer/Footer";
import Newsletter from "../Newsletter/Newsletter";
import Pricing from "../Pricing/Pricing";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";



const Home = () => {
    return (
        <div className="bg-[#0b0d0e]" >
            <GoToTop></GoToTop>
            <Banner></Banner>
            <About></About>
            <Exprences></Exprences>
            <Services></Services>
            <Projects></Projects>
            <Testimonial></Testimonial>
            <Pricing></Pricing>
            <Blogs></Blogs>
            <Newsletter></Newsletter>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;