import './navbar.css';
import avatar from '../../media/avatar.jpg';

export default function Navbar() {
	return (
		<nav>
			<div className='logo'>
				<img
					src={avatar}
					alt="avatar"
				/>
				<h3>ReactFacts</h3>
			</div>

			<h4 className='extra-title'>React Course - Project 1</h4>
		</nav>
	)
}
