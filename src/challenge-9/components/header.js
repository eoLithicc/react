import './header.css';
import travel from '../../media/travel-icon.webp'

export default function Header() {
	return (
		<header>
			<img
				src={travel}
				alt=""
			/>
			<span>my travel journal.</span>
		</header>
	)
}
