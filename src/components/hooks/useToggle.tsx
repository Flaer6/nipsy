import { useCallback, useState } from 'react'

export default function useToggle(
	initialValue: boolean = false
): [boolean, () => void] {
	const [value, setValue] = useState<boolean>(initialValue)

	const toggle: () => void = useCallback(() => {
		setValue(prev => !prev)
	}, [])
	return [value, toggle]
}
