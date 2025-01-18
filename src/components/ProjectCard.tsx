import * as React from "react";
import { ProjectCardProps } from "../app/types";

export const ProjectCard: React.FC<ProjectCardProps> = ({
  number,
  title,
  description,
  linkText,
  linkHref,
  imageSrc,
  imageAlt
}) => {
  return (
    <article className="mt-28 max-md:mt-10 max-md:mr-1 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[34%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow text-lg font-medium tracking-tight leading-none text-neutral-900 max-md:mt-10">
            <h2 className="max-md:mr-2.5">
              {number} / {title}
            </h2>
            <p className="mt-7 leading-6">
              {description}
            </p>
            <a 
              href={linkHref}
              className="self-start mt-44 underline decoration-auto decoration-solid underline-offset-auto max-md:mt-10 focus:ring-2 focus:ring-blue-500 hover:text-blue-600 transition-colors"
              aria-label={`View more details about ${title}`}
            >
              {linkText}
            </a>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[66%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={imageSrc}
            alt={imageAlt}
            className="object-contain grow w-full aspect-[1.75] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </article>
  );
};