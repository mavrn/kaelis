<script setup>
import { createClient } from '@supabase/supabase-js';
import { useSearchValueStore } from '~/store/searchValue';
import {useSupabaseStore} from '~/store/supabase'

const { searchValue } = storeToRefs(useSearchValueStore());
const {supabase} = storeToRefs(useSupabaseStore())

const config = useRuntimeConfig();
const router = useRouter();

watch(
  () => searchValue.value,
  () => {
    router.push({
      path: '/results',
      query: { search: encodeURIComponent(searchValue.value) },
    });
  }
);

onMounted(() => {
  supabase.value = createClient(config.public.url, config.public.public_key);
})
</script>

<template>
  <Title>Kaelis</Title>
  <div class="header-fixed">
    <div class="wrapper">
      <TopBar v-model:search-value="searchValue" />
      <NuxtPage></NuxtPage>
    </div>
  </div>
</template>

<style scoped>
body {
  margin: auto;
  font-weight: 300;
  background: white;
  line-height: 200%;
}
.header-fixed {
  margin: auto;
  display: block;
}

.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  box-sizing: inherit;
}
</style>
<style>
.show-bigger-than-lg-flex {
  display: none;
  @media (min-width: 1101px) {
    display: flex;
  }
}

.show-bigger-than-lg-block {
  display: none;
  @media (min-width: 1101px) {
    display: block;
  }
}

.show-smaller-than-lg-flex {
  display: none;
  @media (max-width: 1100px) {
    display: flex;
  }
}

.show-smaller-than-lg-block {
  display: none;
  @media (max-width: 1100px) {
    display: block;
  }
}

.show-bigger-than-md-flex {
  display: none;
  @media (min-width: 769px) {
    display: flex;
  }
}

.show-bigger-than-md-block {
  display: none;
  @media (min-width: 769px) {
    display: block;
  }
}

.show-smaller-than-md-flex {
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
}

.show-smaller-than-md-block {
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
}

.show-bigger-than-sm-flex {
  display: none;
  @media (min-width: 501px) {
    display: flex;
  }
}

.show-bigger-than-sm-block {
  display: none;
  @media (min-width: 501px) {
    display: block;
  }
}

.show-smaller-than-sm-flex {
  display: none;
  @media (max-width: 500px) {
    display: flex;
  }
}

.show-smaller-than-sm-block {
  display: none;
  @media (max-width: 500px) {
    display: block;
  }
}

.show-between-sm-md {
  display: none;
  @media (min-width: 501px) and (max-width: 768px) {
    display: flex;
  }
}
</style>
