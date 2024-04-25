import Link from "next/link"

// components
import Hero from "@/components/home/Hero"
import Header from "@/components/Header"

const Main = () => {
	return (
		<article className="relative size-screen overflow-hidden">
			<div className="absolute top-0 left-0 w-screen h-screen">
				<video
					autoPlay
					loop
					muted
					className="w-full h-full object-cover"
				>
					<source
						src="/video/white-smoke.mp4"
						type="video/mp4"
					/>
				</video>
			</div>
			<section className="p-2 grid grid-rows-[2rem_1fr_2rem] items-center justify-items-center overflow-hidden h-screen w-screen">
				<Header />
				<div className="grid grid-cols-[2rem_1fr_2rem] items-center justify-items-center h-full w-full">
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
				<footer className="grid grid-cols-[auto_auto] gap-x-8 items-center justify-self-center h-full sm:w-[60vw]">
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
			</section>
		</article>
	)
}

export default Main

