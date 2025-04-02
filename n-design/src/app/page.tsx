

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center text-white gap-[10vw]">
      <div className="relative w-[15vw]">
          {/* Your logo */}
          <img
            src="/background.png"
            alt="Animated Logo"
            className="w-full relative z-10"
          />

          {/* The animated reveal */}
          <div className="absolute top-0 left-0 h-full bg-white z-0 animate-growRight" />
        </div>

      <nav className="flex gap-[10vw] text-[1.2vw]">
        <a href="#about" className="hover:text-[1.4vw] transition-all duration-300">About Us</a>
        <a href="#services" className="hover:text-[1.4vw] transition-all duration-300">Services</a>
        <a href="#contact" className="hover:text-[1.4vw] transition-all duration-300">Contact</a>
      </nav>
    </main>
  );
}
