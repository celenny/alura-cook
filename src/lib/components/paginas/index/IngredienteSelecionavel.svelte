<!-- componente especializado -->
<!-- A especialização de componentes trata-se de uma estratégia que permite encapsular
melhor comportamentos específicos, além de organizar melhor os componentes. -->

<script lang="ts">
    import { minhaLista } from "$lib/stores/minhaLista";
    import Tag from "../../compartilhados/Tag.svelte";

    export let ingrediente: string;
    $: selecionado = $minhaLista.includes(ingrediente);

    function aoClicar() {
        if (!selecionado) {
            minhaLista.addIngrediente(ingrediente);
        } else {
            minhaLista.removeIngrediente(ingrediente);
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
