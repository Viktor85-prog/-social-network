import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import { Route, BrowserRouter } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar state={props.state.sidebarPage} />
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                // state={props.state.messagesPage}
                dispatch={props.dispatch}
                store={props.store}
              />
            )}
          />
          <Route
            path="/profile"
            render={() => (
              <Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
              />
            )}
          />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
