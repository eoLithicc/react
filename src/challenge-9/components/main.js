import './main.css';
import Carousel from "./carousel";
import travelDestinations from '../data/data';

export default function Main() {
	return (
		<main>
			<Carousel items = { travelDestinations } />
		</main>
	)
}
