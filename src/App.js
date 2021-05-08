import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/home-page.component";
import ShopPage from "./pages/shop/shop-page.component";
import Header from "./components/header/header.component";
import SignInUp from "./pages/sign-in-up/sign-in-up.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/sign-in-up" component={SignInUp} />
      </Switch>
    </div>
  );
}

export default App;
