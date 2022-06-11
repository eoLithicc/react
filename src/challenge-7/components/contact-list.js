import Contact from "./contact";
import cat1 from '../../media/cat1.jpg';
import cat2 from '../../media/cat2.jpg';
import cat3 from '../../media/cat3.jpg';
import cat4 from '../../media/cat4.jpg';
import './contact-list.css';

export default function ContactList() {
	return (
		<section className='contact-list'>
			<Contact
				img={ cat1 }
				name='Mr. Whiskerson'
				phone='(212) 555-1234'
				mail='mr.whiskerson@catnap.com'
			/>
			<Contact
				img={ cat2 }
				name='Buddy Meowson'
				phone='(212) 555-7890'
				mail='meowpuspus@catnap.com'
			/>
			<Contact
				img={ cat3 }
				name='Fluffy ball'
				phone='(212) 555-2468'
				mail='fluff@abv.bg'
			/>
			<Contact
				img={ cat4 }
				name='Trixy'
				phone='(212) 555-1357'
				mail='trixy@catidol.meow'
			/>
		</section>
	)
}
