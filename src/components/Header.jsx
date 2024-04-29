import Link from "next/link"

import Logo from "@/components/home/Logo"

const Header = () => {
	return (
		<header className="grid grid-cols-[auto_auto] gap-x-24 items-center justify-self-center sm:w-[60vw] h-12 fadeInFromTop">
			<Logo />
			<Link
				className={`text-white justify-self-end`}
				href="/contact"
			>
				<h3 className="transition-transform duration-400 ease-in-out transform hover:scale-110 focus:scale-110">
					Kontakt
				</h3>
			</Link>
		</header>
	)
}

export default Header

