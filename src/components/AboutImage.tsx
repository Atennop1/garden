import Image from "next/image";
import img1 from "../../public/images/logo1.png";
import img2 from "../../public/images/logo2.png";

export const AboutImage = () => {
    return <div>
        <Image
            src={img1}
            alt="About"
            width={400}
            height={400}
            className="rounded-full top-0 left-0"
        />
        <Image
            src={img2}
            alt="About"
            width={400}
            height={400}
            className="rounded-full absolute top-0 left-0 animate-fadeInOut"
        />
    </div>;
};
