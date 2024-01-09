import { heebo, kanit, manrope } from '@/components/fonts/fonts'
import Header from '@/components/layout/header/header'
import type { Metadata } from 'next'
import './globals.scss'
// Speedy Regular, Proxima Nova Bold

export const metadata: Metadata = {
	title: 'Nipsy',
	description: 'Студия создания и продвижения мобильных приложений',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang='ru'
			className={`${manrope.variable} ${kanit.variable} ${heebo.variable}`}
		>
			<body className={manrope.className}>
				<Header />
				{children}
			</body>
		</html>
	)
}
