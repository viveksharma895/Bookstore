function Contact() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center px-4 pt-28 pb-16">
      <div className="w-full max-w-lg text-center">
        <h1 className="text-4xl font-bold md:text-5xl">Contact Us</h1>
        <p className="mt-4 text-base-content/70">
          Have a question? Send us a message and we will get back to you.
        </p>
        <form className="mt-8 space-y-4 text-left">
          <label className="input w-full">
            <input type="text" placeholder="Your name" required />
          </label>
          <label className="input w-full">
            <input type="email" placeholder="Your email" required />
          </label>
          <textarea
            className="textarea w-full"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary w-full">
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}

export default Contact;
