<script setup>
import { Tabs, initTabs } from 'flowbite';

import {
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  StarIcon as SolidStartIcon,
} from '@heroicons/vue/24/solid';
import {
  ChatBubbleBottomCenterTextIcon,
  EnvelopeIcon,
} from '@heroicons/vue/24/outline';

onMounted(() => {
  initTabs();
});
</script>

<template>
  <div
    id="drawer-right"
    class="fixed top-0 right-0 z-50 h-screen overflow-y-auto transition-transform translate-x-full bg-white w-1/2"
    tabindex="-1"
    aria-labelledby="drawer-right-label"
  >
    <header class="bg-slate-200 px-5 py-6">
      <div class="flex justify-between">
        <div class="flex items-center gap-4">
          <div class="relative">
            <img
              class="w-14 h-14 rounded-full"
              src="@/assets/images/pp-1.jpg"
              alt=""
            />

            <button
              class="flex items-center gap-1 shadow-md bg-white px-1 rounded-full absolute bottom-[.01rem]"
            >
              <SolidStartIcon class="w-3 h-3 text-yellow-300" />
              <span class="text-xs">4.0</span>
              <ChevronDownIcon class="w-3 h-3" />
            </button>
          </div>

          <div>
            <div class="flex items-center gap-2">
              <h3 class="font-medium text-lg">Cody Fisher</h3>
              <span
                class="bg-green-100 border rounded-md border-green-400 text-green-600 text-sm px-2"
                >Active</span
              >
            </div>

            <p class="text-sm text-slate-500 mb-2">Design Team - UI Designer</p>
            <div class="flex gap-1 items-center">
              <div
                class="bg-orange-400 w-7 flex items-center justify-center text-sm text-white font-medium rounded-sm`"
              >
                1
              </div>
              <div
                class="bg-orange-400 w-7 flex items-center justify-center text-sm text-white font-medium rounded-sm`"
              >
                2
              </div>
              <div
                class="bg-gray-400 w-7 flex items-center justify-center text-sm text-white font-medium rounded-sm`"
              >
                &nbsp;
              </div>
              <div
                class="bg-gray-400 w-7 flex items-center justify-center text-sm text-white font-medium rounded-sm`"
              >
                &nbsp;
              </div>
              <div
                class="bg-gray-400 w-7 flex items-center justify-center text-sm text-white font-medium rounded-sm`"
              >
                &nbsp;
              </div>
              <div
                class="bg-gray-400 w-7 flex items-center justify-center text-sm text-white font-medium rounded-sm`"
              >
                &nbsp;
              </div>
            </div>
          </div>
        </div>

        <div class="flex gap-6 items-start">
          <div class="flex items-center gap-3">
            <button class="bg-white p-1.5 shadow-sm rounded-sm">
              <ChevronLeftIcon class="text-slate-500 w-4 h-4" />
            </button>
            <button class="bg-white p-1.5 shadow-sm rounded-sm">
              <ChevronRightIcon class="text-slate-500 w-4 h-4" />
            </button>
          </div>
          <button
            class="flex gap-1 items-center shadow-sm bg-white p-1.5 rounded-sm"
          >
            <ChatBubbleBottomCenterTextIcon class="text-slate-500 w-4 h-4" />
            <span class="text-xs text-gray-600 font-medium">Send Message</span>
          </button>
          <button
            class="flex gap-1 items-center shadow-sm bg-white p-1.5 rounded-sm"
          >
            <EnvelopeIcon class="text-slate-500 w-4 h-4" />
            <span class="text-xs text-gray-600 font-medium">Send Email</span>
          </button>
        </div>
      </div>
    </header>

    <div class="mb-4 border-b border-gray-200 dark:border-gray-700 mt-3">
      <ul
        class="flex flex-wrap -mb-px text-sm font-medium text-center"
        id="myTab"
        data-tabs-toggle="#myTabContent"
        role="tablist"
      >
        <li class="mr-2 ml-6" role="presentation">
          <button
            class="inline-block p-4 border-b-2 rounded-t-lg uppercase"
            id="details-tab"
            data-tabs-target="#details"
            type="button"
            role="tab"
            aria-controls="details"
            aria-selected="false"
          >
            Details
          </button>
        </li>
        <li class="mr-2" role="presentation">
          <button
            class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 uppercase"
            id="resume-tab"
            data-tabs-target="#resume"
            type="button"
            role="tab"
            aria-controls="resume"
            aria-selected="false"
          >
            Resume
          </button>
        </li>
        <li class="mr-2" role="presentation">
          <button
            class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 uppercase"
            id="pipeline-tab"
            data-tabs-target="#pipeline"
            type="button"
            role="tab"
            aria-controls="pipeline"
            aria-selected="false"
          >
            hiring pipeline
          </button>
        </li>
        <li role="presentation">
          <button
            class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 uppercase"
            id="interviews-tab"
            data-tabs-target="#interviews"
            type="button"
            role="tab"
            aria-controls="interviews"
            aria-selected="false"
          >
            interviews
          </button>
        </li>
      </ul>
    </div>

    <div id="myTabContent">
      <div
        class="hidden p-4 rounded-lg dark:bg-gray-800"
        id="details"
        role="tabpanel"
        aria-labelledby="details-tab"
      >
        details
      </div>
      <div
        class="hidden p-4 rounded-lg dark:bg-gray-800"
        id="resume"
        role="tabpanel"
        aria-labelledby="resume-tab"
      >
        resume
      </div>
      <div
        class="hidden p-4 rounded-lg dark:bg-gray-800"
        id="pipeline"
        role="tabpanel"
        aria-labelledby="pipeline-tab"
      >
        pipeline
      </div>
      <div
        class="hidden p-4 rounded-lg dark:bg-gray-800"
        id="interviews"
        role="tabpanel"
        aria-labelledby="interviews-tab"
      >
        interviews
      </div>
    </div>
  </div>
</template>
