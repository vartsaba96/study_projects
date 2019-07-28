import React from 'react';
import Header from './Header';
import {getAuthUserData} from './../../state/authReduser';
import {connect} from "react-redux";
import {logout} from "./../../state/authReduser";

class HeaderContainer extends React.Component {
    componentDidMount(){
        this.props.getAuthUserData();
    }
    render(){
        return <Header {...this.props} />
 
    }
}
const mapStateToProps = (state) => (
    {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }

)
export default connect(mapStateToProps, {getAuthUserData,logout})(HeaderContainer);