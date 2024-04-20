import { Show, createSignal, type Component } from 'solid-js';

import styles from './subheader.module.scss';
import { Portal, effect } from 'solid-js/web';
import clickOutside from '../../core/customHooks/directives/clickOutside/clickOutside';
import { l } from 'vite/dist/node/types.d-aGj9QkWt';
interface MenuItem {
    name: string;
    url: string;
}

interface DropMenuItem {
  name: string;
  onClick?: ()=>void;
}

interface SubheaderProps {
    siteName: string;
    menuItems?: MenuItem[];
}
const Subheader: Component<SubheaderProps> = (props: SubheaderProps) => {
    const [menuItems, setMenuItems] = createSignal<MenuItem[]>([])
    const [dropMenuItems, setDropMenuItems] = createSignal<DropMenuItem[]>([])
    const [openMenu, setOpenMenu] = createSignal<boolean>(false)
    const [image, setImage] = createSignal<string>("https://th.bing.com/th/id/R.e039f667d6897af31358f5f87e7d5e5f?rik=rzVqOnqXK1RMlA&riu=http%3a%2f%2f100-pics.net%2fimages%2fanswers%2fit%2fsimboli%2fsimboli_11400_435004.png&ehk=zYDDIzhsf8jd3Bw%2bhQIHFR7014%2fTG8bipAZBwzgQ4X0%3d&risl=&pid=ImgRaw&r=0")
    
    if (!!props.menuItems && props.menuItems.length > 0) {
        setMenuItems(props.menuItems)
    } else {
        setMenuItems([
            {name: "Home", url: "/"},
            {name: "About", url: "/"},
            {name: "Contact", url: "/"},
        ])
    }
    effect(()=>{
      console.log("Drop Menu Items", dropMenuItems())
      const menuItems: DropMenuItem[] = [];
      const loggedIn = false;

      if (loggedIn) {
        menuItems.push({ name: "Profile", onClick: ()=>{alert("Profile Clicked")} });
        menuItems.push({ name: "Settings", onClick: ()=>{alert("Settings Clicked")} });
        menuItems.push({ name: "Logout", onClick: ()=>{alert("Logout Clicked")} });
      } else {
        menuItems.push({ name: "Login", onClick: ()=>{alert("Login Clicked")} });
        menuItems.push({ name: "Register", onClick: ()=>{alert("Register Clicked")} });
        menuItems.push({ name: "Settings", onClick: ()=>{alert("Settings Clicked")} });
      }
      setDropMenuItems(menuItems);
    })
  return (
    <div class={styles.mainBar}>
      <div style={styles.topBar}>
        <span class={styles.header}>
          {props.siteName}
        </span>
        <span class={styles.imageButton} onClick={()=>setOpenMenu(!openMenu())}><img src={image()} alt="IMAGE"  /></span>
        <Show when={openMenu()}>
          <Portal  >
            <div ref={((el)=>clickOutside(el, ()=>setOpenMenu(false)))}  class={styles.portal}>
              <ul>
              {
              dropMenuItems().map(menuItem => (
                <li onClick={menuItem.onClick}>{menuItem.name}</li>
              ))}
              </ul>
            </div>
          </Portal>
        </Show>
      </div>
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
