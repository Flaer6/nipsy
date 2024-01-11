import { useTranslations } from 'next-intl'

export default function Navigation() {
	const t = useTranslations('Header')
	const keys = ['services', 'portfolio', 'bonuses', 'contacts'] as const
	return (
		<nav className='max-[900px]:hidden'>
			<ul className='flex items-center gap-[50px]'>
				{keys.map(key => (
					<li key={key}>
						<a
							href={t(`${key}.link`)}
							className='font-heebo capitalize transition-all hover:text-[#14F195] hover:border-b hover:border-b-[#43F272]'
						>
							{t(`${key}.text`)}
						</a>
					</li>
				))}
			</ul>
		</nav>
	)
}
