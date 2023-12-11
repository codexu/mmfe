<script setup lang="ts">
import { Page } from 'ui';
import { ref } from 'vue';
import { name } from '../package.json';

const { APP_TITLE, APP_DESCRIPTION, APP_BASE_API_URL } = import.meta.env;

const envs = ref({
  APP_TITLE,
  APP_DESCRIPTION,
  APP_BASE_API_URL,
});
</script>

<template>
  <Page :name="name" :envs="envs" />
</template>
