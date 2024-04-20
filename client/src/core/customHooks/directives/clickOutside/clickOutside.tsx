import { onCleanup } from "solid-js";

export default function clickOutside(el: Element, accessor: () => false) {
    const onClick = (e: Event) => {
        if (!el.contains(e.target as Node)) {
            accessor();
        }
    };
    document.body.addEventListener("click", onClick);

    onCleanup(() => document.body.removeEventListener("click", onClick));
}
