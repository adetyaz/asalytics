import { FC } from 'react'
import { Button } from '../Button/Button'
import { Logo } from '../Logo/Logo'

export const NavBar: FC = () => {
	return (
		<nav>
			<Logo />
			<Button />
		</nav>
	)
}
