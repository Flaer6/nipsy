import Container from '@/components/container/container'
import Burger from '@/components/ui/buttons/burger'
import ContactUs from '@/components/ui/buttons/contactUsButton'
import LanguageSwitch from '@/components/ui/buttons/languageSwitch'
import Logo from '@/components/ui/logo/logo'
import { useTranslations } from 'next-intl'
import Navigation from './navigation'

export default function Header() {
	const t = useTranslations('Header')
	const keys: any = ['services', 'portfolio', 'bonuses', 'contacts']

	const getNavItem = (key: keyof typeof t) => ({
		link: t(`${key}.link`),
		text: t(`${key}.text`),
	})

	const navItems = keys.map(getNavItem)

	return (
		<header className='fixed top-0 left-0 right-0 z-10'>
			<Container>
				<div className='flex justify-between items-center py-[29px]'>
					<Logo size='text-[30px]' />
					<Navigation />
					<Burger
						lang={t('language')}
						contactUs={t('contactUs')}
						menuItems={navItems}
					/>
					<div className='flex items-center gap-6 max-[900px]:hidden'>
						<LanguageSwitch name={t('language')} />
						<ContactUs contactUs={t('contactUs')} />
					</div>
				</div>
			</Container>
		</header>
	)
}
