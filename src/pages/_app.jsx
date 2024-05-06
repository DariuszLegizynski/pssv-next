import "@/styles/globals.css"
import "@/styles/enchantments.css"
import "@/styles/typography.css"
import "@/styles/fonts.css"
import "@/styles/animations.css"
import "@/styles/components.css"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const MyApp = ({ Component, pageProps }) => {
	return <Component {...pageProps} />
}

export default MyApp

