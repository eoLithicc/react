import profile from "../../media/heman.jpg";
import './profile-image.css';

export default function ProfileImage() {
	return (
		<img className='profile--picture'
			src={profile}
			alt="profile picture"
		/>
	)
}
