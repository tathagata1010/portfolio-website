const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
        04. What’s Next?
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">Get In Touch</h2>
      <p className="max-w-[600px] text-center text-textDark">
        I'm on the lookout for new and exciting opportunities as a software
        engineer, and I'm eager to take on my next challenge. If you have a
        compelling job offer, an exciting project, or if you simply want to
        connect with a passionate software engineer, I'm all ears! Your message
        could be the start of an incredible professional journey together. Don't
        hesitate to reach out—I'm actively seeking my next adventure in the
        software engineering world!
      </p>

      <div className="flex flex-col items-center gap-6 mt-6">
        <a href="mailto:logintotathagata@gmail.com">
          <button className="w-40 h-14 border border-textGreen font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
            Say Hello
          </button>
        </a>
        <a href="tel:+916290377154">
          <button className="w-40 h-14 border border-textGreen font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
            Call Me
          </button>
        </a>
      </div>
    </section>
  );
};

export default Contact;
