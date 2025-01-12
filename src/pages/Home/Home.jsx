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
            {/* Div 2 */}
            <div>Experties</div>
            {/* Div 3 */}
            <div>Projects</div>
            {/* Div 4 */}
            <div>Career Experience</div>
            {/* Div 5 */}
            <div>Contact Section</div>
        </div>
    );
};

export default Home;