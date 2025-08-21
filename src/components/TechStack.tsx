"use client"

import React, { useState, useCallback } from "react"
import {
	SiUnrealengine,
	SiUnity,
	SiPostgresql,
	SiPython,
	SiCmake,
	SiHtml5,
	SiBlender,
	SiOpengl,
	SiCss3,
	SiGit, SiDocker, SiGo
} from "react-icons/si"

import { TbBrandCSharp, TbBrandCpp } from "react-icons/tb"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function TechStack() {
	const [openTooltip, setOpenTooltip] = useState<number | null>(null)

	const handleMouseEnter = useCallback((index: number) => {
		setOpenTooltip(index)
	}, [])

	const handleMouseLeave = useCallback(() => {
		setOpenTooltip(null)
	}, [])

	const handleTouchStart = useCallback((index: number) => {
		setOpenTooltip((prev) => (prev === index ? null : index))
	}, [])

	const techStack = [
		{ icon: SiGo, name: "Go", size: 40, voffset: "0px" },
		{ icon: TbBrandCpp, name: "C++", size: 40, voffset: "0px" },
		{ icon: TbBrandCSharp, name: "C#", size: 40, voffset: "0px" },
		{ icon: SiPostgresql, name: "PostgreSQL", size: 40, voffset: "0px" },
		{ icon: SiDocker, name: "Docker", size: 40, voffset: "0px" },
		{ icon: SiGit, name: "Git", size: 40, voffset: "0px" },
	]

	const familiarStack = [
		{ icon: SiPython, name: "Python", size: 40, voffset: "0px" },
		{ icon: SiCmake, name: "CMake", size: 40, voffset: "0px" },
		{ icon: SiHtml5, name: "HTML", size: 40, voffset: "0px" },
		{ icon: SiCss3, name: "CSS", size: 40, voffset: "0px" },
		{ icon: SiUnity, name: "Unity Engine", size: 40, voffset: "0px" },
		{ icon: SiUnrealengine, name: "Unreal Engine", size: 40, voffset: "0px" },
		{ icon: SiBlender, name: "Blender", size: 40, voffset: "0px" },
		{ icon: SiOpengl, name: "OpenGL", size: 60, voffset: "-10px" },
	]

	const maxLength = Math.max(techStack.length, familiarStack.length)

	return (
		<div className="space-y-3">
			<h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 text-center">tech stack</h2>
			<div className="flex flex-wrap gap-4 justify-center">
				<TooltipProvider>
					{techStack.map((tech, index) => (
						<Tooltip key={index + maxLength} open={openTooltip === index + maxLength}>
							<TooltipTrigger asChild>
								<div
									className="text-gray-600 transition-all duration-200 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 hover:scale-110"
									onMouseEnter={() => handleMouseEnter(index + maxLength)}
									onMouseLeave={handleMouseLeave}
									onTouchStart={() => handleTouchStart(index + maxLength)}
								>
									<tech.icon size={tech.size} style={{ marginTop: tech.voffset }} />
								</div>
							</TooltipTrigger>
							<TooltipContent className="border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800">
								<p className="text-sm font-medium text-gray-700 dark:text-gray-200">{tech.name}</p>
							</TooltipContent>
						</Tooltip>
					))}
				</TooltipProvider>
			</div>
			<div className="space-y-3 pt-1">
				<h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 text-center">
					also familiar with
				</h3>
				<div className="flex flex-wrap justify-center gap-4">
					<TooltipProvider>
						{familiarStack.map((tech, index) => (
							<Tooltip key={index} open={openTooltip === index}>
								<TooltipTrigger asChild>
									<div
										className="text-gray-600 transition-all duration-200 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 hover:scale-110"
										onMouseEnter={() => handleMouseEnter(index)}
										onMouseLeave={handleMouseLeave}
										onTouchStart={() => handleTouchStart(index)}
									>
										<tech.icon size={tech.size} style={{ marginTop: tech.voffset }} />
									</div>
								</TooltipTrigger>
								<TooltipContent className="border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800">
									<p className="text-sm font-medium text-gray-700 dark:text-gray-200">{tech.name}</p>
								</TooltipContent>
							</Tooltip>
						))}
					</TooltipProvider>
				</div>
			</div>
		</div>
	)
}
