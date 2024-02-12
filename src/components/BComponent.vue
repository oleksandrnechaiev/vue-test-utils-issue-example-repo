<script setup lang="ts">
    import { getSomething } from './someImport.ts';
    function startFetch() {
        getSomething({ someParam: 'sds' });
    }
    // This is not executed
    console.log('run in BComponent');
</script>

<template>
    <div>
        BComponent
        <button @click="startFetch">Click me</button>
    </div>
</template>
