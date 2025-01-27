import Image from "next/image";
import img from "../../public/images/logo.png";

export const AboutImage = () => {
  return <div>
    <Image 
    src={img} 
    alt="About" 
    width={400} 
    height={400} 
    className="rounded-full"
    />
  </div>;
};