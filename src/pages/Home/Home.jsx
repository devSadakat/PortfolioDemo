
const Home = () => {
    return (
        <div>
            <h1>Nav Bar wiht profile photo</h1>
            {/* Div 1 */}
            <div>
                {/* This need to be make flex */}
                <div>
                    <h1>Proffession</h1>
                    <p>Short Descriptions</p>
                </div>
                <div>
                    <img src="Profile Photo" alt="" />
                </div>
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