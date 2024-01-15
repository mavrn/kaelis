<script setup lang="ts">
const searchValue = ref('');
</script>

<template>
  <Title>Kaelis</Title>
  <div class="header-fixed">
    <div class="wrapper">
      <TopBar v-model:search-value="searchValue" />
      KAELIS
    </div>
  </div>
</template>

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
