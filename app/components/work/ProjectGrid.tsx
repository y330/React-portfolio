import ProjectCard from "./ProjectCard";
import AnimatedDiv from "../../animations/AnimatedDiv"; // Replace with the correct path to the "Animated" component
import { projects, ProjectProps } from "./projectDetails";
import React from "react";

const ProjectGrid = () => {
    return (
        <>
            <div className="flex flex-col w-[90%] gap-y-10 lg:max-w-[1200px]">
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
