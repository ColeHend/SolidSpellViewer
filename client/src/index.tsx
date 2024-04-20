/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';
import { Router, Route } from '@solidjs/router';
import { lazy } from 'solid-js';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

const Home = lazy(() => import('./components/home/home'))
const Spells = lazy(() => import('./components/spells/spells'))
// render(() => <App />, root!);

render(() => (
  <Router root={App}>
    <Route path="/" component={Home} />
    <Route path="/spells" component={Spells} />
  </Router>
), root!);
