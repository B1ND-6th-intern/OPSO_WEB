import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./page/Login/LoginPage";
import SignupPage from "./page/Signup/SignupPage";
import MainPage from "./page/Main/MainPage";
import Navigation from "./page/Nav/Navigation";
import CertificationPage from "./page/Certification/CertificationPage";
import ErrorPage from "./page/ErrorPage/ErrorPage";
import Footer from "./page/Footer/Footer";
import { isUserData } from "./Store";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

const AppRouter = () => {
  const [isUser, setIsUser] = useRecoilState(isUserData);

  // useEffect(() => {
  //   const isToken = localStorage.getItem("Token");
  //   if (!isToken) {
  //     setIsUser(false);
  //     return;
  //   }
  //   setIsUser(true);
  // }, []);

  setIsUser(true);

  return (
    <Router>
      <Switch>
        {isUser ? (
          <Router>
            {isUser && <Navigation isLoggedIn={isUser} />}
            <Route exact path="/">
              <MainPage />
            </Route>
          </Router>
        ) : (
          <Router>
            <Route exact path="/">
              <LoginPage />
            </Route>
            <Route path="/signup">
              <SignupPage />
            </Route>
            <Route path="/certification">
              <CertificationPage />
            </Route>
          </Router>
        )}
      </Switch>
      <Route path="/404">
        <ErrorPage />
      </Route>
      <Footer />
    </Router>
  );
};

export default AppRouter;
