<template>
  <div class="flex flex-col h-full">
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

        <button
          class="p-2 border border-gray-300 text-gray-500 bg-white rounded-sm mr-5 hover:bg-gray-400 hover:text-white"
        >
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

    <footer class="mt-auto py-4 flex items-center justify-between">
      <div class="flex gap-4 items-center">
        <span class="text-gray-500 text-base">View</span>

        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          class="text-gray-600 bg-white hover:bg-green-200 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-md text-sm px-4 py-2.5 text-center inline-flex items-center"
          type="button"
        >
          10
          <ChevronDownIcon class="w-4 h-4 ml-2" />
        </button>
        <!-- Dropdown menu -->
        <div
          id="dropdown"
          class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            class="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >1</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >2</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >3</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >4</a
              >
            </li>
          </ul>
        </div>

        <span class="text-gray-500 text-base">Candidates per page</span>
      </div>

      <nav aria-label="Page navigation example">
        <ul class="inline-flex -space-x-px items-center gap-2">
          <li>
            <div class="flex items-center text-gray-500">
              <ChevronLeftIcon class="w-5 h-5" />
              <a
                href="#"
                class="pl-1 pr-2 py-2 ml-0 leading-tight text-base rounded-l-lg hover:text-gray-700"
                >Prev</a
              >
            </div>
          </li>
          <li>
            <a
              href="#"
              class="px-2 py-1 font-medium leading-tight bg-yellow-300 rounded-full hover:bg-yellow-400"
              >1</a
            >
          </li>
          <li>
            <a
              href="#"
              class="px-2 py-1 font-medium leading-tight rounded-full hover:bg-yellow-400"
              >2</a
            >
          </li>
          <li>
            <a
              href="#"
              class="px-2 py-1 font-medium leading-tight rounded-full hover:bg-yellow-400"
              >3</a
            >
          </li>
          <li>
            <a
              href="#"
              class="px-2 py-1 font-medium leading-tight rounded-full hover:bg-yellow-400"
              >...</a
            >
          </li>
          <li>
            <a
              href="#"
              class="px-2 py-1 font-medium leading-tight rounded-full hover:bg-yellow-400"
              >24</a
            >
          </li>

          <li>
            <div class="flex items-center text-gray-500">
              <a
                href="#"
                class="pl-1 pr-2 py-2 ml-0 leading-tight text-base rounded-l-lg hover:text-gray-700"
                >Next</a
              >
              <ChevronRightIcon class="w-5 h-5" />
            </div>
          </li>
        </ul>
      </nav>
    </footer>
  </div>
</template>

<script setup>
import {
  FunnelIcon,
  HandThumbDownIcon,
  EllipsisVerticalIcon,
  ArrowDownTrayIcon,
  PrinterIcon,
  ChevronDownIcon,
} from '@heroicons/vue/24/outline';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusIcon,
} from '@heroicons/vue/24/solid';
</script>
