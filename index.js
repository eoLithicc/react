function Navbar() {
	return (
		<nav>
			<p>Some text here</p>
			<p>Some text here</p>
			<p>Some text here</p>
			<p>Some text here</p>
			<p>Some text here</p>
		</nav>
	);
}

const element = <h1 className={'header'}>My self exploration journey</h1>;
	console.log(element);
function MyCustomComponent () {
	return (
		element
	);
}

function NewNavbar() {
	return (
		<nav>
			<h1>Website</h1>
			<ul>
				<li>Pricing</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</nav>
	);
}

const container = document.getElementById('root');
const root =
	(<div>
		<MyCustomComponent />
		<Navbar />
		<NewNavbar />
	</div>)
ReactDOM.render(root, container)

const h1 = document.createElement("h1");
h1.innerText = 'Some awesome text here';
h1.className = 'header';
console.log(h1);
const root2 = document.getElementById('root');
root2.appendChild(h1);
