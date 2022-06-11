import './card.css';
import starIcon from '../../media/star-icon.png';

export default function Card({ img, stats, country, title, price, openSpots, location }) {
	let badgeText = '';
	if (location === 'Online') {
		badgeText = 'ONLINE';
	}
	if (openSpots === 0) {
		badgeText = 'SOLD OUT';
	}

	return (
		<div className='airbnb--card'>
			{
				badgeText &&
				<div className="airbnb--card--badge">{badgeText}</div>
			}
			<img className='airbnb--card-image'
				src={ img }
				alt="some image name"
			/>
			<span className='airbnb--card--rating  gray'>
				<img
					src={starIcon}
					alt=""
				/>{ stats.rating } { stats.reviewCount } - { country }</span>
			<span className='airbnb--card--title gray'>{ title }</span>
			<span className='airbnb--card--pricing gray'><strong>From ${ price }</strong> / person</span>
		</div>
	)
}
