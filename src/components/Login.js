import styled from "styled-components";
import { connect } from "react-redux";
import { signInAPI } from "../actions"
import { Redirect } from "react-router-dom";

const Login = (props) => {
 
    return (

       <Container>
           {/* use for redirect the user after google login */}
           {props.user && <Redirect to="/home" />}
           <Nav>
               <a href="#" >
               <img src="/images/login-logo.svg"  alt="login-logo"/>
               </a>
               <div>
                   <Join>Join Now</Join>
                   <SignIn onClick={() => props.signIn()}>SignIn</SignIn>
               </div>
           </Nav>
           <Section> 
            <Hero>
             <h1>Welcome to your professional community</h1>
             <img src="/images/login-hero.svg" alt="login-hero-image" />
           </Hero>
             <Form>
              <Google onClick={() => props.signIn()}>
               <img src="/images/google.svg" alt="google-button" />
               Sign in with Google
              </Google> 
            </Form>
         </Section>
     </Container>
    
  )
};

// container style

const Container = styled.div`
 padding: 0;
`;

// nav style
const Nav = styled.nav`
   display: flex;
   position: relative;
   flex-wrap: nowrap;
   justify-content: space-between;
   align-items: center;
   max-width: 1128px;
   padding: 12px 0 16px;
   margin: auto;
   
   & > a {
     width: 135px;
     height: 34px;
    
     @media (max-width: 768px) {
         padding: 0 5px;
     }
   }
`;


// join style
const Join = styled.a`
font-size: 16px;
padding: 18px 12px;
text-decoration: none;
margin-right: 12px;
border-radius: 4px;
font-weight: 500;
color: rgba(0, 0, 0, 0.6);

&:hover {
background-color: rgba(0, 0, 0, 0.08);
color: rgba(0, 0, 0, 0.9);
border-radius: 4px;
text-decoration: none;
}
`;

// signin style
const SignIn = styled.a`
box-shadow: inset 0 0 0 1px #0a66c2;
color: #0a66c2;
border-radius: 24px;
transition-duration: 167ms;
font-size: 16px;
font-weight: 600;
line-height: 40px;
padding: 10px 24px;
cursor: pointer;
text-align: center;
background-color:rgba(0, 0, 0, 0);

&:hover {
   background-color:rgba(112, 181, 249, 0.15);
   color: #0a66c2;
   text-decoration: none
}
`;

// section style
const Section = styled.a`
display: flex;
flex-wrap: wrap;
position: relative;
align-items: center;
align-content: start;
padding-bottom: 138px;
padding-top: 40px;
width: 100%;
max-width: 1128px;
min-height: 700px;
margin: auto;
padding: 60px 0;

@media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
}
`;

// Hero style
const Hero = styled.div`
width: 100%;
h1 {
    padding-bottom: 0;
    width: 56%;
    font-size: 56px;
    font-family: sans-serif;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;

    @media (max-width: 768px) {
        text-align: center;
        font-size: 20px;
        width: 100%;
        line-height: 2;
    }
}

img {
z-index: 1;
width: 700px;
height: 670px;
position: absolute;
bottom: 122px;
right: -100px;

@media (max-width: 768px){
    top: 230px;
    width: initial;
    position: initial;
    height: initial;
}
}
`;

const Form = styled.div`
margin-top: 100px;
width: 408px;
@media (max-width: 768px) {
    margin-top: 20px
}
`;
const Google = styled.button`
display: flex;
justify-content: center;
align-items: center;
background-color:#fff;
height: 56px;
width:100%;
cursor: pointer;
border-radius: 28px;
box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), 
inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
vertical-align: middle;
z-index: 0;
transition-duration: 167ms;
font-size: 20px;
color: rgba(0, 0, 0, 0.60);
&:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
}
`;


// rudux section start
const mapStateToProps = (state) => {
return{
    //user state is redirecting to home page
    user: state.userState.user,
};
};

const mapDispatchToProps = (dispatch) => ({
    signIn: () => dispatch(signInAPI()),
});


// rudux section end
export default connect(mapStateToProps, mapDispatchToProps)(Login);
