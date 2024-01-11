import styles from './buttons.module.scss'

export default function ContactUs({ contactUs }: { contactUs: string }) {
	return (
		<a href='#' className={styles.contactUs}>
			{contactUs}
		</a>
	)
}
