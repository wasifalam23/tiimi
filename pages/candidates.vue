<template>
  <div class="flex flex-col h-full">
    <header class="mb-10 max-lg:mb-6 max-sm:mb-8">
      <div
        class="flex items-center justify-between max-xl:flex-col max-xl:items-start max-xl:gap-4 max-sm:flex-row"
      >
        <div class="flex items-center">
          <h3 class="text-2xl mr-6 max-xl:text-xl max-xl:mr-4 max-sm:hidden">
            56 Candidates
          </h3>

          <button
            class="flex items-center gap-1 border bg-white border-gray-300 px-5 py-2 text-gray-500 rounded-md max-xl:px-4 max-sm:p-2"
          >
            <FunnelIcon
              class="w-6 h-6 max-xl:w-5 max-xl:h-5 max-sm:w-6 max-sm:h-6"
            />
            <span class="text-base max-xl:text-sm max-sm:hidden">Filter</span>
          </button>
        </div>

        <div class="flex items-center">
          <div class="flex items-center gap-2 mr-6 max-xl:gap-1 max-xl:mr-5">
            <span class="text-2xl font-semibold max-xl:text-xl">3</span>
            <p class="text-base text-gray-500 max-xl:text-sm">Selected</p>
          </div>

          <button
            class="p-2 border border-gray-300 text-gray-500 bg-white rounded-md mr-5 hover:bg-gray-400 hover:text-white max-md:hidden"
          >
            <HandThumbDownIcon class="w-6 h-6" />
          </button>

          <div
            class="pr-5 mr-5 border-r border-gray-400 max-md:border-none max-md:mr-0"
          >
            <button
              class="p-2 border border-gray-300 bg-white text-gray-500 rounded-md hover:bg-gray-400 hover:text-white"
            >
              <EllipsisVerticalIcon class="w-6 h-6 font-semibold" />
            </button>
          </div>

          <button
            class="p-2 mr-5 border border-gray-300 bg-white text-gray-500 rounded-md hover:bg-gray-500 hover:text-white"
          >
            <ArrowDownTrayIcon class="w-6 h-6 font-semibold" />
          </button>

          <button
            class="p-2 mr-5 border border-gray-300 bg-white text-gray-500 rounded-md hover:bg-gray-500 hover:text-white max-md:hidden"
          >
            <PrinterIcon class="w-6 h-6 font-semibold" />
          </button>

          <button
            class="flex items-center gap-1 border-2 rounded-md border-black px-5 py-[.54rem] max-md:p-2"
          >
            <PlusIcon class="w-4 h-4 font-semibold max-md:w-5 max-md:h-5" />
            <span class="text-sm font-medium max-md:hidden">Add Candidate</span>
          </button>
        </div>
      </div>
    </header>

    <CandidatesTable />

    <footer class="mt-auto py-3 flex items-center justify-between mb-2">
      <div class="flex gap-4 items-center">
        <span class="text-gray-500 text-base max-xl:text-sm max-md:hidden"
          >View</span
        >

        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          class="text-gray-600 bg-white hover:bg-green-200 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-md text-sm px-4 py-2.5 text-center inline-flex items-center max-xl:px-3 max-xl:py-2"
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

        <span class="text-gray-500 text-base max-xl:text-sm max-lg:hidden"
          >Candidates per page</span
        >
      </div>

      <nav aria-label="Page navigation example">
        <ul class="inline-flex -space-x-px items-center gap-2">
          <li>
            <div class="flex items-center text-gray-500">
              <ChevronLeftIcon class="w-5 h-5 max-xl:w-4 max-xl:h-4" />
              <a
                href="#"
                class="pl-1 pr-2 py-2 ml-0 leading-tight text-base rounded-l-lg hover:text-gray-700 max-xl:text-sm"
                >Prev</a
              >
            </div>
          </li>
          <li>
            <a
              href="#"
              class="px-2 py-1 font-medium leading-tight bg-yellow-300 rounded-full hover:bg-yellow-400 max-xl:text-sm"
              >1</a
            >
          </li>
          <li>
            <a
              href="#"
              class="px-2 py-1 font-medium leading-tight rounded-full hover:bg-yellow-400 max-xl:text-sm"
              >2</a
            >
          </li>
          <li>
            <a
              href="#"
              class="px-2 py-1 font-medium leading-tight rounded-full hover:bg-yellow-400 max-xl:text-sm"
              >3</a
            >
          </li>
          <li>
            <a
              href="#"
              class="px-2 py-1 font-medium leading-tight rounded-full hover:bg-yellow-400 max-xl:text-sm"
              >...</a
            >
          </li>
          <li>
            <a
              href="#"
              class="px-2 py-1 font-medium leading-tight rounded-full hover:bg-yellow-400 max-xl:text-sm"
              >24</a
            >
          </li>

          <li>
            <div class="flex items-center text-gray-500">
              <a
                href="#"
                class="pl-1 pr-2 py-2 ml-0 leading-tight text-base rounded-l-lg hover:text-gray-700 max-xl:text-sm"
                >Next</a
              >
              <ChevronRightIcon class="w-5 h-5 max-xl:w-4 max-xl:h-4" />
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
