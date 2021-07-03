import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './index.css';
import Home from "./pages/home"
//import App from './App';
import reportWebVitals from './reportWebVitals';
import About from "./pages/about"
import Post from "./pages/post"
import NotFound from "./pages/notfound"
import "./global.css"
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/404" component={NotFound} />
      <Route exact path="/post/:id" render={props => <Post {...props} />} />
    </div>
  </Router>, 
  document.getElementById('root')
);

reportWebVitals();
