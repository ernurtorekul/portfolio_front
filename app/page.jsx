import { Header } from './components/Header.jsx';
import About from './organism/About.jsx';
import Contact from './organism/Contact.jsx';
import { Footer } from './organism/Footer.jsx';
import Hero from './organism/Hero.jsx';
import Projects from './organism/Projects.jsx';

export default function Home() {

	return (
		<>
			<Header />
			<div className='flex flex-col gap-10'>
				<Hero />
				<About />
				<Projects />
				<Contact />
			</div>
			<Footer />
		</>
	);
}
