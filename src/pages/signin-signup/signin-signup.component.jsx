import React from 'react'

import './signin-signup.styles.scss';
import Signin from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInSignUp = () => (
  <div className="signin-signup">
    <Signin />
    <SignUp />
  </div>
);

export default SignInSignUp;