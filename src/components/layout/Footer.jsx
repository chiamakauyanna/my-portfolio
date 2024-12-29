import { FaAngleUp } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="h-full w-screen py-6 flex justify-between px-14 bg-secondary text-text">
      <p>
      &copy;2023 Chiamaka Uyanna, All Rights Reserved
      </p>
      <div className="p-2 rounded-full bg-accent flex items-center">
        <FaAngleUp/>
      </div>
      
    </div>
  )
}

export default Footer