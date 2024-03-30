import '../globals.css';

export const metadata = {
	title: 'Ernur | Front-end React developer',
	description:
		'A passionate Front-end React Developer based in Taraz, Kazakhstan',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={'min-h-screen antialiased grainy font-sans'}>
				{children}
			</body>
		</html>
	);
}
