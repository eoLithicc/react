import './header.css'
import meme from '../../media/meme-logo.png'

export default function Header() {
	return (
		<header>
			<img
				src={ meme }
				alt="meme logo"
			/>
		</header>
	)
}
