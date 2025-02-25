import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa"

const Socials = () => {
  return (
    <div className="text-accent flex gap-8 mt-6 lg:mt-0">
      <div className="socials">
        <FaFacebookF />
      </div>
      <div className="socials">
      <FaInstagram />
      </div> 
      <div className="socials">
      <FaTwitter />
      </div>
      <div className="socials">
      <FaGithub />
      </div>
    </div>
  )
}

export default Socials