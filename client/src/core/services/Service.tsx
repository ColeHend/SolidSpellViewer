import { createSignal, createContext, useContext, Accessor, Context } from "solid-js";
import { Spell } from "../../shared/models/spell";
import httpClient from "../customHooks/httpClient";
import { effect } from "solid-js/web";

interface DataService {
  getAllSpells: Accessor<Spell[]>;
}

const DataContext = createContext<DataService>();
export function DataProvider(props: any) {
  const [spells, setSpells] = createSignal<Spell[]>([]);
  httpClient.get<Spell[]>("http://localhost:5000/api/Spells/GetAll").subscribe(spells => {
    setSpells(spells);
  });

  let dataServ: DataService = {
    getAllSpells: spells
  };

  return (
    <DataContext.Provider value={dataServ}>
      {props.children}
    </DataContext.Provider>
  );
}

export function useData() { return useContext(DataContext); }