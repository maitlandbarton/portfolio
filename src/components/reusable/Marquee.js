const Marquee = ({ text1, text2 }) => {
  return (
    <div class="relative flex overflow-x-hidden">
      <div className="py-12 animate-marquee whitespace-nowrap">
        {[...Array(5)].map((_, index) => (
          <span key={index} className="mx-4 text-4xl md:text-5xl lg:text-6xl">
            {index % 2 === 0 ? text1 : text2} •
          </span>
        ))}
      </div>

      <div className="py-12 animate-marquee whitespace-nowrap">
        {[...Array(5)].map((_, index) => (
          <span key={index} className="mx-4 text-4xl md:text-5xl lg:text-6xl">
            {index % 2 === 0 ? text1 : text2} •
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
