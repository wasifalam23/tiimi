<template>
  <div>
    <header class="flex items-center mb-10">
      <h3 class="text-2xl mr-6">56 Candidates</h3>

      <button
        class="flex items-center gap-1 border bg-white border-gray-300 px-5 py-2 text-gray-500 rounded-sm"
      >
        <FunnelIcon class="w-6 h-6" />
        <span class="text-base">Filter</span>
      </button>

      <div class="ml-auto flex items-center">
        <div class="flex items-center gap-2 mr-6">
          <span class="text-2xl font-semibold">3</span>
          <p class="text-base text-gray-500">Selected</p>
        </div>

        <button class="p-2 border border-gray-300 bg-white rounded-sm mr-5">
          <HandThumbDownIcon class="w-6 h-6" />
        </button>

        <div class="pr-5 mr-5 border-r border-gray-400">
          <button
            class="p-2 border border-gray-300 bg-white text-gray-500 rounded-sm hover:bg-gray-400 hover:text-white"
          >
            <EllipsisVerticalIcon class="w-6 h-6 font-semibold" />
          </button>
        </div>

        <button
          class="p-2 mr-5 border border-gray-300 bg-white text-gray-500 rounded-sm hover:bg-gray-500 hover:text-white"
        >
          <ArrowDownTrayIcon class="w-6 h-6 font-semibold" />
        </button>

        <button
          class="p-2 mr-5 border border-gray-300 bg-white text-gray-500 rounded-sm hover:bg-gray-500 hover:text-white"
        >
          <PrinterIcon class="w-6 h-6 font-semibold" />
        </button>

        <button
          class="flex items-center gap-1 border-2 rounded-md border-black px-5 py-[.54rem]"
        >
          <PlusIcon class="w-4 h-4 font-semibold" />
          <span class="text-sm font-medium">Add Candidate</span>
        </button>
      </div>
    </header>

    <CandidatesTable />
  </div>
</template>

<script setup>
import {
  FunnelIcon,
  HandThumbDownIcon,
  EllipsisVerticalIcon,
  ArrowDownTrayIcon,
  PrinterIcon,
} from '@heroicons/vue/24/outline';
import { PlusIcon } from '@heroicons/vue/24/solid';
</script>
