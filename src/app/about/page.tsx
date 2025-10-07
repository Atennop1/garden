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
						<p className="text-3xl md:text-5xl font-bold mb-4 mt-6 md:mt-[-45px]">
							atennop
						</p>
						<p className="text-base md:text-lg text-center">
							I&apos;ve been programming since 12yo, initially developing computer games using C# and Unity, then switching to C++ and Unreal.
							Now I&apos;m focusing on backend development, learning Go and PostgreSQL, and building my understanding of system design and architecture.
							I like creating things from scratch — from custom game engines to backend services.
							I also enjoy exploring new tools and technologies, from OpenGL to web development with Next.js.
						</p>
						<div className="mt-7 mb-2 w-full flex justify-center">
							<TechStack />
						</div>
					</div>
				</div>
				<ThemeToogle />
			</div>
		</>
	);
}
