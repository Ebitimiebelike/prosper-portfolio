"use client";

import Reveal from "./Reveal";

import TechCard from "./TechCard";

import {

SiNextdotjs,

SiReact,

SiTypescript,

SiTailwindcss,

SiSpringboot,

SiGo,

SiNodedotjs,

SiMongodb,

SiMysql,

SiGit,

SiGithub,

SiPostman,

} from "react-icons/si";

const techs=[

{
icon:SiNextdotjs,
title:"Next.js",
description:"Building lightning-fast production applications.",
color:"text-zinc-950 dark:text-white",
},

{
icon:SiReact,
title:"React",
description:"Modern UI with reusable components.",
color:"text-cyan-400",
},

{
icon:SiTypescript,
title:"TypeScript",
description:"Scalable type-safe applications.",
color:"text-blue-500",
},

{
icon:SiTailwindcss,
title:"Tailwind CSS",
description:"Rapid UI development.",
color:"text-sky-400",
},

{
icon:SiSpringboot,
title:"Spring Boot",
description:"Enterprise backend APIs.",
color:"text-green-500",
},

{
icon:SiGo,
title:"Go",
description:"Fast concurrent backend services.",
color:"text-cyan-500",
},

{
icon:SiNodedotjs,
title:"Node.js",
description:"REST APIs and scalable servers.",
color:"text-green-400",
},

{
icon:SiMongodb,
title:"MongoDB",
description:"NoSQL database.",
color:"text-green-500",
},

{
icon:SiMysql,
title:"MySQL",
description:"Relational databases.",
color:"text-blue-400",
},

{
icon:SiGit,
title:"Git",
description:"Version control.",
color:"text-orange-500",
},

{
icon:SiGithub,
title:"GitHub",
description:"Collaboration & CI.",
color:"text-zinc-950 dark:text-white",
},

{
icon:SiPostman,
title:"Postman",
description:"API testing.",
color:"text-orange-400",
},

];

export default function TechArsenal(){

return(

<section
id="skills"
className="py-32"
>

<div className="mx-auto max-w-7xl px-6">

<Reveal>

<h2 className="text-center text-5xl font-black text-zinc-950 dark:text-white">

Tech Arsenal

</h2>

<p className="mx-auto mt-6 max-w-2xl text-center text-zinc-500 dark:text-zinc-400">

The technologies I use to design, build, test and deploy modern web applications.

</p>

</Reveal>

<div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

{

techs.map((tech,index)=>(

<Reveal
key={tech.title}
delay={index*.08}
>

<TechCard

{...tech}

/>

</Reveal>

))

}

</div>

</div>

</section>

)

}