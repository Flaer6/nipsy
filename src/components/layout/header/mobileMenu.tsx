import ContactUs from '@/components/ui/buttons/contactUsButton'
import LanguageSwitch from '@/components/ui/buttons/languageSwitch'
import styles from './header.module.scss'

interface MenuItem {
	link: string
	text: string
}
interface IProps {
	className?: string
	lang: string
	contactUs: string
	menuItems: MenuItem[]
}

export default function MobileMenu({
	className,
	lang,
	contactUs,
	menuItems,
}: IProps) {
	return (
		<nav
			className={`min-[900px]:hidden ${className} absolute top-0 right-0 ${styles.menuMobile} min-h-screen flex flex-col justify-between transition-transform origin-right`}
		>
			<ul className='flex flex-col items-start gap-[20px] pt-[55px]'>
				{menuItems.map((item, index) => (
					<li key={index}>
						<a
							href={item.link}
							className='font-heebo capitalize transition-all hover:text-[#14F195] hover:border-b hover:border-b-[#43F272] py-[3px] z-20'
						>
							{item.text}
						</a>
					</li>
				))}
			</ul>
			<div className=''>
				<LanguageSwitch name={lang} />
				<ContactUs contactUs={contactUs} />
			</div>
		</nav>
	)
}
