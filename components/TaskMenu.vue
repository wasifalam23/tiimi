<template>
  <aside class="bg-white h-full shadow-sm border-t px-3">
    <div class="py-6 border-b flex items-center justify-center">
      <button
        class="flex justify-center items-center bg-blue-500 p-2 rounded-full border-8 border-blue-100"
      >
        <DocumentCheckIcon class="w-6 h-6 text-white" />
      </button>
    </div>

    <div class="py-6 border-b flex items-center justify-center">
      <button
        class="flex justify-center items-center bg-orange-400 p-2 rounded-full border-8 border-orange-100"
      >
        <DocumentTextIcon class="w-6 h-6 text-white" />
      </button>
    </div>

    <div class="py-6 flex items-center justify-center">
      <button
        class="flex justify-center items-center bg-teal-400 p-2 rounded-full border-8 border-teal-100"
      >
        <FolderIcon class="w-6 h-6 text-white" />
      </button>
    </div>

    <div class="py-6 flex items-center justify-center">
      <button
        class="flex justify-center items-center p-2 rounded-full hover:bg-gray-300"
      >
        <PlusIcon class="w-7 h-7 text-gray-600" />
      </button>
    </div>
  </aside>
</template>

<script setup>
import {
  DocumentCheckIcon,
  DocumentTextIcon,
  FolderIcon,
  PlusIcon,
} from '@heroicons/vue/24/outline';
</script>
