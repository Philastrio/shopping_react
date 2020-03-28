import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/AppNavbar";
import ShoppingList from "./components/ShoppingList";
import { Provider } from "react-redux";
import store from "./store";
import ItemModal from "./components/itemModal";
import { Container } from "reactstrap";
import { loadUser } from "./redux/actions/authActions";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PostModal from "./components/PostModal";

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <div>
        <AppNavbar />
        <Header />
        <Container>
          <ItemModal />
          <PostModal />
          <ShoppingList />
        </Container>
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
