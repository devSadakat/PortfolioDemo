import Career from "../../components/Career/Career.jsx";
import Contact from "../../components/Contect/Contact.jsx";
import Expartise from "../../components/Expartise/Expartise.jsx";
import NavBar from "../../components/NavBar/NavBar.jsx";
import Profession from "../../components/Profession/Profession.jsx";
import Projects from "../../components/Projects/Projects.jsx";
import "../Home/style.css"
const Home = () => {
    return (
        <div>
            <NavBar />

            <div>
                <Profession />
            </div>

            <div>
                <Expartise />
            </div>

            <div>
                <Projects />
            </div>

            <div>
                <Career />
            </div>

            <div>
                <Contact />
            </div>
        </div>
    );
};

export default Home;