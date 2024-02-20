import preactLogo from '../../assets/preact.svg';
import './style.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export function Home() {
	return (
		<div class="home align-center">
			<div class="text-center">
				<a href="https://preactjs.com" target="_blank">
					<img src={preactLogo} alt="Preact logo" height="160" width="160" />
				</a>
				<h1 className="fs-2 text-decoration-underline">Get Started building Vite-powered Preact Apps</h1>
			</div>
			<section>
				<Row xs={1} md={2} lg={3} className="g-4">
					<Col>
						<Resource
							title="Learn Preact"
							description="If you're new to Preact, try the interactive tutorial to learn important concepts"
							href="https://preactjs.com/tutorial"
						/>
					</Col>
					<Col>
						<Resource
							title="Differences to React"
							description="If you're coming from React, you may want to check out our docs to see where Preact differs"
							href="https://preactjs.com/guide/v10/differences-to-react"
						/>
					</Col>
					<Col>
						<Resource
							title="Learn Vite"
							description="To learn more about Vite and how you can customize it to fit your needs, take a look at their excellent documentation"
							href="https://vitejs.dev"
						/>
					</Col>
				</Row>
			</section>
		</div>
	);
}

function Resource(props) {
	return (
		<a href={props.href} target="_blank" class="resource">
			<Card className="m-auto">
				<Card.Body>
					<Card.Title>
						<h2>{props.title}</h2>
					</Card.Title>
					<Card.Text>
						<p>{props.description}</p>
					</Card.Text>
				</Card.Body>
			</Card>
		</a>
	);
}
