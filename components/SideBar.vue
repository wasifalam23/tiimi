<script setup>
import {
  Squares2X2Icon,
  InboxArrowDownIcon,
  CalendarIcon,
  BriefcaseIcon,
  UsersIcon,
  ViewColumnsIcon,
  WindowIcon,
  UserIcon,
  BuildingOfficeIcon,
  ChartPieIcon,
  Cog6ToothIcon,
} from '@heroicons/vue/24/solid';

import { Drawer } from 'flowbite';

onMounted(() => {
  // setup available elements
  const $buttonElement = document.querySelector('#button');
  const $drawerElement = document.querySelector('#sidebar');
  const $closeButtons = document.querySelectorAll('#closeButton');

  // set drawer options
  const drawerOptions = {
    backdropClasses:
      'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
  };

  // create a new drawer instance
  if ($drawerElement) {
    const drawer = new Drawer($drawerElement, drawerOptions);

    // set event listeners for the button to show the drawer
    $buttonElement.addEventListener('click', () => drawer.toggle());
    $closeButtons.forEach((el) => {
      el.addEventListener('click', () => drawer.hide());
    });
  }
});
</script>

<template>
  <button
    id="button"
    type="button"
    class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  >
    <span class="sr-only">Open sidebar</span>
    <svg
      class="w-6 h-6"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clip-rule="evenodd"
        fill-rule="evenodd"
        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
      ></path>
    </svg>
  </button>

  <aside
    id="sidebar"
    class="fixed top-0 left-0 z-50 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-900">
      <h2 class="text-3xl font-medium p-2 text-white mb-2">tiimi</h2>
      <ul class="space-y-2 font-medium">
        <li>
          <NuxtLink
            id="closeButton"
            to="/"
            class="flex items-center p-2 rounded-lg text-white hover:bg-gray-700"
          >
            <Squares2X2Icon class="w-6 h-6 text-gray-500" />
            <span class="ml-3">Dashboard</span>
          </NuxtLink>
        </li>

        <li>
          <NuxtLink
            id="closeButton"
            to="/inbox"
            class="flex items-center p-2 rounded-lg text-white hover:bg-gray-700"
          >
            <InboxArrowDownIcon
              class="w-6 h-6 text-gray-500 transition duration-75"
            />
            <span class="flex-1 ml-3 whitespace-nowrap">Inbox</span>
            <!-- <span
              class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300"
              >3</span
            > -->
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            id="closeButton"
            to="/recruitment"
            class="flex items-center p-2 rounded-lg text-white hover:bg-gray-700"
          >
            <CalendarIcon
              class="w-6 h-6 text-gray-500 transition duration-75"
            />
            <span class="flex-1 ml-3 whitespace-nowrap">Calendar & Todos</span>
          </NuxtLink>
        </li>

        <h4
          class="text-gray-600 text-sm font-semibold uppercase px-2 pt-5 pb-2"
        >
          Recruitment
        </h4>

        <li>
          <NuxtLink
            id="closeButton"
            class="flex items-center p-2 rounded-lg text-white hover:bg-gray-700"
            to="/jobs"
          >
            <BriefcaseIcon
              class="w-6 h-6 text-gray-500 transition duration-75"
            />
            <span class="ml-3">Jobs</span></NuxtLink
          >
        </li>

        <li>
          <NuxtLink
            id="closeButton"
            class="flex items-center p-2 rounded-lg text-white hover:bg-gray-700"
            to="/candidates"
          >
            <UsersIcon class="w-6 h-6 text-gray-500 transition duration-75" />
            <span class="ml-3">Candidates</span></NuxtLink
          >
        </li>

        <li>
          <NuxtLink
            id="closeButton"
            class="flex items-center p-2 rounded-lg text-white hover:bg-gray-700"
            to="/referrals"
          >
            <ViewColumnsIcon
              class="w-6 h-6 text-gray-500 transition duration-75"
            />

            <span class="ml-3">My Referrals</span></NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            id="closeButton"
            class="flex items-center p-2 rounded-lg text-white hover:bg-gray-700"
            to="/career"
          >
            <WindowIcon class="w-6 h-6 text-gray-500 transition duration-75" />
            <span class="ml-3">Career Site</span></NuxtLink
          >
        </li>

        <h4
          class="text-gray-600 text-sm font-semibold uppercase px-2 pt-5 pb-2"
        >
          organization
        </h4>

        <li>
          <NuxtLink
            id="closeButton"
            class="flex items-center p-2 rounded-lg text-white hover:bg-gray-700"
            to="/employee"
          >
            <UserIcon class="w-6 h-6 text-gray-500 transition duration-75" />

            <span class="ml-3">Employee</span></NuxtLink
          >
        </li>

        <li>
          <NuxtLink
            id="closeButton"
            class="flex items-center p-2 rounded-lg text-white hover:bg-gray-700"
            to="/structure"
          >
            <BuildingOfficeIcon
              class="w-6 h-6 text-gray-500 transition duration-75"
            />
            <span class="ml-3">Structure</span></NuxtLink
          >
        </li>

        <li>
          <NuxtLink
            id="closeButton"
            class="flex items-center p-2 rounded-lg text-white hover:bg-gray-700"
            to="/report"
          >
            <ChartPieIcon
              class="w-6 h-6 text-gray-500 transition duration-75"
            />
            <span class="ml-3">Report</span></NuxtLink
          >
        </li>

        <li>
          <NuxtLink
            id="closeButton"
            class="flex items-center p-2 rounded-lg text-white hover:bg-gray-700"
            to="/settings"
          >
            <Cog6ToothIcon
              class="w-6 h-6 text-gray-500 transition duration-75"
            />

            <span class="ml-3">Settings</span></NuxtLink
          >
        </li>
      </ul>
    </div>
  </aside>
</template>
