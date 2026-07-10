"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface Props{
icon:IconType;
title:string;
description:string;
color:string;
}

export default function TechCard({
icon:Icon,
title,
description,
color,
}:Props){

return(

<motion.div

whileHover={{
y:-12,
scale:1.03,
}}

className="rounded-3xl border border-slate-200/70 bg-slate-50/80 p-8 backdrop-blur-xl transition duration-300 dark:border-white/10 dark:bg-white/5"

>

<div

className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl text-4xl ${color}`}

>

<Icon/>

</div>

<h3 className="text-xl font-bold text-zinc-950 dark:text-white">

{title}

</h3>

<p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-400">

{description}

</p>

</motion.div>

)

}