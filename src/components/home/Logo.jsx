import Link from "next/link"

import IconItems from "../IconItems"

const Logo = () => {
	return (
		<Link
			href="/"
			className="w-full"
		>
			<IconItems
				fillColor="white"
				type="logo"
				width="2rem"
				height="2rem"
			/>
		</Link>
	)
}

export default Logo

