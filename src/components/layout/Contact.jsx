const Contact = () => {
  return (
    <section id="contact" className="w-screen lg:px-40 md:px-32 p-10 bg-primary text-textColor">
       <h2 className="font-semibold mb-6 text-center" data-aos="fade-down">Contact <span className="text-accent">Me</span></h2>
       <div className="flex justify-center">
        <form action="" method="post" className="flex flex-col gap-4 w-[600px]" data-aos="zoom-in">
          <input type="text" name="name" id="name" className="bg-secondary py-2 rounded-lg shadow shadow-accent pl-4 text-sm" placeholder="Your Name" />
          <input type="email" name="email" id="email" className="bg-secondary py-2 rounded-lg shadow shadow-accent pl-4 text-sm" placeholder="Email Address..." />
          <textarea name="message" id="message"  cols="30" rows="10" className="bg-secondary rounded-lg shadow shadow-accent pl-4 pt-4 text-sm" placeholder="Write Message Here..."></textarea>
          <button type="submit" value='send message' className="btn-primary w-40">Send Message</button>
        </form>
       </div>
    </section>
  )
}

export default Contact