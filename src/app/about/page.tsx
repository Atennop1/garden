import { AboutImage } from "@/components/AboutImage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TechStack from "@/components/TechStack";
import ThemeToogle from "@/components/ThemeToogle";
export default function About() {
	return (
		<>
			<Header />
			<div className="container mx-auto px-4 py-8 md:pt-40 max-w-7xl min-h-screen">
				<div className="flex flex-col items-center md:flex-row md:justify-between md:items-start mb-40">
					<div className="w-full max-w-[300px] md:max-w-none md:w-5/12">
						<AboutImage />
					</div>
					<div className="flex flex-col items-center text-center md:text-left md:w-6/12">
						<p className="text-3xl md:text-5xl font-bold mb-4 mt-14">
							atennop
						</p>
						<p className="text-base md:text-lg text-center">
							i have been programming since i was 12yo, developing computer games,
							at first i used C# and Unity, but later i moved on to C++, Unreal and proprietary engines,
							now i want to dive deeper into multiplayer games, OpenGL and CMake, so that i can work with engines like Source
						</p>
						<div className="mt-7 w-full flex justify-center">
							<TechStack />
						</div>
					</div>
				</div>
				<ThemeToogle />
			</div>
			<Footer />
		</>
	);
}
