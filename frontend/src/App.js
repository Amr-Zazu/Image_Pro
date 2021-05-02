import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';


import Modules from './components/Modules';
import LogIn from './components/LogIn';
import Index from './components/Index';
import ResetPassword from './components/ResetPassword';
import ResetPasswordConfirm from './components/ResetPasswordConfirm';

import { Provider } from 'react-redux';
import store from './store';
import Layout from './hocs/Layout';
import Signup from './components/Signup';
import Activate from './components/Activate';
import ImageUpload from './components/ImageUpload' ;
import Logout from './components/Logout' ;
import ContentFeed from './ContentFeed/contet-feed' ;
import UploadImage from './components/UploadImage'

function App() {
  return (
    <Provider store={store}>
    <Router>
    <Layout />
    <Switch>
    <Route exact path="/" component={Index} />
    <Route exact path="/login" component={LogIn} />
    <Route exact path='/signup' component={Signup} />
    <Route exact path="/modules" component={Modules} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path='/reset-password' component={ResetPassword} />
    <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
    <Route exact path='/activate/:uid/:token' component={Activate} />
    <Route exact path="/image-upload" component={ImageUpload} />
    <Route exact path="/" component={Logout} />
    <Route exact path="/content-feed" component={ContentFeed} />
    <Route exact path="/upload-image" component={UploadImage} />


    </Switch>

  </Router>
  </Provider>
);
}

export default App;
