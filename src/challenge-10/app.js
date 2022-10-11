import "./app.css";
import Header from "./components/header";
import Main from "./components/main";
import data from './data/data';

export default function App() {
	const memes = async () => {
		const response = await fetch(
			"https://api.imgflip.com/get_memes",
			{
				method: "GET",
				mode:   "cors",
			},
		);

		if (response.ok) {
			const data = response.json();
			return Promise.resolve(data);
		} else {
			return Promise.reject("Failed");
		}
	};

	memes()
		.then((response) => {
			console.log(response.data.memes);
		})
		.catch((error) => {
			console.log(error);
		});

	return (
		<div>
			<Header/>
			<Main memes={ data.data.memes }/>
		</div>
	);
}
