<script setup>
import { COLORS } from '~/constants/colors';

const props = defineProps({
  dish: Object,
});
function ratingToStars(rating) {
  if (rating < 0 || rating > 100) {
    return 'Invalid rating';
  }
  const stars = Math.round((rating / 100) * 10) / 2;
  const starsString = stars.toFixed(1).replace('.', '');
  return starsString;
}
</script>

<template>
  <div class="wrapper" :style="{ 'border-color': COLORS[dish.rarity] }">
    <div class="container w-full h-full flex-col flex items-center">
      <div
        class="rarity text-3xl w-full py-3"
        :style="{ 'background-color': COLORS[dish.rarity] }"
      >
        {{ dish.rarity.toUpperCase() }}
      </div>
      <img class="picture" :src="dish.picture" />
      <div class="name text-4xl px-3">{{ dish.name }}</div>
      <div class="w-11/12 bottom-row pb-3 flex-row flex justify-between">
        <div class="cooking-time">
          <img class="w-14 h-14" src="~/assets/time.png" />
          <span class="time-span">{{ dish.cookingTime }}</span>
        </div>
        <img
          class="w-28 h-8"
          :src="'/' + ratingToStars(props.dish.rating) + 'stars.png'"
        />
        <img
          class="w-14 h-14"
          :src="'/diff-' + props.dish.difficulty + '-placeholder.png'"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  aspect-ratio: 0.6;
  border: 5px solid;
  border-radius: 30px;
  box-shadow: 0 0 13px black;
}

.rarity {
  position: relative;
  border-bottom-left-radius: 50% 20%;
  border-bottom-right-radius: 50% 20%;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  color: white;
}

.rarity,
.name {
  font-family: 'Paytone One';
}
.cooking-time {
  position: relative;
  display: inline-block;
}

.time-span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  color: #000;
}

.container {
  justify-content: space-between;
}
.picture {
  object-fit: cover;
  width: 220px;
  height: 220px;
  border-radius: 30%;
}

.bottom-row {
  align-items: center;
}
</style>
