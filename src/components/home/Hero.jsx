import { motion } from "framer-motion"
import Image from "next/image"

export const Hero = () => {
	return (
		<article className="hero w-[60vw] h-[60vh] flex flex-col p-3 text-white relative">
			<section className="z-10">
				<h1>
					Drogi
					<br />
					Przybyszu,
				</h1>
				<h3 className="py-3">witaj na stronie</h3>
				<h2>Domowego Kościoła</h2>
				<p>w Wiedniu</p>
			</section>
			<div className="absolute bottom-0 stripe h-[80vh] z-0 bg-black"></div>
			<section>
				<Image
					className="z-[1] w-auto h-auto"
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

