<template>
  <div>
    <ResultsGrid
      :isLoaded="isLoaded"
      cardType="dish"
      :update="update"
      :results="results"
    ></ResultsGrid>
  </div>
</template>

<script setup>
import { useSearchValueStore } from '~/store/searchValue';
import { useSupabaseStore } from '~/store/supabase';
const { searchValue } = storeToRefs(useSearchValueStore());

const { supabase } = storeToRefs(useSupabaseStore());
const results = ref([]);
const isLoaded = ref(false);
const isFetching = ref(false);

async function initialSearchUnl() {
  console.log('called');

  if (isFetching.value) {
    console.log('denied.');
    return;
  }
  isFetching.value = true;
  const { data, error } = await supabase.value.rpc('search_dishes', {
    search_query: searchValue.value,
    limit_results: 10,
    offset_value: 0,
  });
  isFetching.value = false;

  if (!error) {
    console.log('initial with ', 0, 10, searchValue.value);
    console.log('got', data);
    results.value = data;
    if (data.length < 10) {
      isLoaded.value = true;
    }
  }
}

async function updateUnl() {
  console.log('called');
  if (isLoaded.value || isFetching.value) {
    console.log('denied.');
    return;
  }
  isFetching.value = true;
  const { data, error } = await supabase.value.rpc('search_dishes', {
    search_query: searchValue.value,
    limit_results: 10,
    offset_value: results.value.length,
  });
  isFetching.value = false;
  if (!error) {
    console.log('updated with ', results.value.length, 10, searchValue.value);
    console.log('got', data);
    results.value.push(...data);
    if (data.length < 10) {
      isLoaded.value = true;
    }
  }
}

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

const initialSearch = debounce(initialSearchUnl, 1000);
const update = debounce(updateUnl, 100);

watch(
  () => supabase.value,
  async () => {
    if (supabase.value) {
      initialSearchUnl();
    }
  }
);

watch(
  () => searchValue.value,
  async () => {
    if (supabase.value) {
      isLoaded.value = false;
      results.value = [];
      initialSearch();
    }
  }
);
</script>

<style lang="scss" scoped></style>
