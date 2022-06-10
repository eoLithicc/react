import avatar from '../media/avatar.jpg';
import MyReasons from "../challenge-2/my-reasons";
import './challenge-3.css';

function Header() {
	return (
		<header>
			<nav>
				<img
					src={avatar}
					alt="avatar"
					width={100}
				/>
				<ul className="nav-items">
					<li>Pricing</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</nav>
		</header>
	)
}

function Footer () {
	return (
		<footer>
			There is some arbitrary text here that claims all rights are reserved.
		</footer>
	)
}

function BasicLayout () {
	return (
		<div>
			<Header/>
			<MyReasons/>
			<Footer/>
		</div>
	)
}

export default BasicLayout;
