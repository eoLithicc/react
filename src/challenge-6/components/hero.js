import './hero.css';
import tileset from '../../media/tileset.png';

export default function Hero() {
	return (
		<section className='airbnb--hero'>
			<img
				src={tileset}
				alt="tileset images"
			/>
			<h1 className='airbnb--hero-title'>Online Experiences</h1>
			<p className='airbnb--hero--paragraph'>Join unique intereactive activities led by one-of-a-kind hosts - all without
			leaving home.</p>
		</section>
	)
}
