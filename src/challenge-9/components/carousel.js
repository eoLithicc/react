import './carousel.css'
import Destination from "./destination";

export default function Carousel({ items }) {
	const destinations = items.map((destination) => {
		return <Destination data = {destination} />;
	})
	return (
		<div className='carousel'>
			{ destinations }
		</div>
	)
}
