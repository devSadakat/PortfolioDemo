import Expartise from "../../components/Expartise/Expartise.jsx";
import NavBar from "../../components/NavBar/NavBar.jsx";
import Profession from "../../components/Profession/Profession.jsx";
import "../Home/style.css"
const Home = () => {
    return (
        <div>
            <NavBar />

            <div>
                <Profession/>
            </div>

            <div>
                <Expartise/>
            </div>
            
            <div>Projects</div>
            {/* Div 4 */}
            <div>Career Experience</div>
            {/* Div 5 */}
            <div>Contact Section</div>
        </div>
    );
};

export default Home;