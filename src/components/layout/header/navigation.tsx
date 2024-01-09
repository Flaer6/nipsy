import { linksList } from './links.data'

export default function Navigation() {
	return (
		<nav>
			<ul className='flex items-center gap-[50px]'>
				{linksList.map(item => (
					<li key={item.link}>
						<a
							href={item.link}
							className='font-heebo capitalize transition-all hover:text-[#14F195] hover:border-b hover:border-b-[#43F272]'
						>
							{item.text}
						</a>
					</li>
				))}
			</ul>
		</nav>
	)
}
