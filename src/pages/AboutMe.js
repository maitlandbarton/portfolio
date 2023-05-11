import profile from "../images/profile.jpg";
import Marquee from "../components/reusable/Marquee";

function AboutMe() {
  return (
    <div className="mx-auto max-w-screen">

      <Marquee text1={"about me"} text2={"about me"}/>
      
      <section
        id="expertise"
        className="flex flex-col justify-around items-center max-w-screen lg:flex-row mx-10"
      >
        <div className="max-w-3xl flex flex-col items-center rounded-xl bg-white px-8 lg:px-12 py-8">

          <p>
            I'm a Fullstack Web Developer – <span className="italic text-customBlue">focus on
            Frontend </span> – with a solid foundation in React and Node.js. I strive to express creativity in all that I do, and for this I have become captivated by frontend development. The opportunity to work closely with designers, clients, etc. to make their creative vision come true in the form of software is what has motivated me to take the leap into web development. 
          </p>
          <br />
          <p>
            I have been working in tech start-ups in Berlin for 3
            years, primarily as a Client Success Manager. My previous experience
            as a CSM has provided me with valuable insights into customer needs
            as well as a strong foundation in both communication & project management, skills that I am eager to bring into an engineering role. 
          </p>
          <br />

          <p>
            Currently, my expertise lies with the MERN stack as well as the CSS frameworks Tailwind and Bootstrap (preference for Tailwind). I am currently learning Typescript, and always have a new project in the works on the side that I would be happy to chat about. Nest.js and Angular are also on my radar to learn soon, but I am very open to learning any new technologies.
          </p>

          <div className="rounded-md bg-slate-200 text-customBlue hover:shadow-lg hover:shadow-customBlue transition-colors duration-500 px-4 py-2 my-8">
            <a href="/files/MaitlandBarton_CV.pdf" download>
              download CV
            </a>
          </div>
        </div>
        <div className="max-w-md rounded-3xl border border-solid lg:section-height">
          <img
            className="w-full h-auto lg:section-height object-cover rounded-3xl shadow-xl shadow-customBlue"
            src={profile}
          ></img>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
