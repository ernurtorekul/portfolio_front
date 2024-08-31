import '../globals.css';
import i18n from './i18n';

export const metadata = {
	title: 'Ernur | Front-end React `developer',
	description:
		'A Front-end React Developer based in Kazakhstan',
};

export default function RootLayout({ children }) {
	return (
		<html lang={i18n.language}>
			<body className={'min-h-screen antialiased grainy font-sans'}>
				{children}
			</body>
		</html>
	);
}
