'use client';

export default function Home() {
  return (
    <main className="bg-black text-white scroll-smooth">
      {/* Hero Section */}
      <section className="flex flex-col h-screen w-full items-center justify-center gap-[10vh]">
        <div className="relative w-[15vw]">
          <img
            src="/background.png"
            alt="Animated Logo"
            className="w-full relative z-10"
          />
          <div className="absolute top-0 left-0 h-full bg-white z-0 animate-growRight" />
        </div>

        <nav className="flex gap-[10vw] text-[1.2vw]">
          <a href="#about" className="hover:text-[1.4vw] transition-all duration-300">About Us</a>
          <a href="#services" className="hover:text-[1.4vw] transition-all duration-300">Services</a>
          <a href="#contact" className="hover:text-[1.4vw] transition-all duration-300">Contact</a>
        </nav>
      </section>

      {/* About Section */}
      <section id="about" className="flex h-screen w-full">
        {/* Left Side */}
        <div className="relative w-[30%] bg-black flex items-center justify-center overflow-hidden">
          <h2 className="z-10 text-black text-3xl font-bold">About Us</h2>
          <div className="absolute top-0 left-[15%] w-[70%] h-full bg-white animate-slideDown" />
        </div>

        {/* Right Side */}
        <div className="relative w-[70%] bg-white overflow-hidden flex items-center justify-center">
          {/* Black overlay that moves UP */}
          <div className="absolute bottom-0 left-0 w-full h-full bg-black animate-slideUpOverlay z-10" />

          {/* Revealed content under the overlay */}
          <div className="relative z-0 flex flex-col items-center text-black text-xl opacity-0 fade-in-delayed">
            <img src="/team.png" alt="Team" className="w-40 mb-4" />
            <p className="text-xl text-center px-4">
              We are a small, passionate studio designing with purpose and heart.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}