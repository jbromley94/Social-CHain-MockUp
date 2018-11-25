import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Heading from "./Components/Heading/Heading";
import Home from "./Components/Home/Home";
import Vacancies from "./Components/Vacancies/Vacancies";
import Admin from "./Components/Admin/Admin";
import AdminVacancies from "./Components/Admin/AdminVacancies";
import AdminVacanciesJAE from "./Components/Admin/AdminVacanciesJAE";
import AdminManagement from "./Components/Admin/AdminManagement";
import VacancyManagement from "./Components/Admin/VacancyManagement";
import AddVacancy from "./Components/Admin/AddVacancy";
import Footer from "./Components/Footer/Footer";







class App extends Component {
  render() {
    return <div className="App">
        <header className="App">
          <Heading />
        </header>
        <div className="underHeading">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/vacancies" component={Vacancies} />
            <Route path="/admin" component={Admin} />
            <Route path="/adminManagement" component={AdminManagement} />
            <Route path="/adminVacancies" component={AdminVacancies} />
            <Route path="/adminVacanciesJAE" component={AdminVacanciesJAE} />
            <Route path="/vacancyManagement" component={VacancyManagement} />
            <Route path="/addVacancy" component={AddVacancy} />
          </Switch>
        </div>
      <footer>
        <Footer />
      </footer>
      </div>;
  }
}

export default App;
