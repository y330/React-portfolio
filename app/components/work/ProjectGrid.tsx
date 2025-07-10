import ProjectCard from "./ProjectCard";
import AnimatedDiv from "../../animations/AnimatedDiv"; // Replace with the correct path to the "Animated" component
import { projects, ProjectProps } from "./projectDetails";
import React from "react";

const ProjectGrid = () => {
    return (
        <>
            <div className="grid w-[90%] grid-cols-1 grid-rows-2 gap-y-10 gap-x-6 lg:max-w-[1200px] lg:grid-cols-1">
                {projects.map((project: ProjectProps) => (
                    <ProjectCard
                        id={project.id}
                        key={project.id}
                        name={project.name}
                        description={project.description}
                        date={project.date}
                        demo={project.demo}
                        images={project.images}
                        available={project.available}
                    />
                ))}
            </div>
        </>
    );
};

export default ProjectGrid;
