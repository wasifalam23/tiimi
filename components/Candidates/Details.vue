<script setup>
import { Tabs, initTabs } from 'flowbite';
import { useCandidate } from '~/composables/useCandidate';

import {
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  StarIcon as SolidStartIcon,
  ArrowDownTrayIcon,
} from '@heroicons/vue/24/solid';
import {
  ChatBubbleBottomCenterTextIcon,
  EnvelopeIcon,
  PencilSquareIcon,
  LinkIcon,
  PrinterIcon,
} from '@heroicons/vue/24/outline';

const { data } = defineProps(['data']);

onMounted(() => {
  initTabs();
});

const { currentCandidate } = useCandidate();
console.log(currentCandidate.value);
watch(data.age, () => {
  console.log(dataR);
});
</script>

<template>
  <div
    id="drawer-right"
    class="fixed top-0 right-0 z-50 h-screen overflow-y-auto transition-transform translate-x-full bg-white w-[45%]"
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
        <div class="flex flex-col gap-4">
          <div class="rounded border border-slate-300">
            <div
              class="flex justify-between items-center px-4 py-2 border-b border-b-slate-300"
            >
              <h3 class="text-sm font-semibold">Basic Information</h3>
              <div class="flex gap-1 items-center">
                <PencilSquareIcon class="w-6 h-6 text-slate-700" />
                <span class="text-sm text-slate-700 font-normal"
                  >Edit Info</span
                >
              </div>
            </div>

            <div class="p-4 grid grid-cols-[40fr_60fr] gap-y-4">
              <div>
                <span class="text-slate-500 text-sm font-medium">Name</span>
                <p class="text-sm font-semibold text-gray-700">Cody Fisher</p>
              </div>
              <div>
                <span class="text-slate-500 text-sm font-medium">Email</span>
                <p class="text-sm font-semibold text-gray-700">
                  example@email.com
                </p>
              </div>
              <div>
                <span class="text-slate-500 text-sm font-medium">Origin</span>
                <p class="text-sm font-semibold text-gray-700">Sourced</p>
              </div>
              <div>
                <span class="text-slate-500 text-sm font-medium">Phone</span>
                <p class="text-sm font-semibold text-gray-700">+62 7583-9749</p>
              </div>
              <div>
                <span class="text-slate-500 text-sm font-medium"
                  >Candidate ID</span
                >
                <p class="text-sm font-semibold text-gray-700">TM_3_CFP</p>
              </div>
              <div>
                <span class="text-slate-500 text-sm font-medium">Website</span>
                <p class="text-sm font-semibold text-gray-700">
                  www.example.com
                </p>
              </div>
              <div>
                <span class="text-slate-500 text-sm font-medium">Address</span>
                <p class="text-sm font-semibold text-gray-700">
                  abc Street, 12347
                </p>
              </div>
            </div>
          </div>

          <div class="rounded border border-slate-300">
            <div
              class="flex justify-between items-center px-4 py-2 border-b border-b-slate-300"
            >
              <h3 class="text-sm font-semibold">Professional Details</h3>
              <div class="flex gap-1 items-center">
                <PencilSquareIcon class="w-6 h-6 text-slate-700" />
                <span class="text-sm text-slate-700 font-normal"
                  >Edit Info</span
                >
              </div>
            </div>

            <div class="p-4 grid grid-cols-[40fr_60fr] gap-y-4">
              <div>
                <span class="text-slate-500 text-sm font-medium"
                  >Current Job Title</span
                >
                <p class="text-sm font-semibold text-gray-700">
                  UI/UX Designer
                </p>
              </div>
              <div>
                <span class="text-slate-500 text-sm font-medium"
                  >Highest Qualification Held</span
                >
                <p class="text-sm font-semibold text-gray-700">
                  Bachelors in Engineering
                </p>
              </div>
              <div>
                <span class="text-slate-500 text-sm font-medium"
                  >Expected Sallery</span
                >
                <p class="text-sm font-semibold text-gray-700">-</p>
              </div>
              <div>
                <span class="text-slate-500 text-sm font-medium"
                  >Current Sallery</span
                >
                <p class="text-sm font-semibold text-gray-700">-</p>
              </div>
              <div>
                <span class="text-slate-500 text-sm font-medium"
                  >Experience in Years</span
                >
                <p class="text-sm font-semibold text-gray-700">3 Year</p>
              </div>
              <div>
                <span class="text-slate-500 text-sm font-medium">Skype ID</span>
                <p class="text-sm font-semibold text-gray-700">cody_fisher</p>
              </div>
              <div>
                <span class="text-slate-500 text-sm font-medium"
                  >Address Info</span
                >
                <p class="text-sm font-semibold text-gray-700">
                  abc Street, 12347
                </p>
              </div>
              <div>
                <span class="text-slate-500 text-sm font-medium"
                  >Skill Set</span
                >

                <div class="flex items-center gap-2">
                  <div class="bg-blue-300 rounded-full">
                    <p
                      class="text-xs font-medium py-[.15rem] px-2 text-gray-800"
                    >
                      Html
                    </p>
                  </div>
                  <div class="bg-blue-300 rounded-full">
                    <p
                      class="text-xs font-medium py-[.15rem] px-2 text-gray-800"
                    >
                      Css
                    </p>
                  </div>
                  <div class="bg-blue-300 rounded-full">
                    <p
                      class="text-xs font-medium py-[.15rem] px-2 text-gray-800"
                    >
                      Sketching
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="hidden p-4 rounded-lg dark:bg-gray-800"
        id="resume"
        role="tabpanel"
        aria-labelledby="resume-tab"
      >
        <div>
          <div class="flex items-center gap-1 mb-4">
            <LinkIcon class="w-5 h-5 text-slate-600" />
            <p class="text-sm font-medium">Cody_Fisher_Resume.pdf</p>
          </div>

          <div class="p-4 bg-slate-200">
            <div class="bg-white shadow-md pt-2 pr-2 pl-6 pb-6">
              <header class="flex justify-end mb-2">
                <div class="flex gap-1 rounded-sm">
                  <div class="border border-slate-400 w-fit p-1">
                    <PrinterIcon class="w-5 h-5 text-gray-700" />
                  </div>
                  <div class="border border-slate-400 w-fit p-1 rounded-sm">
                    <ArrowDownTrayIcon class="w-5 h-5 text-gray-700" />
                  </div>
                </div>
              </header>

              <div>
                <div>
                  <div class="flex justify-between items-center">
                    <p class="text-base font-semibold">Cody Fisher</p>
                    <span class="text-xs text-cyan-600 font-medium"
                      >example@email.com</span
                    >
                  </div>
                  <p class="text-sm">
                    UI/UX Designer with Human Centered Design Approach
                  </p>
                </div>

                <div class="mt-3">
                  <h3 class="font-medium text-sm">Profile</h3>
                  <p class="text-xs text-gray-700 font-medium">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Animi nihil quam id? Possimus, repellendus illo
                    necessitatibus assumenda adipisci delectus totam Animi nihil
                    quam id? Possimus, repellendus illo necessitatibus assumenda
                    adipisci delectus totam
                  </p>
                </div>

                <div class="mt-4 border-b border-b-slate-200 pb-3">
                  <h3 class="font-medium text-sm mb-1">Experience</h3>
                  <p class="text-xs font-medium text-gray-700">
                    Marketing Manager
                  </p>
                  <div class="flex justify-between mb-2">
                    <p class="text-xs text-gray-500">San Francisco USA</p>
                    <p class="text-xs text-gray-500">
                      Feb 2017 - currently employed
                    </p>
                  </div>
                  <ul class="text-xs list-disc ml-4">
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Natus aspernatur voluptatem placeat error sapiente
                      voluptatum?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Natus aspernatur voluptatem placeat error
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Natus aspernatur voluptatem placeat error sapiente
                      voluptatum? Natus aspernatur voluptatem placeat error
                      sapiente voluptatum?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </li>
                  </ul>
                </div>

                <div class="mt-4">
                  <h3 class="font-medium text-sm mb-1">Analyst</h3>
                  <p class="text-xs font-medium text-gray-700">
                    Marketing Manager
                  </p>
                  <div class="flex justify-between mb-2">
                    <p class="text-xs text-gray-500">San Francisco USA</p>
                    <p class="text-xs text-gray-500">
                      Feb 2017 - currently employed
                    </p>
                  </div>
                  <ul class="text-xs list-disc ml-4">
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Natus aspernatur voluptatem placeat error sapiente
                      voluptatum?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Natus aspernatur voluptatem placeat error
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Natus aspernatur voluptatem placeat error sapiente
                      voluptatum? Natus aspernatur voluptatem placeat error
                      sapiente voluptatum?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </li>
                  </ul>
                </div>

                <div class="mt-4">
                  <h3 class="font-medium text-sm mb-1">Education</h3>
                  <p class="text-xs font-medium text-gray-700">
                    MSc. Stratgic Marketing
                  </p>
                  <div class="flex justify-between mb-2">
                    <p class="text-xs text-gray-500">
                      Liberty school of management
                    </p>
                    <p class="text-xs text-gray-500">Feb 2017 - Sept 2017</p>
                  </div>
                  <ul class="text-xs list-disc ml-4">
                    <li>Graduate with education</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
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
