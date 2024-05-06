import Link from "next/link"

// components
import Header from "@/components/Header"

const Main = () => {


	return (
		<article className="h-screen overflow-hidden bg-black bg-opacity-10">
			<section className="grid grid-rows-[2rem_1fr_2rem] items-center justify-items-center overflow-hidden h-screen w-screen p-2 relative z-10">
				<Header />
				<div className="grid grid-cols-[2rem_1fr_2rem] items-center justify-items-center h-full w-full">
					<Link
						className="rotate-[270deg] translate-y-1 fadeInFromLeft"
						href="/fotogallery"
					>
						<div className="h3 zoomIn">Zdjęcia</div>
					</Link>
					<div>
						<h1 className='absolute bottom-32 left-1/4 outlined-text text-[6rem] vertical-text sm:text-[7rem] md:text-[8rem] xl:text-[9rem]'>PSSV</h1>
					</div>
					
					<Link
						className="rotate-90 translate-y-2 fadeInFromRight"
						href="/news"
					>
						<div className="h3 zoomIn">Aktualności</div>
					</Link>
				</div>
				<footer className="grid grid-cols-[auto_auto] gap-x-8 items-center justify-self-center h-full sm:w-[60vw] fadeInFromBottom">
					<Link
						href="/about"
						className="fadeInFromBottom"
					>
						<div className="h3 zoomIn">O Nas</div>
					</Link>
					<Link
						href="/rules"
						className="justify-self-end fadeInFromBottom"
					>
						<div className="h3 zoomIn">Nasze zasady</div>
					</Link>
				</footer>
			</section>
			<video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
				<source src="video/Soldier-extended.mp4" type="video/mp4" />
			</video>
		</article>
	)
}

export default Main

