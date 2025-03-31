import * as React from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';

import AccountView from './views/accountView';
import AccountCreateView from './views/account/accountCreateView';
import AccountProfileView from './views/account/accountProfileView';
import AccountUpdateView from './views/account/accountUpdateView';
import DashboardView from './views/dashboardView';
import PasswordUpdateView from './views/passwordUpdateView';
import PlaylistView from './views/playlistView';
import PlaylistCreateView from './views/playlist/playlistCreateView';
import PlaylistDetailsView from './views/playlist/playlistDetailsView';
import PlaylistListView from './views/playlist/playlistListView';
import TrackAddView from './views/playlist/trackAddView';
import TrackPlayView from './views/playlist/trackPlayView';
import RadioView from './views/radioView';
import RadioCreateView from './views/radio/radioCreateView';
import RadioDetailsView from './views/radio/radioDetailsView';
import RadioListView from './views/radio/radioListView';
import RadioUpdateView from './views/radio/radioUpdateView';
import RestorePasswordView from './views/restorePasswordView';
import SignInView from './views/signInView';
import SignUpView from './views/signUpView';
import WelcomeView from './views/welcomeView';

import './App.css';


function App() {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<WelcomeView/>}/>
            <Route exact path="/account" element={<AccountView/>}/>
            <Route exact path="/account/create" element={<AccountCreateView/>}/>
            <Route exact path="/account/profile" element={<AccountProfileView/>}/>
            <Route exact path="/account/update" element={<AccountUpdateView/>}/>
            <Route exact path="/dashboard" element={<DashboardView/>}/>
            <Route exact path="/playlist" element={<PlaylistView/>}/>
            <Route exact path="/playlist/create" element={<PlaylistCreateView/>}/>
            <Route exact path="/playlist/details/*">
              <Route path=":id" element={<PlaylistDetailsView/>}/>
            </Route>
            <Route exact path="/playlist/list" element={<PlaylistListView/>}/>
            <Route exact path="/playlist/track/add" element={<TrackAddView/>}/>
            <Route exact path="/playlist/track/play/*">
              <Route path=":id" element={<TrackPlayView/>}/>
            </Route>
            <Route exact path="/radio" element={<RadioView/>}/>
            <Route exact path="/radio/create" element={<RadioCreateView/>}/>
            <Route exact path="/radio/details/*">
              <Route path=":id" element={<RadioDetailsView/>}/>
            </Route>
            <Route exact path="/radio/list" element={<RadioListView/>}/>
            <Route exact path="/radio/update/*">
              <Route path=":id" element={<RadioUpdateView/>}/>
            </Route>
            <Route exact path="/restore-password" element={<RestorePasswordView/>}/>
            <Route exact path="/update-password" element={<PasswordUpdateView/>}/>
            <Route exact path="/signin" element={<SignInView/>}/>
            <Route exact path="/signup" element={<SignUpView/>}/>
        </Routes>
    </Router>
  );
}

export default App;
