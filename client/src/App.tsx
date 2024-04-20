import type { Component, JSX } from 'solid-js';

import styles from './App.module.css';
import Subheader from './shared/subheader/subheader';
import Body from './core/body/body';
import { DataProvider } from './core/services/Service';

type AppProps = {
  children?: JSX.Element;
};

const App: Component<AppProps> = (props) => {
  const siteName = 'Hello Worlds!';
  const menuItems = [
    { name: 'Homes', url: '/' },
    { name: 'Spells', url: '/spells' }
  ];

    return (
      <DataProvider>
        <div class={styles.App}>
          <Subheader siteName={siteName} menuItems={menuItems} />
          <Body>
            {props.children}
          </Body>
        </div>
      </DataProvider>
    );
};

export default App;
