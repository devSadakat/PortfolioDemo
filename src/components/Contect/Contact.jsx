import "../Contect/contact.css"

const Contact = () => {
    return (
        <div>
            <h1>Contact Informations</h1>
            <div>
                <div className="text">
                    <h2>Sadakat Hossain</h2>
                    <h3>Mern Satack Web developer</h3>
                    <p>E-Mail: sadakat.sh1@gmail.com</p>
                    <p>Phone: +880188-7023201</p>
                </div>
                <div>
                    <div id="contact">
                        <h2 style={{color: 'red'}} >Mail</h2>
                    </div>
                    <div id="input">
                        <input type="text" name="name" placeholder="Your Name" id="" />
                        <input type="text" name="email" placeholder="Your Email" id="" />
                        <textarea name="text" placeholder="Write Your Message" id=""></textarea>
                        <input style={{color: "red" , backgroundColor: 'yellow'}} type="submit" value="Sent" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;