import { Accessor, Component, createMemo, createSignal } from "solid-js";
import { useData } from "../../core/services/Service";
import { Spell } from "../../shared/models/spell";
import style from "./spells.module.scss";
import { effect } from "solid-js/web";

const Spells:Component = () => {
    const spells = useData();
    const itemsPerPage = [10, 20, 25, 50, 100]
    const [spellsArr, setSpellsArr] = createSignal<Spell[]>([]);
    const [selectedItemsPerPage, setSelectedItemsPerPage] = createSignal(10);
    const [currentPage, setCurrentPage] = createSignal(1);
    const [totalPages, setTotalPages] = createSignal(Math.ceil(spellsArr().length / selectedItemsPerPage()));

    effect(() => {
        const spell = spells?.getAllSpells().slice((currentPage()-1)*selectedItemsPerPage(), currentPage()*selectedItemsPerPage())
        if (!!spell) {
            setSpellsArr(spell);
        } else {
            setSpellsArr([] as Spell[]);
        }
    });

    effect(() => {
        const totalPages = Math.ceil((spells?.getAllSpells().length ?? 1) / selectedItemsPerPage());
        setTotalPages(totalPages);
        if (totalPages < currentPage()) {
            setCurrentPage(totalPages)
        }
    });
    
    return (
        <div >
            <h1>Spells</h1>
            <div class={style.body}>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {spellsArr().map((spell: Spell) => (
                            <tr style={{height:"min-content"}}>
                                <td>{spell.name}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>
                                <select value={selectedItemsPerPage()} onChange={(e) => setSelectedItemsPerPage(+e.target.value)}>{
                                    itemsPerPage.map(items => 
                                        <option value={items}>
                                            {items}
                                        </option>
                                    )
                                }</select>
                                <button onClick={()=>setCurrentPage(val=>val-1)} disabled={currentPage() === 1}>{'<'}</button>
                                <span>{currentPage()}/{totalPages()}</span>
                                <button onClick={()=>setCurrentPage(val=>val+1)} disabled={currentPage() === totalPages()}>{'>'}</button>

                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}

export default Spells;