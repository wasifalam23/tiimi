<template>
  <div>
    <SideBar />
    <div class="p-0 sm:ml-64">
      <StatusBar />

      <div class="relative">
        <main
          class="main-container p-8 pb-0 w-full max-xl:p-6 max-xl:pb-0 max-sm:p-4"
        >
          <slot />
        </main>
        <div class="taskmenu absolute right-0 top-0 h-screen max-lg:hidden">
          <TaskMenu />
        </div>
      </div>
    </div>
  </div>
</template>
