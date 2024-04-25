import { motion } from "framer-motion"
import Image from "next/image"

export const Hero = () => {
	return (
		<article className="hero w-[60vw] h-[60vh] flex flex-col items-center p-3 text-white">
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

			<section className="flex flex-col items-center h-full justify-center relative">
				<motion.div
					className="absolute top-0 -left-6 w-[36vw] z-0 border-black border-[3rem]"
					initial={{ height: 0, width: 0, opacity: 0.5 }}
					animate={{ height: "30vw", width: "36vw", opacity: 1 }}
					transition={{ type: "spring", duration: 6 }}
				></motion.div>
				<Image
					className="z-1 w-auto h-auto relative"
					src="/images/marriage.png"
					alt="image of a couple in love"
					width={640}
					height={480}
				/>
			</section>
		</article>
	)
}

export default Hero

