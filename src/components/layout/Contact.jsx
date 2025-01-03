import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); 
    emailjs
      .send(
        "service_rm0a8tm",
        "template_186autr",
        formData,
        "kxzFuzUDD1cPWxwa-"
      )
      .then(() => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setIsLoading(false);  
        setTimeout(() => {
          setStatus("");
        }, 3000);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setStatus("Failed to send message. Please try again later.");
        setIsLoading(false);
        setTimeout(() => {
          setStatus("");
        }, 3000);
      });
  };

  return (
    <section
      id="contact"
      className="w-screen lg:px-40 md:px-32 p-10 bg-primary text-textColor"
    >
      <h2 className="font-semibold mb-6 text-center" data-aos="fade-down">
        Contact <span className="text-accent">Me</span>
      </h2>
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-[600px]"
          data-aos="zoom-in"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-secondary py-2 rounded-lg shadow shadow-accent pl-4 text-sm"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-secondary py-2 rounded-lg shadow shadow-accent pl-4 text-sm"
            placeholder="Email Address..."
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            cols="30"
            rows="10"
            className="bg-secondary rounded-lg shadow shadow-accent pl-4 pt-4 text-sm"
            placeholder="Write Message Here..."
            required
          />
          <button type="submit" className="btn-primary w-40" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      {status && <p className="text-center mt-4">{status}</p>}
    </section>
  );
};

export default Contact;
