import React from 'react';
import ReactDOM from 'react-dom';

// ==========================================================================================================

// for point 9 
// import Hook1 from './Hooks1';
// import Hook2 from './Hooks2';
// import Hook3 from './Hooks3';

// for point 10
// import Even from './Event'

// for point 11
// import Cvsu from './Cvsu';

// for point 12
// import IncrDecs from './IncrDecs';

// for point 13
// import MyClock from './MyClock'; // deprecated

// for point 18
// import ContextAPI from './ContextAPI';

// for point 19
// import UseEffectHook from './UseEffectHook';

// for point 20
// import ChangingTitle from './ChangingTitle';

// for point 22
  // for self closing Route tags
    // import Apps from './Apps';
  // for opening and closing Route tags (or nested Route tags) and layout
    // import Appss from './Appss';

// for point 23
import ReactRouter from './ReactRouter';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

// for point 24


// ==========================================================================================================

// For point 2
// const fName = "Roshan";
// const lName = "Gupta";

// For point 4 & 5
// const img1 = 'https://picsum.photos/200/300'; 
// const img2 = 'https://picsum.photos/250/300';
// const img3 = 'https://picsum.photos/300/300';
// const link = 'https://facebook.com';

// For point 5
// import './index.css';

// For point 6
  // const heading = {
  //   color: '#fa9191',
  //   textAlign: 'center',
  //   textTransform: 'capitalize',
  //   fontWeight: 'bold',
  //   textShadow: '0px 2px 4px #ffe9c5',
  //   margin: '70px 0px',
  //   fontFamily: '"Josefin Sans", sans-serif'
  // }
  
// For point 7
  // import Heading from './Heading';
  // import Para from './Para';
  // import List from './List';
  // import App from './App';
  
ReactDOM.render(
  // 1. How to write XML code
    // <div>
    //   <h1>Roshan Gupta</h1>
    //   <p>Hello World</p>
    // </div>, 
      // Here is a problem => extra div will be in index.html. To resolve this problem we use <React.Fragment> tag instead of <div> tag
      // <React.Fragment>
      //   <h1>Roshan Gupta</h1>
      //   <p>Hello World</p>
      // </React.Fragment>,
        // in short
          // <>
          // <h1>Roshan Gupta</h1>
          // <p>Hello World</p>
          // </>,

    // OR

    // [
    //   <h1>Roshan Gupta</h1>,
    //   <p>Hello World</p>
    // ],
    
  // 2. Expressions in JSX
    // We only can use expression in {}, But we cannot use statements like if...Else... in {}
    // <>
    //   <h1>My name is { fName }</h1> {/*fName is initialized on top */}
    //   <p>addition of 23 + 56 is { 23 + 56 }</p>
    //   <p>A random number is { Math.random() }</p>
    // </>,

  // 3. Template Literals in JSX
    // <>
    //   <h1> {`My first name is ${fName} and my last name ${lName} `}</h1> {/*lName is initialized on top */}
    //   <p>{`${ 5 + 5 }`}</p>
    // </>,

  // 4. JSX Attribute
    // <>
    //   <h1 contentEditable="true">{`My name is ${fName}`}</h1>
    //   <img src={img1}  alt='randomImage1'/>
    //   <img src={img2}  alt='randomImage2'/>
    //   <a href={link} target='_blank'>
    //     <img src={img3}  alt='randomImage3'/>
    //   </a>
    // </>,

  // 5. CSS Style in React
    // <>
    //   <h1 className='heading'>Roshan Gupta</h1>
    //   <div className='img_div'>
    //     <img src={img1}  alt='randomImage1'/>
    //     <img src={img2}  alt='randomImage2'/>
    //     <a href={link} target='_blank'>
    //       <img src={img3}  alt='randomImage3'/>
    //     </a>
    //   </div>
    // </>,

  // 6. internal and inline css
    // <>
    //   <h1 style={{ color : '#fa9191', textTransform : 'capitalize', textAlign: 'center' }}>Roshan Gupta</h1>
    //   <h1 style={heading}>Hello Roshan</h1>
    //   <div className='img_div'>
    //     <img src={img1}  alt='randomImage1'/>
    //     <img src={img2}  alt='randomImage2'/>
    //     <a href={link} >
    //       <img src={img3}  alt='randomImage3'/>
    //     </a>
    //   </div>
    // </>,

  // 7. Components
    // <>
    //   <Heading />
    //   <Para />
    //   <List />
    // </>,
    // OR
    // <App />,

  // 8. IfElse Conditions
    // Refer => ../netflix/src/App.jsx

  // 9. Hooks
    // 9.1 Hooks are the new feature introduced in the React 16.8 version.
    // 9.2 It allows you to use state and other React features without writing a class. Hooks are the functions which "hook into" React state and lifecycle features from function components.
    // 9.3 It does not work inside classes.
    // 9.4 Hooks should always be used at the top level of the React function
    // 9.5 Node version 6 or above. NPM version 5.2 or above.
    
    // <Hook1 />,
    // <Hook2 />,
    // Challenge On Hook =>
      // <Hook3 />,

  // 10. Handling Events
    // <Even />,

  // 11. Controlled Vs Uncontrolled and Handling Complex Multiple Input form states
    // <Cvsu />,

  // 12. Challenge =>
    // <IncrDecs />,
    // Material UI Icons =>
      // Reference =>  Documentation : https://mui.com/components/icons/
      //               Icons : https://mui.com/components/material-icons/

  // 13. Mini project - Digital clock
    // <MyClock />, // Deprecated

  // 14. ToDo List app using material Icons and Bootstrap
    // Visit => D:\React_Tutorial\todowithmaterialicons folder/project

  // 15. Live covid 19 tracker app
    // Visit => D:\React_Tutorial\firstReactApp\covidtracker folder/project

  // 16. Accordion project
    // Visit => D:\React_Tutorial\accordion

  // 17. Keep app
    // Visit => D:\React_Tutorial\keepapp

  // 18. Context API and useContext Hook(see => CompoB.jsx)
    // React Context API allows you to easily access data at different levels of the component tree, without passing props to every level
    // <ContextAPI />,  

  // 19. useEffect Hooks
    // <UseEffectHook />,

  // 20. Challenge - Changing th Title value on Button click
    // <ChangingTitle />,

  // 21. Pokemon - API Call, Axios dependency
    // Visit => D:\React_Tutorial\pokemon

  // 22. React Router v6
    // Examples of self closing Route
      // <Apps />,
    // Examples of opening and closing Route tags (or nested Route tags) and layout
    // <Appss />,

    // Note: 'react-router-dom' (possible exports: BrowserRouter, HashRouter, Link, MemoryRouter, NavLink, Navigate, Outlet, Route, Router, Routes, UNSAFE_LocationContext, UNSAFE_NavigationContext, UNSAFE_RouteContext, createRoutesFromChildren, createSearchParams, generatePath, matchPath, matchRoutes, renderMatches, resolvePath, unstable_HistoryRouter, useHref, useInRouterContext, useLinkClickHandler, useLocation, useMatch, useNavigate, useNavigationType, useOutlet, useOutletContext, useParams, useResolvedPath, useRoutes, useSearchParams)

  // 23. React Router, useParams Hook, useNavigate Hook, useLocation Hook and Live search filter Project
    <BrowserRouter>
      <ReactRouter />
    </BrowserRouter>,

  // 24. Deploy React App on github
    // Reference => https://create-react-app.dev/docs/deployment

  // 25. To write XML code faster
    // Add the following code to settings.json
      // "emmet.includeLanguages": {
      //   "javascript": "javascriptreact"
      // },

  // 26. Best Extension for React 
    // ES7 React/Redux/GraphQL/React-Native snippets

  // 27. Redux Tutorial
    // Redux is a pattern and library for managing and updating application state, using events called "actions". It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.
    // Visit => D:\React_Apps\web

  // 28. React Redux API
    // Visit => D:\React_Apps\react-redux-api
  
   document.getElementById("root")
 ); // render("what to show", "Where to show", callback-function);
// Note : render means show

// Note: 
// ReactDOM.render(<h1> Roshan Gupta </h1>, document.getElementById("root"));
// Above line will compiled by babel into => 
    // ReactDOM.render(React.createElement("h1", null, " Roshan Gupta "), document.getElementById("root"));
    // Note : babel is a javascript compiler which is used to convert modern javascript code into browser   supportive javascript code.

// Note:
// If we use pure javascript we have to write following =>
    // var h1 = document.createElement("h1");
    // h1.innerHTML = " Roshan Gupta ";
    // document.getElementById("root").appendChild(h1);

// Note : JSX => JavaScript XML and JavaScript extension