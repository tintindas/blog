<script context="module">
    const data = import.meta.glob("./posts/*/*/*.md")
    
    export const load =  async () => {
        const allMetadata = []
        for (let path in data) {
        const {metadata} = await data[path]()
            allMetadata.push({path, metadata})
        }
        console.log(allMetadata);

        return {
            props: {allMetadata}
        }
    }
</script>

<script lang="ts">
import NavBar from "../components/NavBar.svelte";

export let allMetadata:MetaData[]
</script>

<div>
    <NavBar />
    <main>
        <ul>
            {#each allMetadata as {path, metadata}}
                <li>
                    <a href={path.replace(".md", "")}>{metadata.title}</a>
                </li>
            {/each}
        </ul>
    </main>
</div>

<style>
    main {
        width: 70vw;
        padding: 3rem;
        margin: 0 auto;
    }
</style>
