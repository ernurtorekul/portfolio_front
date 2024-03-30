import Image from 'next/image';

export function Header() {
	return (
		<header className='flex h-20 px-20 justify-between items-center text-xl font-bold shadow-md group'>
			<a
				href='#'
				className='logo flex items-center text-2xl tracking-wide gap-[2px]'
			>
				{/* <Image src='/logo.png' alt='logo' width={40} height={50} /> */}
				Ernur
			</a>
			<nav>
				<ul className='hidden lg:flex gap-5 font-normal h-[40px] items-center'>
					<a href='#'>Home</a>
					<a href='#about'>About</a>
					<a href='#projects'>Project</a>
					<a href='#contact'>Contact</a>
				</ul>
			</nav>
		</header>
	);
}
