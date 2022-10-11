import "./main.css";
import img from "../../media/meme-logo.png";

export default function Main({ memes }) {
	let url;

	function getNewMeme() {
		console.log('am clicked');
		const random = Math.floor(Math.random() * 100);
		url          = memes[ random ].url;
		console.log(url);
	}

	return (
		<main>
			<div className="meme-texts">
				<input
					type="text"
					placeholder="Top text"
				/>
				<input
					type="text"
					placeholder="Bottom text"
				/>
			</div>
			<button
				className="meme-get-button"
				onClick={ getNewMeme }
			>Get a new meme image
			</button>
			<img
				className="the-meme"
				src={ url }
				alt="Random meme image"
			/>
		</main>
	);
}

// function greeting(name) {
// 	const date = new Date();
// 	const hours = date.getHours();
// 	let timeOfDay = '';
// 	if (hours >= 4 && hours <= 11) {
// 		timeOfDay = 'morning';
// 	}
// 	if (hours >= 12 && hours <= 17) {
// 		timeOfDay = 'afternoon';
// 	}
// 	if (hours >= 18 && hours <= 19) {
// 		timeOfDay = 'evening';
// 	}
// 	if (hours >= 20 && hours <= 3) {
// 		timeOfDay = 'night';
// 	}
// 	console.log(`Good ${timeOfDay}, ${name}!`);
// }
