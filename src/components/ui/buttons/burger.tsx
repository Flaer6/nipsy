'use client'
import useToggle from '@/components/hooks/useToggle'
import MobileMenu from '@/components/layout/header/mobileMenu'
import styles from './buttons.module.scss'

interface IProps {
	lang: string
	contactUs: string
	menuItems: { link: string; text: string }[]
}

function Burger({ lang, contactUs, menuItems }: IProps) {
	const [isToggled, toggle] = useToggle()
	return (
		<div>
			<button
				onClick={toggle}
				className={`${styles.burger} ${isToggled ? styles.burgerClose : ''}`}
			>
				<span className={`${isToggled ? 'scale-0' : 'scale-100'}`}></span>
				<span className={`${isToggled ? 'rotate-45' : 'rotate-0'}`}></span>
				<span className={`${isToggled ? '-rotate-45' : '-rotate-0'}`}></span>
				<span className={`${isToggled ? 'scale-0' : 'scale-100'}`}></span>
			</button>
			<MobileMenu
				lang={lang}
				contactUs={contactUs}
				className={`${isToggled ? 'scale-x-1' : 'scale-x-0'}`}
				menuItems={menuItems}
			/>
		</div>
	)
}

export default Burger
