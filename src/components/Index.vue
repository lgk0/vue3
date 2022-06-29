<template>
  <div
    v-if="$route.params.userName === 'admin'"
    class="grid content-around text-xl text-slate-500 justify-items-center"
  >
    <div class="h-10 hover:text-blue-600">
      <router-link to="/SignIn">SignInAndRegistration</router-link>
    </div>
    <div class="h-10 hover:text-blue-600">
      <router-link to="/Nav">Nav</router-link>
    </div>
    <div class="h-10 hover:text-blue-600">
      <router-link to="/Pagination">Pagination</router-link>
    </div>
    <div class="h-10 hover:text-blue-600">
      <router-link to="/Dropdowns">Dropdowns</router-link>
    </div>
    <div class="h-10 hover:text-blue-600">
      <router-link to="/DescriptionLists">DescriptionLists</router-link>
    </div>
    <div class="h-10 hover:text-blue-600">
      <router-link to="/WithDividersDropdowns"
        >WithDividersDropdowns</router-link
      >
    </div>
    <div class="h-10 hover:text-blue-600">
      <router-link to="/StackedLayouts">StackedLayouts</router-link>
    </div>
    <div class="h-10 hover:text-blue-600">
      <router-link to="/FormLayouts">FormLayouts</router-link>
    </div>
    <div class="h-10 hover:text-blue-600">
      <router-link to="/SlideOvers">SlideOvers</router-link>
    </div>
    <div class="h-10 hover:text-blue-600">
      <router-link to="/PageHeadings">PageHeadings</router-link>
    </div>
    <div class="h-10 hover:text-blue-600">
      <router-link to="/SelectMenus">SelectMenus</router-link>
    </div>
    <div class="h-10 hover:text-blue-600">
      <router-link to="/Modals">Modals</router-link>
    </div>
    <div class="h-10 hover:text-blue-600">
      <router-link to="/Avatars">Avatars</router-link>
    </div>
    <div class="h-10 hover:text-blue-600">
      <router-link to="/InputGroups">InputGroups</router-link>
    </div>
    <div class="h-10 hover:text-blue-600">
      <router-link to="/ProductLists">ProductLists</router-link>
    </div>
    <div class="h-10 hover:text-blue-600">
      <router-link to="/CategoryPreviews">CategoryPreviews</router-link>
    </div>
    <div class="h-10 hover:text-blue-600">
      <router-link to="/ProductQuickviews">ProductQuickviews</router-link>
    </div>
    <div class="h-10 hover:text-blue-600">
      <router-link to="/ProductFeatures">ProductFeatures</router-link>
    </div>
    <div class="h-10 hover:text-blue-600">
      <router-link to="/StoreNavigation">StoreNavigation</router-link>
    </div>
    <div class="h-10 hover:text-blue-600">
      <router-link to="/ProductOverviews">ProductOverviews</router-link>
    </div>
    <div class="h-10 hover:text-blue-600">
      <router-link to="/ShoppingCarts">ShoppingCarts</router-link>
    </div>
    <div class="h-10 hover:text-blue-600">
      <router-link to="/CategoryFilters">CategoryFilters</router-link>
    </div>
    <div class="h-10 hover:text-blue-600">
      <router-link to="/SimpleProductLists">SimpleProductLists</router-link>
    </div>
    <div class="h-10 hover:text-blue-600">
      <router-link to="/PromoSections">PromoSections</router-link>
    </div>
    <div class="h-10 hover:text-blue-600">
      <router-link to="/Headers">Headers</router-link>
    </div>
    <div class="h-10 hover:text-blue-600">
      <router-link to="/FeatureSections">FeatureSections</router-link>
    </div>
    <div class="h-10 hover:text-blue-600">
      <router-link to="/Banners">Banners</router-link>
    </div>
    <div class="h-10 hover:text-blue-600">
      <router-link to="/HeroSections">HeroSections</router-link>
    </div>
    <div class="h-10 hover:text-blue-600">
      <router-link to="/CTASections">CTASections</router-link>
    </div>
    <div class="h-10 hover:text-blue-600">
      <router-link to="/Demo">Demo</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Index",
});
</script>
<style></style>
