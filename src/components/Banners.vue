<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-indigo-600">
    <div class="px-3 py-3 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex flex-wrap items-center justify-between">
        <div class="flex items-center flex-1 w-0">
          <span class="flex p-2 bg-indigo-800 rounded-lg">
            <SpeakerphoneIcon class="w-6 h-6 text-white" aria-hidden="true" />
          </span>
          <p class="ml-3 font-medium text-white truncate">
            <span class="md:hidden"> We announced a new product! </span>
            <span class="hidden md:inline">
              Big news! We're excited to announce a brand new product.
            </span>
          </p>
        </div>
        <div
          class="flex-shrink-0 order-3 w-full mt-2 sm:order-2 sm:mt-0 sm:w-auto"
        >
          <a
            href="#"
            class="flex items-center justify-center px-4 py-2 text-sm font-medium text-indigo-600 bg-white border border-transparent rounded-md shadow-sm hover:bg-indigo-50"
          >
            Learn more
          </a>
        </div>
        <div class="flex-shrink-0 order-2 sm:order-3 sm:ml-3">
          <button
            type="button"
            class="flex p-2 -mr-1 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
          >
            <span class="sr-only">Dismiss</span>
            <XIcon class="w-6 h-6 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { SpeakerphoneIcon, XIcon } from "@heroicons/vue/outline";
</script>
