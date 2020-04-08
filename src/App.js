import React, { Component } from 'react';
import Nav from './Nav/Nav';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import HomePage from './HomePage/HomePage';
import MenuPage from './MenuPage/MenuPage';
import Bio from './BioPage/BioPage';
import './App.css';
import NotFound from './NotFoundPage/NotFoundPage';
import { Route, Switch } from 'react-router-dom';

export default class App extends Component {
	render () {
		return (
			<div className='App'>
				<nav>
					<Nav />
				</nav>
				<header>
					<Header />
				</header>
				<main>
					<Switch>
						<Route exact path='/' component={HomePage} />
						<Route path='/menuPage' component={MenuPage} />
						<Route exact path='/Bio' component={Bio} />
						<Route component={NotFound} />
					</Switch>
				</main>
				<footer>
					<Footer />
				</footer>
			</div>
		);
	}
}
