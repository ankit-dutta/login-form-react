import './Login.css';
import reactLogo from '../Assets/logo512.png';
import { useRef } from 'react';

const Login = () =>{
 
  const emailRef = useRef();
  const passRef = useRef();

  // form submit handler
  const submitHandler = (event) =>{
     event.preventDefault();
     const enteredEmail = emailRef.current.value;
     const enteredPass = passRef.current.value;

     console.log(`Email- ${enteredEmail} , Pass - ${enteredPass}`) //in console we can chaeck the values of input
  }

    return(
        <>
       

          <div className='container'>

            <center>

              {/* HEADING SECTION */}
             <div className='header-container'>
                <img src={reactLogo} alt='image'></img>
                <h5>SOME RANDOM TEXT SOME RANDOM TEXT
                <br />SOME RANDOM TEXTSOME RANDOM TEXTSOME RANDOM TEXT</h5>
           

         
              <div className='heading-container'>
                  <h5 className='login'>Login</h5>
                  <h5>Signup</h5>
              </div>

            {/* FORM HANDLER */}
              <form onSubmit={submitHandler}>
                  <div className='inp-container'>
      
                    <input type='email' placeholder = 'Email Address' ref={emailRef} /> <br />
                    <input type='password' placeholder = 'Password' ref={passRef} />
                
                  </div>
            

                  <div className='submit-container'>
                    <button type='submit'>LOGIN</button>
                    <p>Forgot Password ?</p>
                  </div>
              </form>

            {/* OTHER SIGNUP LINK SECTION */}
            <div className='signup-link-container'>
              <h6>or login with</h6>

              <div className='icons'>
                <i class="fa-brands fa-google"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
                <i class="fa-brands fa-facebook"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa-brands fa-twitter"></i>

                <p>Don't have an account? <span><a>create new now</a></span></p>
                <p>By signing up, you are agree with our <span><a><u>Terms & Conditions</u></a></span></p>
          
              </div>

            </div>

            </div>

          </center>

          </div>
        </>
    )
}

export default Login;