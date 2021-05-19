<template>
<main class="layout-wrapper">
  <router-view v-slot="{ Component }">
    <transition name="cust" enter-active-class="animate__animated animate__delay-1s animate__fast animate__fadeInRight" leave-active-class="animate__animated animate__fadeOutRight animate__faster">
      <component :is="Component" ref="bodyMain" />
    </transition>
  </router-view>
  <ConfirmDialog></ConfirmDialog>
</main>
<transition name="load-transition" enter-active-class="animate__animated animate__fast animate__fadeIn" leave-active-class="animate__animated animate__fadeOut animate__faster">
  <div class="w-screen h-screen flex items-center" v-if="$store.state.loading.show" style="background: rgba(0, 0, 0, 0.2); z-index: 1049; position: fixed; top: 0">
    <ProgressSpinner class="h-16" />
  </div>
</transition>
</template>
<style src="@/assets/styles/scss/layout.scss" lang="scss"></style>
