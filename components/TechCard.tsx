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

className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition"

>

<div

className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl text-4xl ${color}`}

>

<Icon/>

</div>

<h3 className="text-xl font-bold">

{title}

</h3>

<p className="mt-3 leading-7 text-zinc-400">

{description}

</p>

</motion.div>

)

}