import './destination.css'
import pinIcon from '../../media/pin-icon.webp'

export default function Destination({ data }) {
	const { title, location, googleMapsUrl, startDate, endDate, description,  imageUrl} = data;
	return (
		<div className='destination-card'>
			<img className='destination-card--image'
				src={ imageUrl }
				alt="some picture for cuteness"
			/>

			<div className='destination-card--info'>
				<div className='destination-card--info--coordinates'>
					<span className='country'>
						<img className='pin-icon'
							src={pinIcon}
							alt=""
						/>{ location }</span>
					<a href={googleMapsUrl} target='_blank' className='googleMapsPin'>View on Google Maps</a>
				</div>

				<h1 className='destination-card--info--title'>{ title }</h1>

				<div className='destination-card--info--travel-period'>
					<span className='start-date'>{ startDate }</span>
					<span> - </span>
					<span className='end-date'>{ endDate }</span>
				</div>

				<p className='destination-card--info--description'>{ description }</p>
			</div>
		</div>
	)
}
