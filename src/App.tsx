import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import './App.scss';
//import NavComponent from './components/nav2/nav.component';
import {NavComponent} from './components/nav/nav.component';
import './include/bootstrap';
// import { FirstComponent } from './components/old/first.component';
// import { SecondComponent } from './components/old/second.component';
import HomeComponent from './components/home/home.component';
// import { MoviesComponent } from './components/old/movies/movies.component';
// import { TicTacComponent } from './components/old/tic-tac/tic-tac.component';
// import { PokemonComponent } from './components/old/pokemon/pokemon.component';
// import ChuckNorrisComponent from './components/chuck-norris/chuck-norris.component';
// import { NestedComponent } from './components/old/nested/nested.component';
import SignInComponent from './components/sign-in/sign-in.component';
// import ClickerComponent from './components/clicker/clicker.component';
// import { SpaceshipsComponent } from './components/old/spaceships/spaceships.component';
import { Provider } from 'react-redux';
import { store } from './Store';
import userComponent from './components/user/user.component';
import history from './history';
import { ProfilePageComponent } from './components/ProfilePage/profile-page.component';
import  SubmitEventComponent  from './components/submit-event/submit-event.component';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <NavComponent />
        <div id="main-content-container">
          <Switch>
            {/* <Route path="/chuck-norris" component={ChuckNorrisComponent} /> */}
            {/* <Route path="/clicker" component={ClickerComponent} /> */}
            {/* <Route path="/first" component={FirstComponent} /> */}
            <Route path="/home" component={HomeComponent} />
            <Route path="/sign-up" component={userComponent} />
            <Route path="/my-profile" component={ProfilePageComponent} />
            <Route path="/submit-event" component={SubmitEventComponent} />
            {/* <Route path="/movies" component={MoviesComponent} /> */}
            {/* <Route path="/nested" component={NestedComponent} /> */}
            {/* <Route path="/pokemon" component={PokemonComponent} /> */}
            {/* <Route path="/second" component={SecondComponent} /> */}
            <Route path="/sign-in" component={SignInComponent} />
            {/* <Route path="/spaceships" component={SpaceshipsComponent} /> */}
            {/* <Route path="/tic-tac-toe" component={TicTacComponent} /> */}
            <Route path="/home" component={HomeComponent} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
