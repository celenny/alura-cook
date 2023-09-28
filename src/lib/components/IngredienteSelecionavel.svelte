<!-- componente especializado -->
<!-- A especialização de componentes trata-se de uma estratégia que permite encapsular
melhor comportamentos específicos, além de organizar melhor os componentes. -->

<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import Tag from "./Tag.svelte";
    const dispatch = createEventDispatcher<{
        adicionarIngrediente: string,
        removerIngrediente: string
    }>();
    export let ingrediente: string;
    let selecionado = false;

    function aoClicar() {
        selecionado = !selecionado;

        if (selecionado) {
            dispatch('adicionarIngrediente', ingrediente);
        } else {
            dispatch('removerIngrediente', ingrediente);
        }
    }
</script>

<button on:click={aoClicar}>
    <Tag ativa={selecionado}>{ingrediente}</Tag>
</button>


<style>
    button {
        cursor: pointer;
    }
</style>