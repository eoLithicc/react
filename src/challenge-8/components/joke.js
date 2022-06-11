import './joke.css';

export default function Joke({setup, punchline}) {
	return (
		<div className='joke'>
			{
				setup &&
				<div>
					<h1 className='joke-setup'>
						{setup}
					</h1>
					<hr/>
				</div>
			}
			<h1 className='joke-punchline'>
				{punchline}
			</h1>
		</div>
	);
}
