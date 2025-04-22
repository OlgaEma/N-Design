export default function ContactForm() {
    return (
      <form
        action="https://formspree.io/f/xwplaqak"
        method="POST"
        className="w-full max-w-xl space-y-6 text-black px-10"
      >
        <h2 className="text-2xl font-bold">Book a Free Consultation</h2>
  
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
  
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
  
        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            name="message"
            rows={4}
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
  
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
        >
          Send
        </button>
      </form>
    );
  }