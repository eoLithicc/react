import './card.css';
import card1 from '../../media/card1.png';
import starIcon from '../../media/star-icon.png';

export default function Card() {
	return (
		<div className='airbnb--card'>
			<img
				src={card1}
				alt="some image name"
			/>
			<span className='airbnb--card--rating  gray'>
				<img
					src={starIcon}
					alt=""
				/>5.0 (6) - USA</span>
			<span className='airbnb--card--title gray'>Life lessons with Katie Zaferes</span>
			<span className='airbnb--card--pricing gray'><strong>From $136</strong> / person</span>
		</div>
	)
}
