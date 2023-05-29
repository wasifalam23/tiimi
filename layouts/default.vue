<template>
  <div>
    <SideBar />
    <div class="p-0 sm:ml-64">
      <StatusBar />

      <div class="main-container flex">
        <slot />
        <div class="ml-auto">
          <TaskMenu />
        </div>
      </div>
    </div>
  </div>
</template>
