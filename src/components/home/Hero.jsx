import { motion } from "framer-motion"
import Image from "next/image"

export const Hero = () => {
	return (
		<motion.article className="flex w-[60vw] flex-col text-white relative">
			{/* <section className="z-10">
				<h1>
					Drogi
					<br />
					Przybyszu,
				</h1>
				<h3 className="py-3">witaj na stronie</h3>
				<h2>Domowego Kościoła</h2>
				<p>w Wiedniu</p>
			</section> */}
			<section>
				<motion.div
					className="h-[60vh]"
					initial={{ width: "0" }}
					animate={{ width: "28vh" }}
					transition={{ type: "spring", duration: 6 }}
				>
					<div className="border-black border-[1.4rem] relative z-10 h-full w-full" />
				</motion.div>
				<Image
					className="z-20 w-full h-auto flex flex-col absolute top-1/4 left-1"
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

