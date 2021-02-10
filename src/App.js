import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import HomePage from "./components/homepage/homepage.component";
import "./App.css";
import Spinner from "./components/spinner/spinner.component";
// LAZY LOADING
const ContactPage = lazy(() =>
  import("./components/contactpage/contactpage.component")
);
const GalleryPage = lazy(() =>
  import("./components/gallerypage/gallerypage.component")
);
const CategoryPage = lazy(() =>
  import("./components/categorypage/categorypage.component")
);
const DetailPage = lazy(() =>
  import("./components/detailpage/detailpage.component")
);

const App = ({ source }) => (
  <div className="App">
    <Header />
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path="/pemi/" component={HomePage} />
        <Route exact path="/kontakt" component={ContactPage} />
        <Route exact path="/moja_praca" component={GalleryPage} />
        <Route exact path="/moja_praca/:category" component={CategoryPage} />
        <Route path="/moja_praca/:src" component={DetailPage} />
      </Switch>
    </Suspense>
    <Footer />
  </div>
);

export default App;
