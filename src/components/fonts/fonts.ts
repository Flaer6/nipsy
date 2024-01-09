import { Heebo, Inter, Kanit, Manrope, Rajdhani } from 'next/font/google'

export const inter = Inter({
	subsets: ['latin', 'cyrillic'],
	display: 'swap',
	variable: '--inter-font',
	weight: '700',
	style: 'normal',
})
export const manrope = Manrope({
	subsets: ['latin', 'cyrillic'],
	display: 'swap',
	variable: '--manrope-font',
	weight: ['400', '500', '600'],
	style: 'normal',
})
export const rajdhani = Rajdhani({
	subsets: ['latin'],
	display: 'swap',
	variable: '--rajdhani-font',
	weight: ['500', '600', '700'],
	style: 'normal',
})
export const heebo = Heebo({
	subsets: ['latin'],
	display: 'swap',
	variable: '--heebo-font',
	weight: ['400', '500'],
	style: 'normal',
})
export const kanit = Kanit({
	subsets: ['latin'],
	display: 'swap',
	variable: '--kanit-font',
	weight: '700',
	style: 'normal',
})
