import { createSignal, type Component } from 'solid-js';

import styles from './subheader.module.css';

interface MenuItem {
    name: string;
    url: string;
}

interface SubheaderProps {
    siteName: string;
    menuItems?: MenuItem[];
}

const Subheader: Component<SubheaderProps> = (props: SubheaderProps) => {
    const [menuItems, setMenuItems] = createSignal<MenuItem[]>([])
    if (!!props.menuItems && props.menuItems.length > 0) {
        setMenuItems(props.menuItems)
    } else {
        setMenuItems([
            {name: "Home", url: "/"},
            {name: "About", url: "/"},
            {name: "Contact", url: "/"},
        ])
    }
  return (
    <div class={styles.mainBar}>
      <header class={styles.header}>
        {props.siteName}
      </header>
      <div>
        <ul class={styles.nav}>
            {menuItems().map((item) => (
                <li class={styles.navListItem}><a href={item.url}>{item.name}</a></li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Subheader;
