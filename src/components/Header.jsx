import Link from "next/link"

import Logo from "@/components/home/Logo"

const Header = () => {
	return (
		<header className="grid grid-cols-1 w-full h-12 z-10 backdrop-blur-md">
			<section className="max-w-[62rem] grid grid-cols-[auto_auto] gap-x-32 items-center justify-self-center h-12 fadeInFromTop">
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

