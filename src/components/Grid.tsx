import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import {
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";

const Grid = () => {
    return (
        <section id="about">
            <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        className={item.className}
                        icon={item.icon}
                    />
                ))}
            </BentoGrid>
        </section>
    );
};

const HeaderImage = ({ src }: { src: string }) => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
        <img src={src} className="w-full h-full object-cover" alt="grid-image" />
    </div>
);

const items = [
    {
        title: "About Me",
        description: (
            <span className="text-sm">
                I am an entry-level Software Development Engineer passionate about technology and innovation.
                Currently pursuing my B.Tech in Computer Science & Engineering (IoT) at Ace Engineering College, Hyderabad.
            </span>
        ),
        header: <HeaderImage src="/about-me.png" />,
        className: "md:col-span-2",
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Education",
        description: (
            <span className="text-sm">
                B.Tech in Computer Science & Engineering (IoT)<br />
                Ace Engineering College<br />
                CGPA: 8.20(Current) | Pursuing
            </span>
        ),
        header: <HeaderImage src="/education.png" />,
        className: "md:col-span-1",
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Technical Skills",
        description: (
            <span className="text-sm">
                Java, Python, C++, JavaScript, React.js, Node.js, HTML, CSS, REST APIs, Git, VS Code, AWS (Basic).
            </span>
        ),
        header: <HeaderImage src="/tech-skills.png" />,
        className: "md:col-span-1",
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Core Competencies",
        description: (
            <span className="text-sm">
                Data Structures & Algorithms, OOP, Problem Solving.
            </span>
        ),
        header: <HeaderImage src="/core-competencies.png" />,
        className: "md:col-span-2",
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
];

export default Grid;
