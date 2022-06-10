import Experiences from "./experiences";
import Hero from "./hero";
import './main.css';

export default function Main() {
	return (
		<div className='airbnb--main'>
			<Hero />
			<Experiences/>
		</div>
	)
}
