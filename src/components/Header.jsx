import Link from "next/link"

import Logo from "@/components/home/Logo"
import IntroButton from "@/components/home/IntroButton"

const Header = () => {
	return (
		<header className="grid grid-cols-[auto_auto] gap-x-8 w-full h-12 z-10 backdrop-blur-md">
			<section className="max-w-[62rem] grid grid-cols-[1fr_auto_1fr] h-12 items-center justify-items-center px-4 mx-auto fadeInFromTop">
				<Logo />
				<Link
					className={`text-white justify-self-end`}
					href="/contact"
				>
					<h3 className="transition-transform duration-400 ease-in-out transform hover:scale-110 focus:scale-110">
						Kontakt
					</h3>
				</Link>
			</section>
		</header>
	)
}

export default Header

