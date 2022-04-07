import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './components/layout/Landing';
import Auth from './views/Auth';
import AuthContextProvider from './contexts/AuthContext';
import ProtectedRoute from './components/routing/ProtectedRoute';
import Dashboard from './views/Dashboard';
import ListProduct from './views/ListProduct';
import Lookbook from './views/Lookbook';
import Cart from './views/Cart';
import Introduce from './views/Introduce';
import ProductContextProvider from './contexts/ProductContext';

function App() {
    return (	
		<AuthContextProvider>
			<Router>
					<Switch>
						<Route exact path='/' component={Landing} />
						<Route
							exact
							path='/login'
							render={props => <Auth {...props} authRoute='login' />}
						/>
						<Route
								exact
								path='/register'
								render={props => <Auth {...props} authRoute='register' />}
							/>
						<ProtectedRoute exact path='/cart' component={Cart} />
						<ProtectedRoute exact path='/dashboard' component={Dashboard} />
						<ProtectedRoute exact path='/listproduct' component={ListProduct} />
						<ProtectedRoute exact path='/introduce' component={Introduce} />
						<ProtectedRoute exact path='/lookbook' component={Lookbook} />
					</Switch>
				</Router>
		</AuthContextProvider>
	)
}

export default App