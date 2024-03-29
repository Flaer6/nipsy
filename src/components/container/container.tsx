import { ReactNode } from 'react'

export default function Container({ children }: { children: ReactNode }) {
	return (
		<div className='max-w-[1330px] mx-auto px-[15px] max-[400px]:px-[10px]'>
			{children}
		</div>
	)
}
