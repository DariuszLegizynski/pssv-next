import { motion } from "framer-motion"
import Image from "next/image"

export const Hero = () => {
	return (
		<article className="w-[60vw] h-[60vh] relative">
			{/* <section className="z-10">
				<h1>Hero</h1>
			</section> */}
			<motion.div
				className="flex flex-col items-center h-[60vh] max-w-[70%] border-black border-[1.8rem] z-10 absolute right-0"
				initial={{ width: "0" }}
				animate={{ width: "100%" }}
				transition={{ type: "spring", duration: 6 }}
			></motion.div>
			<Image
				className="absolute z-20 w-full h-auto -top-4 right-7"
				src="/images/soldier/soldier-1.png"
				alt="image of a couple in love"
				width={640}
				height={480}
			/>
		</article>
	)
}

export default Hero

