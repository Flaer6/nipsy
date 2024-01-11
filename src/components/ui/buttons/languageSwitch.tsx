'use client'
import useToggle from '@/components/hooks/useToggle'
import Link from 'next/link'
import { ReactNode } from 'react'
import styles from './buttons.module.scss'

export default function LanguageSwitch({ name }: { name: ReactNode }) {
	const [isDropdownOpen, toggleDropdown] = useToggle()

	const renderDropdownButtons = () => {
		const languages = ['en', 'ru']
		return languages.map(lang => (
			<Link
				key={lang}
				href={lang}
				onClick={toggleDropdown}
				className={styles.languageButton}
			>
				{lang}
			</Link>
		))
	}

	return (
		<div
			className={`relative z-10 max-[900px]:inline-flex max-[900px]:flex-col max-[900px]:gap-[11px] max-[900px]:my-[15px]`}
		>
			<button onClick={toggleDropdown} className={styles.languageButton}>
				{name}
			</button>
			{isDropdownOpen && (
				<div className='flex flex-col items-center gap-1 absolute top-[45px] left-0 max-[900px]:relative max-[900px]:top-0'>
					{renderDropdownButtons()}
				</div>
			)}
		</div>
	)
}
