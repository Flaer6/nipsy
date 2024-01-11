import Container from '../container/container'

interface IScreen {
	children: React.ReactNode
	className?: string
}

export default function Screen({ children, className }: IScreen) {
	return (
		<section className='relative'>
			<Container>{children}</Container>
		</section>
	)
}
