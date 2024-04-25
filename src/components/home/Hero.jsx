import { motion } from "framer-motion"
import Image from "next/image"

export const Hero = () => {
	return (
		<motion.article className="w-[60vw] h-full relative">
			{/* <section className="z-10">
				<h1>Hero</h1>
			</section> */}
			<section
				className="flex flex-col items-center h-[60vh] max-w-[22rem] border-black border-[1.4rem] z-10 mx-auto"
				initial={{ width: "0" }}
				animate={{ width: "100%" }}
				transition={{ type: "spring", duration: 6 }}
			>
				<Image
					className="absolute z-20 w-96 h-auto top-1/3"
					src="/images/marriage.png"
					alt="image of a couple in love"
					width={640}
					height={480}
				/>
			</section>
		</motion.article>
	)
}

export default Hero

