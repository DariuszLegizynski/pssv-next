import { motion } from "framer-motion"
import Image from "next/image"

export const Hero = () => {
	return (
		<article className="w-[60vw] h-[60vh] grid grid-cols-1 grid-rows-1 justify-items-center md:justify-items-end">
			{/* <section className="z-10">
				<h1>Hero</h1>
			</section> */}
			<motion.div
				className="grid-row-1 grid-col-1 h-[55.6vh] max-w-[140px] md:max-w-[60%] border-black border-[1.8rem] z-10"
				initial={{ width: 0 }}
				animate={{ width: "100%" }}
				transition={{ type: "spring", duration: 6 }}
			></motion.div>
			<Image
				className="grid-row-1 grid-col-1 z-20 max-h-[504px] max-w-[190px] w-full justify-self-center self-center block md:hidden"
				src="/images/soldier/hizir-kaya-soldier.png"
				alt="soldier standing still"
				width={640}
				height={480}
			/>
			<Image
				className="grid-row-1 grid-col-1 z-20 max-h-[760px] max-w-[100%] w-full self-end pr-[1.8rem] hidden md:block"
				src="/images/soldier/soldier-1.png"
				alt="soldier pointing a gun in the far left"
				width={640}
				height={480}
			/>
		</article>
	)
}

export default Hero

