import facebook from '../../media/facebook.png';
import twitter from '../../media/twitter.png';
import instagram from '../../media/instagram.png';
import github from '../../media/github.png';

import './profile-footer.css';

export default function ProfileFooter() {
	return (
		<div className='profile--footer'>
			<img
				src={twitter}
				alt="twitter"
			/>
				<img
				src={facebook}
				alt="facebook"
			/>
				<img
				src={instagram}
				alt="instagram"
			/>
				<img
				src={github}
				alt="github"
			/>
		</div>
	)
}
