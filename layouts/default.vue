<script setup>
  import { ShoppingBagIcon } from '@heroicons/vue/outline'

  const { totalProducts } = useCart()
  const categories = useCategories()


  const menuCategoryItems = categories.value.map(category => {
    return {
      path: '/category/' + category.id,
      title: category.title
    }
  })

  const menuItems = [
    { path: '/', title: 'Accueil' },
    ...menuCategoryItems
  ]
</script>

<template>
  <div class="flex h-full">
    
    <!-- START: SIDEBAR -->
    <div class="fixed top-0 bottom-0 left-0 w-64 py-5 bg-primary text-primary-content">

      <h1 class="mt-5 px-5 text-2xl font-bold flex items-center justify-between">
        <span>Augalo Merch</span>
        <div class="indicator" @click="$router.push('/cart')">
          <span class="indicator-item badge badge-primary">{{ totalProducts }}</span>
          <button class="btn btn-square btn-outline btn-secondary">
            <ShoppingBagIcon class="w-6"/>
          </button> 
        </div>
      </h1>

      <ul class="menu w-full mt-10 px-0">
        <li v-for="menuItem in menuItems" :class="menuItem.path === $route.path ? 'bordered' : 'hover-bordered'">
          <NuxtLink :to="menuItem.path">
            {{ menuItem.title }}
          </NuxtLink>
        </li>
      </ul>

    </div>
    <!--  END : SIDEBAR -->

    <!-- START: PAGE -->
    <div class="w-full pl-64">
      <slot />
    </div>
    <!-- END: PAGE -->

  </div>
</template>

<style scoped>
  .menu li.hover-bordered a:hover, .menu li.bordered a {
    @apply border-primary-content
  }
</style>