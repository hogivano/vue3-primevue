<template>
<div class="home">
  <img alt="Vue logo" src="@/assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  <Card class="mx-10">
    <template #title>
      Advanced Card
    </template>
    <template #content>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
      quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
    </template>
    <template #footer>
      <Button icon="pi pi-check" label="Save" />
      <Button icon="pi pi-times" label="Cancel" class="p-button-secondary" style="margin-left: .5em" />
    </template>
  </Card>
</div>
</template>

<script lang="ts">
import {
  Options,
  Vue
} from 'vue-class-component';
import HelloWorld from '@/views/shared-components/HelloWorld.vue';
import Card from 'primevue/card';

@Options({
  components: {
    HelloWorld,
    Card
  },
  mounted() {
    this.test();
  },
  methods: {
    test() {
      const {
        x,
        y,
        ...z
      } = {
        x: 1,
        y: 2,
        a: 3,
        b: 4
      };
      console.log(x, y, z);
    }
  }
})
export default class Home extends Vue {}
</script>
