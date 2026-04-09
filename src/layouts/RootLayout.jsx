import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="pt-10"></div>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;