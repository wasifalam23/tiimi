<script setup>
import {
  ChevronDownIcon,
  ChevronUpDownIcon,
  EllipsisHorizontalIcon,
  StarIcon as SolidStartIcon,
} from '@heroicons/vue/24/solid';
import { StarIcon } from '@heroicons/vue/24/outline';
import p1 from '@/assets/images/pp-1.jpg';
import p2 from '@/assets/images/pp-2.jpg';
import p3 from '@/assets/images/pp-3.jpg';
import p4 from '@/assets/images/pp-4.jpg';
import p5 from '@/assets/images/pp-5.jpg';

import { Drawer } from 'flowbite';

onMounted(() => {
  // setup available elements
  const $buttonElement = document.querySelector('#button-open');
  const $drawerElement = document.querySelector('#drawer-right');
  const $closeButton = document.querySelector('#close-button');

  // set modal options

  const drawerOptions = {
    placement: 'right',
    backdrop: true,
    bodyScrolling: false,
    edge: false,
    edgeOffset: '',
    backdropClasses:
      'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30',
  };

  // create a new modal instance
  if ($drawerElement) {
    const drawer = new Drawer($drawerElement, drawerOptions);

    // set event listeners for the button to show the drawer
    $buttonElement.addEventListener('click', () => drawer.toggle());
    $closeButton.addEventListener('click', () => drawer.hide());
  }
});

const DUMMY_DATA = [
  {
    id: 1,
    candidate: {
      name: 'Darlene Robertson',
      image: p1,
    },
    rating: 0,
    stages: {
      state: 'Screening',
      value: 2,
      color: 'bg-green-800',
    },
    team: {
      self: 'Junior UI Designer',
      team: 'Design Team',
    },

    appliedDate: '01/03/2021',
    owner: {
      name: 'Kristin Watson',
      image: p2,
    },
  },
  {
    id: 2,
    candidate: {
      name: 'Cody Fisher',
      image: p3,
    },
    rating: 2,
    stages: {
      state: 'New Applied',
      value: 1,
      color: 'bg-emerald-400',
    },
    team: {
      self: 'Junior UX Designer',
      team: 'Design Team',
    },

    appliedDate: '13/03/2021',
    owner: {
      name: 'Albert Flores',
      image: p4,
    },
  },
  {
    id: 3,
    candidate: {
      name: 'Jenny Wilson',
      image: p4,
    },
    rating: 3,
    stages: {
      state: 'New Applied',
      value: 1,
      color: 'bg-emerald-400',
    },
    team: {
      self: 'Junior UX Designer',
      team: 'Design Team',
    },

    appliedDate: '13/03/2021',
    owner: {
      name: 'Albert Flores',
      image: p4,
    },
  },
];
</script>
<template>
  <div class="relative overflow-x-auto rounded-md">
    <SideDrawer />

    <table
      class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-collapse"
    >
      <thead class="text-sm text-gray-800 bg-white shadow-sm">
        <tr>
          <th scope="col" class="p-4 rounded-l-md">
            <div class="flex items-center">
              <input
                id="checkbox-all-search"
                type="checkbox"
                class="w-5 h-5 text-green-400 bg-gray-100 border-gray-300 focus:ring-white focus:ring-0"
              />
              <label for="checkbox-all-search" class="sr-only">checkbox</label>
            </div>
          </th>
          <th scope="col" class="px-3 py-3">
            <div class="flex items-center gap-1">
              <span>Candidate Name</span>
              <ChevronUpDownIcon class="w-4 h-4" />
            </div>
          </th>
          <th scope="col" class="px-3 py-3">
            <div class="flex items-center gap-1">
              <span>Rating</span>
              <ChevronUpDownIcon class="w-4 h-4" />
            </div>
          </th>
          <th scope="col" class="px-3 py-3">
            <div class="flex items-center gap-1">
              <span>Stages</span>
              <ChevronUpDownIcon class="w-4 h-4" />
            </div>
          </th>

          <th scope="col" class="px-3 py-3">
            <div class="flex items-center gap-1">
              <span>Team</span>
              <ChevronUpDownIcon class="w-4 h-4" />
            </div>
          </th>
          <th scope="col" class="px-3 py-3">
            <div class="flex items-center gap-1">
              <span>Applied date</span>
              <ChevronUpDownIcon class="w-4 h-4" />
            </div>
          </th>

          <th scope="col" class="px-3 py-3">
            <div class="flex items-center gap-1">
              <span>Owner</span>
              <ChevronUpDownIcon class="w-4 h-4" />
            </div>
          </th>

          <th scope="col" class="px-3 py-3 rounded-r-md">
            <div class="flex items-center gap-1">&nbsp;</div>
          </th>
        </tr>
      </thead>
      <tbody class="candidate-tbody">
        <CandidatesTableRow
          v-for="data in DUMMY_DATA"
          :key="data.id"
          :id="data.id"
          :candidate="data.candidate"
          :rating="data.rating"
          :stages="data.stages"
          :team="data.team"
          :appliedDate="data.appliedDate"
          :owner="data.owner"
        />

        <tr class="text-base bg-white border-b max-xl:text-sm">
          <td class="w-4 p-4">
            <div class="flex items-center">
              <input
                id="checkbox-table-search-1"
                type="checkbox"
                class="w-5 h-5 text-green-400 bg-gray-100 border-gray-300 focus:ring-white focus:ring-0"
              />
              <label for="checkbox-table-search-1" class="sr-only"
                >checkbox</label
              >
            </div>
          </td>
          <td
            scope="row"
            class="flex items-center px-3 py-5 text-gray-900 whitespace-nowrap"
          >
            <img
              class="w-10 h-10 rounded-full"
              src="@/assets/images/pp-4.jpg"
              alt="Jese image"
            />

            <p class="pl-3 truncate">Jenny Wilson</p>
          </td>
          <td class="px-3 py-4">
            <button
              class="flex items-center gap-1 border px-2 py-[.05rem] rounded-full"
            >
              <SolidStartIcon class="text-yellow-300 w-4 h-4" />
              <span class="text-gray-800 text-sm font-semibold">3.0</span>
            </button>
          </td>
          <td class="px-3 py-4">
            <div>
              <div class="flex items-center">
                <button class="flex items-center gap-1">
                  <span class="text-black">Design Challange</span>
                  <ChevronDownIcon class="w-4 h-4 text-black font-semibold" />
                </button>
              </div>

              <div class="flex items-center gap-1 mt-1">
                <button
                  class="bg-orange-400 px-3 text-sm text-white font-medium rounded-sm"
                >
                  1
                </button>
                <button
                  class="bg-orange-400 px-3 text-sm text-white font-medium rounded-sm"
                >
                  2
                </button>
                <button
                  class="bg-orange-400 px-3 text-sm text-white font-medium rounded-sm"
                >
                  3
                </button>
                <button
                  class="bg-gray-200 px-3 text-sm text-white font-medium rounded-sm"
                >
                  &nbsp;
                </button>
                <button
                  class="bg-gray-200 px-3 text-sm text-white font-medium rounded-sm"
                >
                  &nbsp;
                </button>
                <button
                  class="bg-gray-200 px-3 text-sm text-white font-medium rounded-sm"
                >
                  &nbsp;
                </button>
              </div>
            </div>
          </td>
          <td class="px-3 py-4">
            <div>
              <p class="text-black truncate">UX Researcher</p>
              <p class="text-sm">Design Team</p>
            </div>
          </td>

          <td class="px-3 py-4">
            <div class="text-black">28/08/2021</div>
          </td>

          <td
            scope="row"
            class="flex items-center px-3 py-5 text-gray-900 whitespace-nowrap"
          >
            <img
              class="w-10 h-10 rounded-full"
              src="@/assets/images/pp-2.jpg"
              alt="Jese image"
            />

            <p class="pl-3 truncate">Dianne Russell</p>
          </td>

          <td class="px-3 py-4">
            <button>
              <EllipsisHorizontalIcon class="w-6 h-6" />
            </button>
          </td>
        </tr>

        <tr class="text-base bg-white border-b max-xl:text-sm">
          <td class="w-4 p-4">
            <div class="flex items-center">
              <input
                id="checkbox-table-search-1"
                type="checkbox"
                class="w-5 h-5 text-green-400 bg-gray-100 border-gray-300 focus:ring-white focus:ring-0"
              />
              <label for="checkbox-table-search-1" class="sr-only"
                >checkbox</label
              >
            </div>
          </td>
          <td
            scope="row"
            class="flex items-center px-3 py-5 text-gray-900 whitespace-nowrap"
          >
            <img
              class="w-10 h-10 rounded-full"
              src="@/assets/images/pp-2.jpg"
              alt="Jese image"
            />

            <p class="pl-3 truncate">Diana Jane</p>
          </td>
          <td class="px-3 py-4">
            <button
              class="flex items-center gap-1 border px-2 py-[.05rem] rounded-full"
            >
              <SolidStartIcon class="text-yellow-300 w-4 h-4" />
              <span class="text-gray-800 text-sm font-semibold">5.0</span>
            </button>
          </td>
          <td class="px-3 py-4">
            <div>
              <div class="flex items-center">
                <button class="flex items-center gap-1">
                  <span class="text-black">Interview</span>
                  <ChevronDownIcon class="w-4 h-4 text-black font-semibold" />
                </button>
              </div>

              <div class="flex items-center gap-1 mt-1">
                <button
                  class="bg-violet-400 px-3 text-sm text-white font-medium rounded-sm"
                >
                  1
                </button>
                <button
                  class="bg-violet-400 px-3 text-sm text-white font-medium rounded-sm"
                >
                  2
                </button>
                <button
                  class="bg-violet-400 px-3 text-sm text-white font-medium rounded-sm"
                >
                  3
                </button>
                <button
                  class="bg-gray-200 px-3 text-sm text-white font-medium rounded-sm"
                >
                  &nbsp;
                </button>
                <button
                  class="bg-gray-200 px-3 text-sm text-white font-medium rounded-sm"
                >
                  &nbsp;
                </button>
                <button
                  class="bg-gray-200 px-3 text-sm text-white font-medium rounded-sm"
                >
                  &nbsp;
                </button>
              </div>
            </div>
          </td>
          <td class="px-3 py-4">
            <div>
              <p class="text-black truncate">UX Researcher</p>
              <p class="text-sm">Design Team</p>
            </div>
          </td>

          <td class="px-3 py-4">
            <div class="text-black">22/06/2021</div>
          </td>

          <td
            scope="row"
            class="flex items-center px-3 py-5 text-gray-900 whitespace-nowrap"
          >
            <img
              class="w-10 h-10 rounded-full"
              src="@/assets/images/pp-5.jpg"
              alt="Jese image"
            />

            <p class="pl-3 truncate">Ronald Richards</p>
          </td>

          <td class="px-3 py-4">
            <button>
              <EllipsisHorizontalIcon class="w-6 h-6" />
            </button>
          </td>
        </tr>

        <tr class="text-base bg-white border-b max-xl:text-sm">
          <td class="w-4 p-4">
            <div class="flex items-center">
              <input
                id="checkbox-table-search-1"
                type="checkbox"
                class="w-5 h-5 text-green-400 bg-gray-100 border-gray-300 focus:ring-white focus:ring-0"
              />
              <label for="checkbox-table-search-1" class="sr-only"
                >checkbox</label
              >
            </div>
          </td>
          <td
            scope="row"
            class="flex items-center px-3 py-5 text-gray-900 whitespace-nowrap"
          >
            <img
              class="w-10 h-10 rounded-full"
              src="@/assets/images/pp-1.jpg"
              alt="Jese image"
            />

            <p class="pl-3 truncate">Jacob Jones</p>
          </td>
          <td class="px-3 py-4">
            <button
              class="flex items-center gap-1 border px-2 py-[.05rem] rounded-full"
            >
              <StarIcon class="text-gray-300 w-4 h-4" />
              <span class="text-gray-500 text-sm">0.0</span>
            </button>
          </td>
          <td class="px-3 py-4">
            <div>
              <div class="flex items-center">
                <button class="flex items-center gap-1">
                  <span class="text-black">Screening</span>
                  <ChevronDownIcon class="w-4 h-4 text-black font-semibold" />
                </button>
              </div>

              <div class="flex items-center gap-1 mt-1">
                <button
                  class="bg-green-800 px-3 text-sm text-white font-medium rounded-sm"
                >
                  1
                </button>
                <button
                  class="bg-gray-200 px-3 text-sm text-white font-medium rounded-sm"
                >
                  &nbsp;
                </button>
                <button
                  class="bg-gray-200 px-3 text-sm text-white font-medium rounded-sm"
                >
                  &nbsp;
                </button>
                <button
                  class="bg-gray-200 px-3 text-sm text-white font-medium rounded-sm"
                >
                  &nbsp;
                </button>
                <button
                  class="bg-gray-200 px-3 text-sm text-white font-medium rounded-sm"
                >
                  &nbsp;
                </button>
                <button
                  class="bg-gray-200 px-3 text-sm text-white font-medium rounded-sm"
                >
                  &nbsp;
                </button>
              </div>
            </div>
          </td>
          <td class="px-3 py-4">
            <div>
              <p class="text-black truncate">Junior UI Designer</p>
              <p class="text-sm">Design Team</p>
            </div>
          </td>

          <td class="px-3 py-4">
            <div class="text-black">01/03/2021</div>
          </td>

          <td
            scope="row"
            class="flex items-center px-3 py-5 text-gray-900 whitespace-nowrap"
          >
            <img
              class="w-10 h-10 rounded-full"
              src="@/assets/images/pp-2.jpg"
              alt="Jese image"
            />

            <p class="pl-3 truncate">Kristin Watson</p>
          </td>

          <td class="px-3 py-4">
            <button>
              <EllipsisHorizontalIcon class="w-6 h-6" />
            </button>
          </td>
        </tr>

        <tr class="text-base bg-white border-b max-xl:text-sm">
          <td class="w-4 p-4">
            <div class="flex items-center">
              <input
                id="checkbox-table-search-1"
                type="checkbox"
                class="w-5 h-5 text-green-400 bg-gray-100 border-gray-300 focus:ring-white focus:ring-0"
              />
              <label for="checkbox-table-search-1" class="sr-only"
                >checkbox</label
              >
            </div>
          </td>
          <td
            scope="row"
            class="flex items-center px-3 py-5 text-gray-900 whitespace-nowrap"
          >
            <img
              class="w-10 h-10 rounded-full"
              src="@/assets/images/pp-4.jpg"
              alt="Jese image"
            />

            <p class="pl-3 truncate">Bessie Cooper</p>
          </td>
          <td class="px-3 py-4">
            <button
              class="flex items-center gap-1 border px-2 py-[.05rem] rounded-full"
            >
              <SolidStartIcon class="text-yellow-300 w-4 h-4" />
              <span class="text-gray-800 text-sm font-semibold">3.0</span>
            </button>
          </td>
          <td class="px-3 py-4">
            <div>
              <div class="flex items-center">
                <button class="flex items-center gap-1">
                  <span class="text-black">Design Challange</span>
                  <ChevronDownIcon class="w-4 h-4 text-black font-semibold" />
                </button>
              </div>

              <div class="flex items-center gap-1 mt-1">
                <button
                  class="bg-orange-400 px-3 text-sm text-white font-medium rounded-sm"
                >
                  1
                </button>
                <button
                  class="bg-orange-400 px-3 text-sm text-white font-medium rounded-sm"
                >
                  2
                </button>
                <button
                  class="bg-orange-400 px-3 text-sm text-white font-medium rounded-sm"
                >
                  3
                </button>
                <button
                  class="bg-gray-200 px-3 text-sm text-white font-medium rounded-sm"
                >
                  &nbsp;
                </button>
                <button
                  class="bg-gray-200 px-3 text-sm text-white font-medium rounded-sm"
                >
                  &nbsp;
                </button>
                <button
                  class="bg-gray-200 px-3 text-sm text-white font-medium rounded-sm"
                >
                  &nbsp;
                </button>
              </div>
            </div>
          </td>
          <td class="px-3 py-4">
            <div>
              <p class="text-black truncate">UX Researcher</p>
              <p class="text-sm">Design Team</p>
            </div>
          </td>

          <td class="px-3 py-4">
            <div class="text-black">28/08/2021</div>
          </td>

          <td
            scope="row"
            class="flex items-center px-3 py-5 text-gray-900 whitespace-nowrap"
          >
            <img
              class="w-10 h-10 rounded-full"
              src="@/assets/images/pp-2.jpg"
              alt="Jese image"
            />

            <p class="pl-3 truncate">Dianne Russell</p>
          </td>

          <td class="px-3 py-4">
            <button>
              <EllipsisHorizontalIcon class="w-6 h-6" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
