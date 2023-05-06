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
        className="flex justify-around items-center max-w-screen h-screen mx-10"
      >
        <div className="max-w-xl flex flex-col items-center rounded-3xl bg-white px-2 py-6 shadow-xl">
          <h4 className="text-xl font-semibold ">areas of expertise</h4>
          <br />
          <p>
            My name is Mattie Barton. I'm a Fullstack Web Developer–focus on
            Frontend–with a solid foundation in React and Node.js.
          </p>
          <br />
          <p>
            I have been working in the tech start-up scene in Berlin for 3
            years, primarily as a Client Success Manager. My previous experience
            as a Client Success Manager has provided me with valuable insights
            into customer needs and a strong foundation in communication and
            project management, and I am excited to bring this holistic view
            into an engineering role.
          </p>
          <br />
          <p>
            I thrive in an agile, collaborative environment where continuous
            learning is paramount.
          </p>
        </div>
        <div className="max-w-md rounded-3xl border border-solid px-2 py-6">
          {/* <img className="w-1/4" src={profile}></img> */}
          <h1>this is where my image goes</h1>
        </div>
      </section>
      <section id="experience" className="w-screen">
        <div>
          <h1>My work experience</h1>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
