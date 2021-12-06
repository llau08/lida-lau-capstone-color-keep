import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import AddClient from "./pages/AddClient/AddClient";
import Profile from "./pages/Profile/Profile";
import IndvProfile from "./pages/IndvProfile/IndvProfile";
import Footer from "./components/Footer/Footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/home" exact component={Home} />
          <Route
            path="/add-client"
            render={(props) => {
              return <AddClient {...props} />;
            }}
          />
          <Route path="/profiles" component={Profile} />
          <Route path="/profile/:id" component={IndvProfile} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
