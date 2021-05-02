import React , {useEffect}   from 'react';
import Navbar from '../components/Navbar';
import {connect} from "react-redux" ;
import {checkAuthenticated , load_user , logout} from '../actions/auth' ;

const Layout = ({ checkAuthenticated, load_user, logout ,  children }) => {
    useEffect(() => {
        checkAuthenticated();
        load_user();
        logout();
    }, []) ;

    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
};


export default connect(null , {checkAuthenticated , load_user , logout}) (Layout);