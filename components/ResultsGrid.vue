<template>
  <div class="block" ref="scroller">
    <div class="inner">
      <ul class="grid-releases">
        <li v-for="result in results" class="release-item col-3">
          <DishCard v-if="cardType == 'dish'" :dish="result" />
          <IngredientCard
            v-else-if="result && cardType == 'ingredient'"
            :artist="result"
          ></IngredientCard>
          <EquipmentCard
            v-else-if="result && result && cardType == 'equipment'"
            :user="result"
          ></EquipmentCard>
        </li>
        <li v-for="i in 10" :key="i" v-if="!isLoaded">
          <Skeleton class="skeleton" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  results: Object,
  update: Function,
  cardType: String,
  isLoaded: Boolean,
});

//simple method debouncer
const debounce = (func, delay) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

/**
 * Handles the infinite scroll and lazy loading. If the user is scrolled past a certain threshold, calles the passed in update function.
 * Is debounced as too many calls lag the page.
 */
function handleScroll() {
  const loadingThreshold = window.innerWidth < 600 ? 55 : 70;
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight || document.body.scrollHeight;
  const clientHeight =
    document.documentElement.clientHeight || document.body.clientHeight;

  const percentageScrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
  if (percentageScrolled > loadingThreshold) {
    props.update();
  }
}
const handleDebouncedScroll = debounce(handleScroll, 100);

onMounted(() => {
  window.addEventListener('scroll', handleDebouncedScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleDebouncedScroll);
});
</script>

<style scoped>
Section {
  flex: 1;
  display: block;
}

.block {
  margin-top: clamp(0px, 3vh, 20px);
  margin-left: clamp(0px, 3vw, 100px);
  margin-right: clamp(0px, 3vw, 100px);
}

.inner {
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
}

.grid-releases {
  --minthumb: 300px;
  @media (max-width: 480px) {
    --minthumb: 200px;
  }
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--minthumb), 1fr));
  grid-auto-flow: row dense;
  grid-gap: 20px 30px;
  padding-bottom: 30px;
}

.release-item {
  list-style: none;
  display: list-item;
  text-align: center;
}

.skeleton {
  width: 100%;
  position: relative;
  border-radius: 30px;
  aspect-ratio: 0.6;
}
</style>
