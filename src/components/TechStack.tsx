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
} from "@/components/ui/tooltip"

function TechStack() {
	return (
		<div>
			<p className="font-bold text-xl text-center pb-3">tech stack</p>
			{/* logos in row */}
			<div className="flex flex-row gap-4">
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger asChild>
						<TbBrandCpp  size={40} />
					</TooltipTrigger>
					<TooltipContent>
						<p className="font-semibold">CPP</p>
					</TooltipContent>
				</Tooltip>
				<Tooltip>
					<TooltipTrigger asChild>
						<TbBrandCSharp size={40} className="ml-[-3px]"/>
					</TooltipTrigger>
					<TooltipContent>
						<p className="font-semibold">C#</p>
					</TooltipContent>
				</Tooltip>
				<Tooltip>
					<TooltipTrigger asChild>
						<SiUnrealengine size={40} />
					</TooltipTrigger>
					<TooltipContent>
						<p className="font-semibold">Unreal</p>
					</TooltipContent>
				</Tooltip>
				<Tooltip>
					<TooltipTrigger asChild>
						<SiUnity size={40} />
					</TooltipTrigger>
					<TooltipContent>
						<p className="font-semibold">Unity</p>
					</TooltipContent>
				</Tooltip>
				<Tooltip>
					<TooltipTrigger asChild>
						<SiOpengl size={60} className="mt-[-10px]" />
					</TooltipTrigger>
					<TooltipContent>
						<p className="font-semibold">OpenGL</p>
					</TooltipContent>
				</Tooltip>
				<Tooltip>
					<TooltipTrigger asChild>
						<SiPostgresql size={40} />
					</TooltipTrigger>
					<TooltipContent>
						<p className="font-semibold">PostgreSQL</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
			</div>
		</div>
	);
}

export default TechStack;
