<script setup>
  useState('categories', () => {
    return [
      { id: 'pony', title: 'Poneys' },
      { id: 'horse', title: 'Chevaux' },
      { id: 'other', title: 'Autres' },
    ]
  })
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>