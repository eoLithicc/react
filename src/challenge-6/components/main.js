import Experiences from "./experiences";
import Hero from "./hero";
import './main.css';
import { experiencesData } from "../data/experienceData";

export default function Main() {
	return (
		<div className='airbnb--main'>
			<Hero />
			<Experiences experiences = { experiencesData }/>
		</div>
	)
}
