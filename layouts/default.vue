<template>
  <div>
    <SideBar />
    <div class="p-0 sm:ml-64">
      <StatusBar />

      <div class="main-container flex">
        <main class="p-8 w-full">
          <slot />
        </main>
        <div class="ml-auto">
          <TaskMenu />
        </div>
      </div>
    </div>
  </div>
</template>
