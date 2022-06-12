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
    export let allMetadata:MetaData[]
</script>

<main>
    {#each allMetadata as {path, metadata}}
        <li>
            <a href={path.replace(".md", "")}>{metadata.title}</a>
        </li>
    {/each}
</main>
