import { motion } from "framer-motion"
import Image from "next/image"

export const Hero = () => {
	return (
		<Image
			className="w-screen h-screen"
			src="/images/soldier/hizir-kaya-0q90Mumo-xE-unsplash.jpg"
			alt="soldier standing still"
			width={640}
			height={480}
		/>
	)
}

export default Hero

