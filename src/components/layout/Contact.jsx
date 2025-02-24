const Contact = () => {
  return (
    <section
      id="contact"
      className="w-screen lg:px-40 md:px-32 p-10 bg-primary text-textColor text-center py-28 font-mono"
    >
        <h2 className="font-semibold mb-6">
          Get in Touch
        </h2>
        <p className="text-md mb-24 text-lg">
          If you’ve got a project in mind or just want to connect, drop me a
          line.
        </p>
        <a
          href="mailto:chiamakauyanna@gmail.com"
          className="px-6 py-3 bg-accent text-primary text-lg rounded-lg shadow-md hover:bg-primary hover:border-accent hover:border transition duration-300 ease-in-out hover:text-textColor"
        >
          Say Hello!
        </a>
    </section>
  );
};

export default Contact;
