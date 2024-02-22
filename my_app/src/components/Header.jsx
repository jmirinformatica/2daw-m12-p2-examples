import { useLocation } from 'preact-iso';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logger from '../library/Logger';


export function Header({user}) {
	const { url } = useLocation();
	const handleLogout = async () => {
		// TODO
		Logger.debug("User logout")
	};
	return (
		<header>
			<Navbar collapseOnSelect expand="md" bg="primary" data-bs-theme="dark">
				<Container>
					<Navbar.Brand href="/">Preact + React Bootstrap</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">						
						<Nav activeKey={url}>
							<Nav.Link href="/" eventKey={"/"}>Home</Nav.Link>
							{user ? (
								<>
									<Nav.Link>{user}</Nav.Link>
									<Button variant="secondary" onClick={handleLogout}>Desconnectar</Button>
								</>
							) : (
								<>
									<Nav.Link href="/login" eventKey={"/login"}>Login</Nav.Link>
									<Nav.Link href="/register" eventKey={"/register"}>Register</Nav.Link>
								</>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
}
