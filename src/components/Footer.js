import linkedin from "../images/linkedin.png"
import github from "../images/github.png"

function Footer() {
    return (
        <div>
            <section id="footer" className="bg-gradient-to-b from-transparent to-customBlue text-xl mt-20 py-5">
                <div className="flex justify-center">
                    <a href="https://www.linkedin.com/in/mattiebarton/"><img className="w-9 object-contain mx-5" src={linkedin}/></a>
                    <a href="https://github.com/maitlandbarton"><img className="w-9 object-contain" src={github}></img></a>
                </div>
            </section>
        </div>
    )
}

export default Footer;