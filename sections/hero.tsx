const HeroSection = () => {
  return (
    <div className="h-screen w-full p-3 pb-5">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-3 px-4 pt-28 pb-20 text-center sm:gap-4 sm:px-6">
          <h1 className="max-w-4xl text-center text-4xl tracking-tight text-balance text-black sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
            Refined Components, Made to be Noticed.
          </h1>
          <p className="max-w-lg font-medium text-black/60 sm:text-lg dark:text-white/60 ">
            A carefully crafted collection of animated React components designed
            for modern interfaces. Explore them below and bring a little more
            character to your projects.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
