import airbnb from '../../media/airbnbpng.png';
import './navbar.css';

export default function Navbar() {
	return (
		<nav className='airbnb--navbar'>
			<img
				src={airbnb}
				alt="airbnb"
			/>
		</nav>
	)
}
