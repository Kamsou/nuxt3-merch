<script setup>
  const route = useRoute()
  const categories = useCategories()
  const categoryName = route.params.categoryName

  const { data: products, pending, error } = await useLazyFetch(`http://localhost:3001/products/?category=${categoryName}`)
</script>

<template>
  <div>

    <div v-if="products" class="p-5">
      <h1 class="text-5xl py-5">Catégorie : {{ categories.find(category => category.id === categoryName).title }}</h1>
      <cards-container v-if="products && products.length > 0" class="mt-10">
        <product-card
          v-for="{id, name, price, imageName} in products"
          :id="id"
          :name="name"
          :price="price"
          :imageSrc="'/assets/images/'+ imageName"
          />
      </cards-container>
      <p v-else>
        Aucun produit dans cette catégorie.
      </p>
    </div>

    <hero-loader v-if="pending" />

  </div>
</template>