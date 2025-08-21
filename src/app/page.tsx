"use client";

import Header from "@/components/Header";
import { FaTelegram, FaGithub } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import ThemeToogle from "@/components/ThemeToogle";

export default function Home() {
	return (
		<>
			<Header />
			<main className="flex min-h-[512px]">
				<div className="flex flex-col ml-[26px] md:ml-[212px] mt-52 animate-fade-in">
					<div className="gap-12">
						<h1 className="text-5xl font-bold md:text-6xl">
							hello, <br /> i am <span className="bg-gradient-to-r from-green-400 to-green-700 bg-clip-text text-transparent">atennop</span>
						</h1>
						<h2 className="text-2xl font-bold text-gray-600 dark:text-gray-400">
							<TypeAnimation
								sequence={[
									"C++ developer",
									1000,
									"Backend developer",
									1000,
									"Go developer",
									1000,
								]}
								repeat={Infinity}
								wrapper="span"
								speed={1}
								style={{ display: "inline-block" }}
							/>
						</h2>
						{/* icons telegram and github */}
						<div className="flex space-x-4 mt-5">
							<a
								href="https://github.com/Atennop1"
								target="_blank"
								rel="noopener noreferrer"
								className="text-4xl"
							>
								<FaGithub />
							</a>
							<a
								href="https://t.me/atennop"
								target="_blank"
								rel="noopener noreferrer"
								className="text-4xl"
							>
								<FaTelegram />
							</a>
						</div>
					</div>
				</div>
				<ThemeToogle />
			</main>
		</>
	);
}
