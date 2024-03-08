export function Header() {
	return (
		<header className='flex h-20 px-20 justify-between items-center text-xl font-bold shadow-md group'>
			<h2 className='logo'>Bashkanitto</h2>
			<nav>
				<ul className='hidden lg:flex gap-5'>
					<li>
						<a href='#'>Home</a>
					</li>
					<li>
						<a href='#about'>About</a>
					</li>
					<li>
						<a href='#projects'>Project</a>
					</li>
					<li>
						<a href='#contact'>Contact</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
