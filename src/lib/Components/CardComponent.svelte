<script>
    export let titulo = ""
    export let desc = ""
    export let imgSrc = ""
</script>


<div class="flex flex-col lg:flex-row rounded-xl bg-cpink my-10 drop-shadow-lg">
    <div class=" flex p-5 items-center m-auto">
        <img src="{imgSrc}" alt="" class="w-64 rounded-full">
    </div>
    <div class="block p-8">
        <h2 class="text-left">{titulo}</h2>
        <p class="font-dosis text-xl">{desc}</p>
    </div>
</div>