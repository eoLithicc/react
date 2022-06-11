import './app.css'
import Joke from "./components/joke";

export default function App() {
	const jokes = [
		{
			setup: 'I got my daughter a fridge for her birthday.',
			punchline: 'I can\'t wait to see her face light up when she opens it',
		},
		{
			setup: 'How did the hacker escape the police?',
			punchline: 'He just ransomware!',
		},
		{
			setup: 'Why don\'t pirates travel on mountain roads?',
			punchline: 'Scurvy',
		},
		{
			setup: 'Why do bees stay in the hive in the winter?',
			punchline: 'Swarm',
		},
		{
			setup: 'What\'s the best thing about Switzerland?',
			punchline: 'I don\'t know, but the flag is a big plus!',
		},
		{
			setup: '',
			punchline: 'It is hard to explaing puns to kleptomaniacs because they take things literally',
		},
	];
	const jokeElements = jokes.map((joke) => {
		return (
			<Joke
				setup={joke.setup}
				punchline={joke.punchline}
			/>
		)
	})

	return (
		<div className='jokes-container'>
			{jokeElements}
		</div>
	);
}
