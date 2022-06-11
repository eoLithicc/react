import phoneImage from '../../media/phone-icon.jpg';
import mailImage from '../../media/email.png';
import './contact.css';

export default function Contact({ img, name, phone, mail }) {
	return (
		<div className='contact-card'>
			<img className='info-pic'
				src={ img }
				alt="cute cat"
			/>
			<h3>{ name }</h3>
			<div className='info-group'>
				<img
					src={phoneImage}
					alt="phone icon"
				/>
				<p>{ phone }</p>
			</div>
			<div className='info-group'>
				<img
					src={mailImage}
					alt="mail icon"
				/>
				<p>{ mail }</p>
			</div>
		</div>
	)
}
