import Screen from '../screen'
import styles from './styles/promo.module.scss'

export default function Promo() {
	return (
		<Screen>
			<div className={`${styles.wrapper}`}>
				<div className='flex justify-end items-center'>
					<h1 className='max-w-[765px] pt-[15%]'>
						Студия{' '}
						<span className={styles.gradientText}>создания и продвижения</span>{' '}
						мобильных приложений
					</h1>
				</div>
			</div>
		</Screen>
	)
}
