import './container.css';
import About from "./about";
import Contacts from "./contacts";
import Interests from "./interests";
import ProfileCard from "./profile-card";
import ProfileFooter from "./profile-footer";
import ProfileImage from "./profile-image";

export default function Container() {
	return (
		<div className='container'>
			<ProfileImage />
			<ProfileCard/>
			<Contacts/>
			<About/>
			<Interests/>
			<ProfileFooter/>
		</div>
	)
}
