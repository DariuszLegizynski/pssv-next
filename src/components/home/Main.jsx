import Link from "next/link"

// components
import Hero from "@/components/home/Hero"
import Header from "@/components/Header"

const Main = () => {
	return (
		<article className="relative grid grid-rows-[1fr_auto] w-full h-svh p-[0.4rem] overflow-hidden">
			<div
				className={`absolute top-0 left-0 h-0 w-0 transition-height duration-500 ease-in-out transition-width delay-500`}
			/>
			<Header />
			<div className="grid grid-cols-[2rem_1fr_2rem] items-center justify-items-center">
				<Link
					className="rotate-[270deg] translate-y-1"
					href="/fotogallery"
				>
					<h3 className="before:content-['Zd'] before:text-white after:content-['jęcia'] after:text-white fadeInFromTop" />
				</Link>

				<section>
					<Link href="/about">
						<Hero />
					</Link>
				</section>

				<Link
					className="rotate-90 translate-y-2 fadeInFromRight"
					href="/news"
				>
					<h3 className="before:content-['Aktual'] before:text-white after:content-['ności'] after:text-white" />
				</Link>
			</div>
			<footer className="grid grid-cols-[auto_auto] gap-x-8 items-center justify-self-center sm:w-[60vw]">
				<Link
					href="/about"
					className="fadeInFromBottom"
				>
					<h3>O Nas</h3>
				</Link>
				<Link
					href="/rules"
					className="justify-self-end fadeInFromBottom"
				>
					<h3>Nasze zasady</h3>
				</Link>
			</footer>
		</article>
	)
}

export default Main

