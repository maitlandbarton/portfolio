import laptop from "../images/dumpling-dash.png";
import bootstrap from "../images/bootstrap.png";
import express from "../images/express.png";
import mongodb from "../images/mongodb.png";
import node from "../images/node.png";
import react from "../images/react.png";
import tailwind from "../images/tailwind.png";

function Home() {
  return (
    <div className="h-screen">
      <div class="relative flex overflow-x-hidden">
        <div class="py-12 animate-marquee whitespace-nowrap ">
          <span class="mx-4 text-7xl">responsive •</span>
          <span class="mx-4 text-7xl">scalable •</span>
          <span class="mx-4 text-7xl">responsive •</span>
          <span class="mx-4 text-7xl">scalable •</span>
          <span class="ml-4 mr-7 text-7xl">responsive •</span>
        </div>

        <div class="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
          <span class="mr-4 ml-8  text-7xl">scalable •</span>
          <span class="mx-4  text-7xl">responsive •</span>
          <span class="mx-4  text-7xl">scalable •</span>
          <span class="mx-4  text-7xl">responsive •</span>
          <span class="mx-4  text-7xl">scalable •</span>
        </div>
      </div>

      <div className="flex justify-around mt-14">
        <div className="w-1/2 flex flex-col ml-28 pt-10">
          <h1 className="text-5xl font-semibold">Hi, I'm Mattie</h1>
          <h2 className="text-3xl">A Fullstack Web Developer</h2>
          <h2 className="text-3xl">& Design Enthusiast!</h2>
          <br />
          <p className="text-xl">
            I have a passion for developing high-quality web apps with a sexy
            design and smooth UI.
          </p>
          

          <div>
            <p>let's get in touch:</p>
          </div>
        </div>

        <div className="flex flex-col w-1/2 py-5 px-5">
            <img src={laptop}></img>
          
        </div>
      </div>
    </div>
  );
}

export default Home;
