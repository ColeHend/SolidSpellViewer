import type { Component, JSX } from 'solid-js';
import { children } from 'solid-js';
import style from './body.module.scss';

type BodyProps = {
    children?: JSX.Element;
};

const Body: Component<BodyProps> = (props) => {
    const c = children(() => props.children);
    return (
        <div class={style.mainBody}>
            {c()}
        </div>
    )
}
export default Body;