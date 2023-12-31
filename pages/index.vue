<script lang="ts" setup>
// https://nuxt.com/docs/guide/directory-structure/pages

// this should auto-import but ˇ^ˇ
import { useFetch } from '#imports'

interface Data {
  name: string
}

const { data } = await useFetch<Data>('/api/hello')
</script>

<template>
  <div body>
    <div v-if="data" m-a w-fit p-5 text-2xl font-bold>
      Hello, {{ data.name }}
    </div>
    <NuxtWelcome />
  </div>
</template>
