import "../Profession/proffession.css"
import image from "../../assets/sadakat3.png"

const Profession = () => {
    return (
        <div id="profession">
            <div>
                <h1> <span id='mern'>mern</span> <span id='developer'>Stack Web Developer</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur voluptatem atque aperiam provident aut officiis! Odit alias quae deleniti consectetur? Perferendis explicabo eaque sapiente similique, facilis debitis sint corrupti quae, voluptatibus at, cupiditate harum animi.</p>
                <button id="resumeBtn">Download Resume</button>
            </div>
            <img src={image} alt="" />
        </div>
    );
};
export default Profession;