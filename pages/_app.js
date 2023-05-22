import '../styles/globals.scss';
import {
	useEffect
} from 'react';

export default function App({ Component, pageProps }) {
	function inIframe () {
		try {
			console.log(window)
			return window.self !== window.top;
		} catch (e) {
			return true;
		}
	}
	useEffect(() => {
		if (!inIframe()) document.body.classList.add('browser-mode');
	});
	return <Component {...pageProps} />;
}