import Link from 'next/link'

export default function Logo({ size }: { size: string }) {
	return (
		<Link href='/' className={`font-bold uppercase font-kanit ${size}`}>
			nipsy
		</Link>
	)
}
