import {
	SiUnrealengine,
	SiUnity,
	SiPostgresql,
	SiOpengl
} from "react-icons/si";
import {
	TbBrandCSharp,
	TbBrandCpp
} from "react-icons/tb";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function TechStack() {
	return (
		<div className="space-y-3">
			<h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
				Tech Stack
			</h2>
			<div className="flex flex-wrap gap-4">
				<TooltipProvider>
					{[
						{ icon: TbBrandCpp, name: "C++", size: 40, voffset: "0px" },
						{ icon: TbBrandCSharp, name: "C#", size: 40, voffset: "0px" },
						{ icon: SiUnrealengine, name: "Unreal Engine", size: 40, voffset: "0px" },
						{ icon: SiUnity, name: "Unity Engine", size: 40, voffset: "0px" },
						{ icon: SiOpengl, name: "OpenGL", size: 60, voffset: "-10px" },
						{ icon: SiPostgresql, name: "PostgreSQL", size: 40, voffset: "0px" },
					].map((tech, index) => (
						<Tooltip key={index}>
							<TooltipTrigger asChild>
								<div className="text-gray-600 transition-all duration-200 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 hover:scale-110">
									<tech.icon size={tech.size} className={"mt-[" + tech.voffset + "]"} />
								</div>
							</TooltipTrigger>
							<TooltipContent className="border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800">
								<p className="text-sm font-medium text-gray-700 dark:text-gray-200">
									{tech.name}
								</p>
							</TooltipContent>
						</Tooltip>
					))}
				</TooltipProvider>
			</div>
		</div>
	);
}
