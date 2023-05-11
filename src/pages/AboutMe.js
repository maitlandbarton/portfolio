import profile from "../images/profile.jpg";
import Marquee from "../components/reusable/Marquee";

function AboutMe() {
  return (
    <div className="mx-auto max-w-screen">

      <Marquee text1={"about me"} text2={"about me"}/>
      
      <section
        id="expertise"
        className="flex flex-col justify-around items-center max-w-screen lg:flex-row lg:section-height mx-10"
      >
        <div className="max-w-xl flex flex-col items-center rounded-xl bg-white md:px-12 py-10">
          <div className="text-left w-full">
            <h4 className="text-xl font-semibold">areas of expertise</h4>
          </div>
          <br />

          <p>
            My name is Mattie Barton. I'm a Fullstack Web Developer–focus on
            Frontend–with a solid foundation in React and Node.js.
          </p>
          <br />
          <p>
            I have been working in the tech start-up scene in Berlin for 3
            years, primarily as a Client Success Manager. My previous experience
            as a CSM has provided me with valuable insights into customer needs
            and a strong foundation in communication and project management, and
            I am excited to bring this holistic view into an engineering role.
          </p>
          <br />
          <p>
            I thrive in an agile, collaborative environment where continuous
            learning is paramount.
          </p>
          <br />
          <div className="rounded-md bg-slate-200 text-customBlue hover:shadow-lg hover:shadow-customBlue transition-colors duration-500 px-4 py-2 my-8">
            <a href="/files/CV_Mattie_Barton.pdf" download>
              download CV
            </a>
          </div>
        </div>
        <div className="max-w-md rounded-3xl border border-solid">
          <img
            className="w-full section-height object-cover rounded-3xl shadow-xl shadow-customBlue"
            src={profile}
          ></img>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
