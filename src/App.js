import React, { useEffect, lazy, Suspense } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Router, Route, Redirect, Switch } from 'react-router-dom'
import history from './utils/history'
import firebase from './utils/firebase'
import ChannelService from './utils/ChannelService'
import { detachListeners } from './actions/noticeActions'
import { USER_LOGIN_SUCCESS } from './constants/userConstants'
import './styles/styles.scss'

import Loader from './components/Loader'
import Header from './components/Header'
import Footer from './components/Footer'

const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const Treatment = lazy(() => import('./pages/Treatment'))
const Process = lazy(() => import('./pages/Process'))
const Personal = lazy(() => import('./pages/Personal'))
const Group = lazy(() => import('./pages/Group'))
const Features = lazy(() => import('./pages/Features'))
const Staff = lazy(() => import('./pages/Staff'))
const Interior = lazy(() => import('./pages/Interior'))
const NoticeCreate = lazy(() => import('./pages/NoticeCreate'))
const Notices = lazy(() => import('./pages/Notices'))
const Notice = lazy(() => import('./pages/Notice'))
const NoticeUpdate = lazy(() => import('./pages/NoticeUpdate'))
const Appointment = lazy(() => import('./pages/Appointment'))
const Map = lazy(() => import('./pages/Map'))
const Policy = lazy(() => import('./pages/Policy'))

function App() {
	const { userInfo } = useSelector((state) => state.user)
	const dispatch = useDispatch()

	useEffect(() => {
		// === Get current user
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				dispatch({
					type: USER_LOGIN_SUCCESS,
					payload: user,
				})
			}
		})

		// === Boot Channel as an anonymous user
		ChannelService.boot({
			pluginKey: process.env.REACT_APP_CHANNEL_PLUGIN_KEY,
			zIndex: 10,
			language: 'ko',
		})

		return () => {
			ChannelService.shutdown()
			dispatch(detachListeners())
		}
	}, [dispatch])

	const PrivateRoute = ({ component: Component, ...rest }) => {
		return (
			<Route
				{...rest}
				render={(props) =>
					userInfo ? (
						<Component {...props} />
					) : (
						<Redirect to={`/login?redirect=${rest.path}`} />
					)
				}
			/>
		)
	}

	return (
		<div className='app'>
			<Router history={history}>
				<Header />
				<Suspense fallback={<Loader />}>
					<main>
						<Switch>
							<Route path='/' component={Home} exact />
							<Route path='/login' component={Login} />
							<Route path='/features' component={Features} />
							<Route path='/staff' component={Staff} />
							<Route path='/interior' component={Interior} />
							<Route path='/treatment' component={Treatment} />
							<Route path='/process' component={Process} />
							<Route path='/personal-therapy' component={Personal} />
							<Route path='/group-therapy' component={Group} />
							<PrivateRoute path='/notices/new' component={NoticeCreate} />
							<Route path='/notices/page/:page' component={Notices} exact />
							<PrivateRoute
								path='/notices/edit/:id'
								component={NoticeUpdate}
								exact
							/>
							<Route path='/notices/:id' component={Notice} />
							<Route path='/appointment' component={Appointment} />
							<Route path='/map' component={Map} />
							<Route path='/policy' component={Policy} />
						</Switch>
					</main>
				</Suspense>
				<Footer />
			</Router>
		</div>
	)
}

export default App
