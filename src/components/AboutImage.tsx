import Image from "next/image";
import img1 from "../../public/images/logo1.png";
import img2 from "../../public/images/logo2.png";

export const AboutImage = () => {
    return (
        <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden">
            <Image
                src={img1}
                alt="About"
                width={400}
                height={400}
                className="absolute top-0 left-0 w-full h-full object-cover"
            />

            <Image
                src={img2}
                alt="About"
                width={400}
                height={400}
                className="absolute top-0 left-0 w-full h-full object-cover animate-fadeInOut"
            />
        </div>
    );
};
