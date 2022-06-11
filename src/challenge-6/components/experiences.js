import './experiences.css';
import Card from "./card";

export default function Experiences({ experiences }) {
	const cardItems = experiences.map((experience, index) => {
		return (
			<Card
				key = { experience.id }
				{ ...experience }
			/>
		);
	})

	return (
		<section className='airbnb--experiences'>
			{ cardItems }
		</section>
	)
}
