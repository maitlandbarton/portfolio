import bootstrap from "../images/bootstrap.png";
import express from "../images/express.png";
import mongodb from "../images/mongodb.png";
import node from "../images/node.png";
import react from "../images/react.png";
import tailwind from "../images/tailwind.png";
import laptop from "../images/dumpling-dash.png";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

function Home() {
  return (
    <div className="h-screen">
      <div class="relative flex overflow-x-hidden">
        <div class="py-12 animate-marquee whitespace-nowrap ">
          <span class="mx-4 text-6xl">responsive •</span>
          <span class="mx-4 text-6xl">scalable •</span>
          <span class="mx-4 text-6xl">responsive •</span>
          <span class="mx-4 text-6xl">scalable •</span>
          <span class="ml-4 mr-7 text-6xl">responsive •</span>
        </div>

        <div class="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
          <span class="mr-4 ml-8  text-6xl">scalable •</span>
          <span class="mx-4  text-6xl">responsive •</span>
          <span class="mx-4  text-6xl">scalable •</span>
          <span class="mx-4  text-6xl">responsive •</span>
          <span class="mx-4  text-6xl">scalable •</span>
        </div>
      </div>

      <div className="flex justify-around mt-14">
        <div className="w-1/2 flex flex-col ml-28 pt-10">
          <h1 className="text-5xl font-semibold mb-3">Hi, I'm Mattie</h1>
          <h2 className="text-3xl">A Fullstack Web Developer</h2>
          <h2 className="text-3xl">& Design Enthusiast</h2>
          <br />
          <p className="text-xl font-thin">
            I have a passion for developing high-quality web apps with a
            responsive and scalable design.
          </p>

          <div className="flex justify-start space-x-5 mt-5">
            <img className="w-10 object-contain" src={react}></img>
            <img className="w-10 object-contain" src={tailwind}></img>
            <img className="w-10 object-contain" src={bootstrap}></img>
            <img className="w-10 object-contain" src={node}></img>
            <img className="w-10 object-contain" src={mongodb}></img>
            <img className="w-10 object-contain" src={express}></img>
          </div>

          <hr className="my-6" />
          <div>
            <div className="flex my-3">
             <PhoneIcon className="h-6 mr-4" /> <p>+49 176 3611 7408</p>
            </div>
            <a href="mailto:maitlandbarton@gmail.com">
            <div className="flex my-3">
              <EnvelopeIcon className="h-6 mr-4" /> <p>maitlandbarton@gmail.com</p>
            </div>
            </a>
          </div>

          
        </div>

        <div className="flex flex-col w-1/2 py-5 px-5">
          <img src={laptop} />
        </div>
      </div>
    </div>
  );
}

export default Home;
