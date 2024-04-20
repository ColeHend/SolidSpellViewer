import { Components } from "./components";

export interface Spell {
    Casting_Time:string,
    Classes:string[],
    components: Components,
    description: string,
    higher_level?: string,
    duration: string,
    level:string,
    name:string,
    range:string,
    is_Ritual:boolean,
    school:string,
    type:string
}

