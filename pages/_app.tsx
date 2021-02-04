import React from 'react';
import App from 'next/app';
import GlobalStyles from '../styles/globalStyles'
import { AnimateSharedLayout } from 'framer-motion'
import { Provider } from 'react-redux'
import { makeStore, wrapper } from '../redux/store'

import 'antd/dist/antd.css';

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps({ ctx });
		}
		return { pageProps };
	}
	render() {
		// @ts-ignore
		const { Component, pageProps } = this.props;

		const store = makeStore()

		return (
			<Provider store={store}>
				<AnimateSharedLayout>
					<GlobalStyles />
					<Component {...pageProps} />
				</AnimateSharedLayout>
			</Provider>
		);
	}
}

export default wrapper.withRedux(MyApp)
// export default wrapper.withRedux(withReduxSaga({ async: true })(MyApp));