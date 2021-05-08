import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/home-page.component";
import ShopPage from "./pages/shop/shop-page.component";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
