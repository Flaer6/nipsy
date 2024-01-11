import { useTranslations } from 'next-intl'
import Screen from '../screen'
import styles from './styles/promo.module.scss'

export default function Promo() {
	const t = useTranslations('Promo')
	return (
		<Screen>
			<div className={`${styles.wrapper}`}>
				<div className='flex justify-end items-center'>
					<h1 className='max-w-[765px] pt-[25%] max-[550px]:pt-[40%] max-[400px]:pt-[50%]'>
						{t.rich('title', {
							important: chunks => (
								<span className={styles.gradientText}>{chunks}</span>
							),
						})}
					</h1>
				</div>
			</div>
		</Screen>
	)
}
