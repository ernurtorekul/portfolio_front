import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
	return (
		<footer
			id='contact'
			className='flex h-20 px-20 bg-black justify-between items-center text-white text-xl font-bold shadow-md group'
		>
			<h2 className='logo'>Ernur</h2>
			<nav>
				<ul className='hidden md:flex gap-5 text-white'>
					<a href='https://github.com/bashkanitto'>
						<Github />
					</a>
					<a href='https://www.linkedin.com/in/aidyn-meiramkhanuly-1b900626a/'>
						<Linkedin />
					</a>
					<a href=''>
						<Mail />
					</a>
				</ul>
			</nav>
		</footer>
	);
}
