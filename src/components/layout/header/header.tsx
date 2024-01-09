import Container from '@/components/container/container'
import ContactUs from '@/components/ui/buttons/contactUsButton'
import Logo from '@/components/ui/logo/logo'
import Navigation from './navigation'

export default function Header() {
	return (
		<header>
			<Container>
				<div className='flex justify-between items-center py-[29px]'>
					<Logo size='text-[30px]' />
					<Navigation />
					<ContactUs />
				</div>
			</Container>
		</header>
	)
}
