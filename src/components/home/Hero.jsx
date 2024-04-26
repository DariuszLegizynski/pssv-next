import { motion } from "framer-motion"
import Image from "next/image"

export const Hero = () => {
	return (
		<article className="w-[60vw] h-[60vh] grid grid-cols-1 grid-rows-1 justify-items-end">
			{/* <section className="z-10">
				<h1>Hero</h1>
			</section> */}
			<motion.div
				className="grid-row-1 grid-col-1 h-[55.6vh] max-w-[60%] border-black border-[1.8rem] z-10"
				initial={{ width: 0 }}
				animate={{ width: "100%" }}
				transition={{ type: "spring", duration: 6 }}
			></motion.div>
			<Image
				className="grid-row-1 grid-col-1 z-20 w-full h-auto self-end pr-[1.8rem]"
				src="/images/soldier/soldier-1.png"
				alt="image of a couple in love"
				width={640}
				height={480}
			/>
		</article>
	)
}

export default Hero

