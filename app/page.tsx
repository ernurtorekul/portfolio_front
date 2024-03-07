import { Header } from './components/Header';
import About from './organism/About.jsx';
import Contact from './organism/Contact';
import { Footer } from './organism/Footer';
import Hero from './organism/Hero.jsx';
import Projects from './organism/Projects';

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
