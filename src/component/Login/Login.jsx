import React from 'react';
import {reduxForm,Field} from 'redux-form';
import {Input} from "./../common/formsControls/FormsControls";
import {required} from "./../../utils/validators";
import { from } from 'rxjs';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={Input}
                        validate={[required]}
                />
            </div>
            <div>
                <Field placeholder={"password"} name={"password"} component={Input}
                        validate={[required]}
                />
                </div>
            <div><Field component={Input} name={"remember_me"} type={"checkbox"} />remember me</div>
            <div><button>Login</button></div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData)=>{
        console.log(formData);
    }
    return <div>
        <h1>Login</h1>
       <LoginReduxForm onSubmit={onSubmit} />
        </div>
}

export default Login;