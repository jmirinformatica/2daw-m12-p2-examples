import { useLocation } from 'preact-iso';

export function Header() {
	const { url } = useLocation();

	return (
		<header>
			<nav class="bg-primary navbar navbar-expand navbar-dark">
				<div class="container">
					<a href="/" class="navbar-brand">Preact + Bootstrap</a>
					<button type="button" aria-label="Toggle navigation" class="navbar-toggler collapsed">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="justify-content-end navbar-collapse collapse" id="navbarScroll">
						<div class="navbar-nav navbar-nav-scroll" style="max-height: 100px;">
							<a href="/" data-rr-ui-event-key="/" class={'nav-link' + (url == '/' ? ' active' : '')}>Home</a>
							<a href="/404" data-rr-ui-event-key="/404" class={'nav-link' + (url == '/404' ? ' active' : '')}>404</a>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}
