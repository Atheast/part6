import React from 'react';
import AncedotesList from './components/Ancedotes';
import AncedotesForm from './components/AncedotesForm';
import Notification from './components/Notifications';
import Filter from './components/Filter';

const App = () => (
  <div>
    <h2>Ancedotes</h2>
    <Notification />
    <Filter />
    <AncedotesList />
    <AncedotesForm />
  </div>
)

export default App;
