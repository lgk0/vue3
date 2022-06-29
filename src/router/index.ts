import type { App } from "vue";

import { createRouter, createWebHashHistory } from "vue-router";

import Index from "@/components/Index.vue";

import SignInAndRegistration from "@/components/SignInAndRegistration.vue";
import Nav from "@/components/Nav.vue";
import Pagination from "@/components/Pagination.vue";
import Dropdowns from "@/components/Dropdowns.vue";
import DescriptionLists from "@/components/DescriptionLists.vue";
import WithDividersDropdowns from "@/components/WithDividersDropdowns.vue";
import StackedLayouts from "@/components/StackedLayouts.vue";
import FormLayouts from "@/components/FormLayouts.vue";
import SlideOvers from "@/components/SlideOvers.vue";
import PageHeadings from "@/components/PageHeadings.vue";
import SelectMenus from "@/components/SelectMenus.vue";
import Modals from "@/components/Modals.vue";
import Avatars from "@/components/Avatars.vue";
import InputGroups from "@/components/InputGroups.vue";
import ProductLists from "@/components/ProductLists.vue";
import CategoryPreviews from "@/components/CategoryPreviews.vue";
import ProductQuickviews from "@/components/ProductQuickviews.vue";
import ProductFeatures from "@/components/ProductFeatures.vue";
import StoreNavigation from "@/components/StoreNavigation.vue";
import ProductOverviews from "@/components/ProductOverviews.vue";
import ShoppingCarts from "@/components/ShoppingCarts.vue";
import CategoryFilters from "@/components/CategoryFilters.vue";
import SimpleProductLists from "@/components/SimpleProductLists.vue";
import PromoSections from "@/components/PromoSections.vue";
import Headers from "@/components/Headers.vue";
import FeatureSections from "@/components/Headers.vue";
import Banners from "@/components/Banners.vue";
import HeroSections from "@/components/HeroSections.vue";
import CTASections from "@/components/CTASections.vue";
import Demo from "@/components/Demo.vue";

const routes = [
  { path: "/", component: Index },
  { path: "/:userName", component: Index },
  { path: "/SignIn", name: "SignIn", component: SignInAndRegistration },
  { path: "/Nav", component: Nav },
  { path: "/Pagination", component: Pagination },
  { path: "/Dropdowns", component: Dropdowns },
  { path: "/DescriptionLists", component: DescriptionLists },
  { path: "/WithDividersDropdowns", component: WithDividersDropdowns },
  { path: "/StackedLayouts", component: StackedLayouts },
  { path: "/FormLayouts", component: FormLayouts },
  { path: "/SlideOvers", component: SlideOvers },
  { path: "/PageHeadings", component: PageHeadings },
  { path: "/SelectMenus", component: SelectMenus },
  { path: "/Modals", component: Modals },
  { path: "/Avatars", component: Avatars },
  { path: "/InputGroups", component: InputGroups },
  { path: "/ProductLists", component: ProductLists },
  { path: "/CategoryPreviews", component: CategoryPreviews },
  { path: "/ProductQuickviews", component: ProductQuickviews },
  { path: "/ProductFeatures", component: ProductFeatures },
  { path: "/StoreNavigation", component: StoreNavigation },
  { path: "/ProductOverviews", component: ProductOverviews },
  { path: "/ShoppingCarts", component: ShoppingCarts },
  { path: "/CategoryFilters", component: CategoryFilters },
  { path: "/SimpleProductLists", component: SimpleProductLists },
  { path: "/PromoSections", component: PromoSections },
  { path: "/Headers", component: Headers },
  { path: "/FeatureSections", component: FeatureSections },
  { path: "/Banners", component: Banners },
  { path: "/HeroSections", component: HeroSections },
  { path: "/CTASections", component: CTASections },
  { path: "/Demo", component: Demo },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export function setupRouter(app: App) {
  app.use(router);
}
