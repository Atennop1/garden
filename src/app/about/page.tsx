import { AboutImage } from "@/components/AboutImage";
import Header from "@/components/Header";
import TechStack from "@/components/TechStack";
import ThemeToogle from "@/components/ThemeToogle";

export default function About() {
	return (
		<>
			<Header />
			<div className="container mx-auto px-4 py-8 md:pt-[190px] max-w-7xl">
				<div className="flex flex-col items-center md:flex-row md:justify-between md:items-start mb-[50px]">
					<div className="w-full max-w-[300px] md:max-w-none md:w-5/12 animate-fade-in">
						<AboutImage />
					</div>
					<div className="flex flex-col items-center text-center md:text-left md:w-7/12 animate-fade-in">
						<p className="text-3xl md:text-5xl font-bold mb-4 mt-4 md:mt-[-45px]">
							atennop
						</p>
						<p className="text-base md:text-lg text-center">
							I&apos;ve been programming since 12yo, developing computer games. At first I used C# and Unity,
							but later I switched to C++, Unreal and proprietary (including my own) engines. Now I want
							to dive deeper into multiplayer games, OpenGL and CMake, so that in the future I can
							work with engines like Source. In general, I like everything related to IT, so I like to
							make both 3D model parsers on OpenGL and websites on Next.js (like this one)
						</p>
						<div className="mt-7 w-full flex justify-center">
							<TechStack />
						</div>
					</div>
				</div>
				<ThemeToogle />
			</div>
		</>
	);
}
