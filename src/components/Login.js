import styled from "styled-components";
import { connect } from "react-redux";
import { signInAPI } from "../actions"
import { Redirect } from "react-router-dom";
import "../styles/Login.css";

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
             <img src="/images/hero-image-v2.svg" alt="login-hero-image" />
           </Hero>
             <Form>
              <Google onClick={() => props.signIn()}>
               <img src="/images/google.svg" alt="google-button" />
               Sign in with Google
              </Google> 
            </Form>
         </Section>
         <Section> 
             <SearchCta>
                 <JobsFinderCta>
                 <JobsFinderCtaHeader>
               <h2>Find open jobs and internships</h2>
               </JobsFinderCtaHeader>
                 </JobsFinderCta>
           <SuggestedSearch>
               <SeeMoreLessListMain>
               <SeeMoreLessListHeader>
               <p>SUGGESTED SEARCHES</p>
               </SeeMoreLessListHeader>
               <SeeMoreLessList>
                   <ul className="seemorelesslist ul">
                       <li className="seemorelesslist li">
                           <a className="seemorelesslist a">
                               Engineering
                           </a>
                           
                       </li>
                       <li className="seemorelesslist li">
                           <a className="seemorelesslist a">
                           Business Development
                           </a>
                           
                       </li>
                       <li className="seemorelesslist li">
                           <a className="seemorelesslist a">
                           Finance
                           </a>
                          </li>
                          <li className="seemorelesslist li">
                           <a className="seemorelesslist a">
                           Administrative Assistant
                           </a>
                          </li>
                          <li className="seemorelesslist li">
                           <a className="seemorelesslist a">
                           Retail Associate
                           </a>
                          </li>
                          <li className="seemorelesslist li">
                           <a className="seemorelesslist a">
                           Customer Service
                           </a>
                          </li>
                          <li className="seemorelesslist li">
                           <a className="seemorelesslist a">
                           Operations
                           </a>
                          </li>
                          <li className="seemorelesslist li">
                           <a className="seemorelesslist a">
                           Information Technology
                           </a>
                          </li>
                          <li className="seemorelesslist li">
                           <a className="seemorelesslist a">
                           Marketing
                           </a>
                          </li>
                          <li className="seemorelesslist li">
                           <a className="seemorelesslist a">
                           Human Resources
                           </a>
                          </li>
                          <li className="seemorelesslist li">
                           <a className="seemorelesslist a">
                           Real Estate
                           </a>
                          </li>
                          <li className="seemorelesslist li">
                           <a className="seemorelesslist a">
                           Real Estate
                           </a>
                          </li>
                          <li className="seemorelesslist li">
                           <a className="seemorelesslist a">
                           Entrepreneurship
                           </a>
                          </li>
                          <li className="seemorelesslist li">
                           <a className="seemorelesslist a">
                           Entrepreneurship
                           </a>
                          </li>
                          <li className="seemorelesslist li">
                           <a className="seemorelesslist a">
                          Research
                           </a>
                          </li>
                   </ul>
                </SeeMoreLessList>
               </SeeMoreLessListMain>
           </SuggestedSearch>
             </SearchCta>
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
const Section = styled.section`
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

::before {
    content: '';
    width: 100vw;
    height: 100%;
    top: 0;
    right: 0;
    position: absolute;
    z-index: -2;
}

@media (max-width: 768px) {
    margin: auto;
    max-width: 100vw;
    min-height: 0px;
    padding-top: calc(64px + 56px);
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
    font-weight: 500;
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
right: -130px;
overflow: hidden;

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


// new css for bottom section

// searchcta style
const SearchCta = styled.div`
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;

    @media (max-width: 768px) {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
}

`;
// jobsfindercta style
const JobsFinderCta = styled.div`
   min-width: 408px;
    margin-right: 72px;
    -ms-flex-item-align: start;
    align-self: flex-start;

    @media (max-width: 768px) {
    min-width: 100%;
    margin: 0 0 24px 0;
    }
`;

// jobsfinderctaheader style
const JobsFinderCtaHeader = styled.div`
    font-size: 48px;
    line-height: 1.16667;
    font-weight: 400;
    color: rgba(0,0,0,0.9);
    font-family: sans-serif;
    line-height: 60px;

    @media (max-width: 768px) {
    font-size: 32px;
    font-weight: 500;
    line-height: 40px;
    }

`;


// suggested style
const SuggestedSearch = styled.div`
    width: 100%;
    -webkit-box-flex: 2;
    -ms-flex-positive: 2;
    flex-grow: 2;
    -ms-flex-item-align: start;
    align-self: flex-start;
`;

// seemorelesslistmain style
const SeeMoreLessListMain = styled.div`
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
`;

// SeeMoreLessListHeader style
const SeeMoreLessListHeader = styled.div`
    font-size: 18px;
    line-height: 1.5;
    font-weight: 600;
    color: rgba(0,0,0,0.6);
    text-transform: uppercase;
    line-height: 20px;
    margin-bottom: 20px;
`;
// SeeMoreLessList style
const SeeMoreLessList = styled.div`
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;

    ul {
        display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-bottom: 15px;
    }

    li {
        text-align: left;
        list-style-type: none;
    }

    a {
    font-size: 20px;
    line-height: 1.4;
    font-weight: 600;
    color: rgba(0,0,0,0.6);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: left;
    min-height: 56px;
    height: auto;
    width: auto;
    float: left;
    background-color: rgba(0,0,0,0.08);
    -webkit-box-shadow: none;
    box-shadow: none;
    border-radius: 28px;
    padding: 8px 20px;
    margin-bottom: 12px;
    margin: 0 6px 8px 0;
    vertical-align: middle;
    z-index: 0;
    -webkit-transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    -webkit-transition-property: background-color,color,-webkit-box-shadow;
    -webkit-transition-duration: 167ms;
    position: relative;
    overflow: hidden;
    outline-width: 2px;
    -webkit-box-sizing: border-box;
    border: 0;
    &:hover {
        background-color: rgba(0,0,0,0.22);
    }
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
