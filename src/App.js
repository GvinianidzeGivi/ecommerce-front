import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/home-page.component";
import ShopPage from "./pages/shop/shop-page.component";
import Header from "./components/header/header.component";
import AuthComponent from "./pages/auth/auth-page.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });

    return () => unsubscribeFromAuth();
  }, []);

  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/auth" component={AuthComponent} />
      </Switch>
    </div>
  );
};

export default App;
