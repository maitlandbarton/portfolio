const Marquee = ({ text1, text2}) => {
    return (
        <div class="relative flex overflow-x-hidden">
        <div class={`py-12 animate-marquee whitespace-nowrap`}>
          <span class="mx-4 text-4xl md:text-5xl lg:text-6xl">{text1} •</span>
          <span class="mx-4 text-4xl md:text-5xl lg:text-6xl">{text2} •</span>
          <span class="mx-4 text-4xl md:text-5xl lg:text-6xl">{text1} •</span>
          <span class="mx-4 text-4xl md:text-5xl lg:text-6xl">{text2} •</span>
          <span class="mx-4 text-4xl md:text-5xl lg:text-6xl">{text1} •</span>
        </div>

        <div class={`absolute top-0 py-12 animate-marquee2 whitespace-nowrap`}>
          <span class="mx-4  text-4xl md:text-5xl lg:text-6xl">{text2} •</span>
          <span class="mx-4  text-4xl md:text-5xl lg:text-6xl">{text1} •</span>
          <span class="mx-4  text-4xl md:text-5xl lg:text-6xl">{text2} •</span>
          <span class="mx-4  text-4xl md:text-5xl lg:text-6xl">{text1} •</span>
          <span class="mx-4  text-4xl md:text-5xl lg:text-6xl">{text2} •</span>
        </div>
      </div>
    )
}

export default Marquee;