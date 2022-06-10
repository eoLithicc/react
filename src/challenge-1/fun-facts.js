import avatar from '../media/avatar.jpg';

function FunFacts() {
	return (
		<div>
			<img
				src={avatar}
				alt="belphegor"
				width={100}
			/>
			<h1>Fun facts about React</h1>
			<ul>
				<li>Was first released in 2013</li>
				<li>Was originally crated by Jordan Walke</li>
				<li>Has well over 100k start on GitHub</li>
				<li>Is maintained by Facebook</li>
				<li>Powers thousands of enterprise apps, including mobile apps</li>
			</ul>
		</div>
	);
}

export default FunFacts;
