import profile from "../images/profile.jpg";

function AboutMe() {
  return (
    <div className="mx-auto max-w-screen">
      <div class="relative flex overflow-x-hidden">
        <div class="py-12 animate-marquee whitespace-nowrap ">
          <span class="mx-4 text-7xl">about me •</span>
          <span class="mx-4 text-7xl">about me •</span>
          <span class="mx-4 text-7xl">about me •</span>
          <span class="mx-4 text-7xl">about me •</span>
          <span class="mx-4 text-7xl">about me •</span>
        </div>

        <div class="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
          <span class="mx-4  text-7xl">about me •</span>
          <span class="mx-4  text-7xl">about me •</span>
          <span class="mx-4  text-7xl">about me •</span>
          <span class="mx-4  text-7xl">about me •</span>
          <span class="mx-4  text-7xl">about me •</span>
        </div>
      </div>
      <section
        id="expertise"
        className="flex justify-around items-center max-w-screen section-height mx-10"
      >
        <div className="max-w-xl flex flex-col items-center rounded-xl bg-white px-12 py-10">
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
          <div className="rounded-md bg-customBlue border border-aqua text-white hover:bg-aqua hover:border-customBlue hover:text-indigo transition-colors duration-500 px-4 py-2 my-8">
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
