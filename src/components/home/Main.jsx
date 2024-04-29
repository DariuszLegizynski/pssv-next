import Link from "next/link"

// components
import Hero from "@/components/home/Hero"
import Header from "@/components/Header"

const Main = () => {
	return (
		<article className="h-screen hero-bg-image overflow-hidden bg-black bg-opacity-10">
			<section className="grid grid-rows-[2rem_1fr_2rem] items-center justify-items-center overflow-hidden h-screen w-screen p-2 relative z-10">
				<Header />
				<div className="grid grid-cols-[2rem_1fr_2rem] items-center justify-items-center h-full w-full">
					<Link
						className="rotate-[270deg] translate-y-1 fadeInFromLeft"
						href="/fotogallery"
					>
						<h3 className="before:content-['Zd'] before:text-white after:content-['jęcia'] after:text-white" />
					</Link>

					{/* <section>
						<Link href="/about">
							<Hero />
						</Link>
					</section> */}
					<div />
					<Link
						className="rotate-90 translate-y-2 fadeInFromRight"
						href="/news"
					>
						<h3 className="before:content-['Aktual'] before:text-white after:content-['ności'] after:text-white" />
					</Link>
				</div>
				<footer className="grid grid-cols-[auto_auto] gap-x-8 items-center justify-self-center h-full sm:w-[60vw] fadeInFromBottom">
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

