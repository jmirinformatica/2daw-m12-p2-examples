import preactLogo from '../../assets/preact.svg';
import './style.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

export function Home() {
	return (
		<div class="home">
			<Container>
				<Card style={{ width: '18rem' }} className="m-auto">
					<Card.Img variant="top" src={preactLogo} height="160" width="160" />
					<Card.Body>
						<Card.Title><a href="https://preactjs.com" target="_blank">Preact.js</a></Card.Title>
						<Card.Text>With React Bootstrap</Card.Text>
					</Card.Body>
				</Card>
			</Container>
			<h1 className="fs-1 text-decoration-underline">Get Started building Vite-powered Preact Apps </h1>
			<section>
				<Resource
					title="Learn Preact"
					description="If you're new to Preact, try the interactive tutorial to learn important concepts"
					href="https://preactjs.com/tutorial"
				/>
				<Resource
					title="Differences to React"
					description="If you're coming from React, you may want to check out our docs to see where Preact differs"
					href="https://preactjs.com/guide/v10/differences-to-react"
				/>
				<Resource
					title="Learn Vite"
					description="To learn more about Vite and how you can customize it to fit your needs, take a look at their excellent documentation"
					href="https://vitejs.dev"
				/>
			</section>
		</div>
	);
}

function Resource(props) {
	return (
		<a href={props.href} target="_blank" class="resource">
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
}
