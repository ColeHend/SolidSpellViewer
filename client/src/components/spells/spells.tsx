import { Accessor, Component } from "solid-js";
import { useData } from "../../core/services/Service";
import { Spell } from "../../shared/models/spell";
import style from "./spells.module.css";

const Spells:Component = () => {
    const spells = useData();
    return (
        <div >
            <h1>Spells</h1>
            <div class={style.body}>
                <ul>
                    {spells?.getAllSpells().map((spell: Spell) => (
                        <li style={{height:"min-content"}}>{spell.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Spells;