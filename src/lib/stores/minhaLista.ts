import { writable } from "svelte/store";

const { set, subscribe, update } = writable<string[]>([]);

export const minhaLista = {
    set,
    subscribe,
    addIngrediente(ingrediente: string) {
        update((valorAtual) => [...valorAtual, ingrediente]);
    },
    removeIngrediente(ingrediente: string) {
        update((valorAtual) =>
            valorAtual.filter((item) => item !== ingrediente));
    }
};
