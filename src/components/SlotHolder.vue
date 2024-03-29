<script>
import { toRefs, computed } from 'vue'
import {
  getImageUrl,
  getTraitName,
  getTraitRarity
} from '../helper/traitFinder'
export default {
  props: ['slots', 'resultItems', 'step', 'startAnimation', 'animationClass'],
  setup (props) {
    const { slots, resultItems, step, startAnimation, animationClass } = toRefs(props)
    const spinClass = computed(() => {
      return startAnimation.value ? {[animationClass.value]: startAnimation.value} : {};
    })
    return {
      slots,
      resultItems,
      step,
      startAnimation,
      getImageUrl,
      getTraitRarity,
      getTraitName,
      spinClass,
      animationClass,
    }
  }
}
</script>

<template>
  <div id="slot-holder" :class="spinClass">
    <div
      v-for="(slot, index) in slots"
      :key="index"
      class="slot"
      :id="'slot' + index"
    >
      <!-- body -->
      <template v-if="step == 1">
        <img :src="getImageUrl(slot.collection, slot.itemIndex)" />
        <div
          :class="'title ' + getTraitRarity(slot.collection, slot.itemIndex)"
        >
        {{ getTraitName(slot.collection, slot.itemIndex) }}
        </div>
      </template>

      <!-- helmets -->
      <template v-if="step == 2">
        <img :src="getImageUrl('body', resultItems[0])" />
        <img
          v-if="index != 1"
          :src="getImageUrl(slot.collection, slot.itemIndex)"
          style="position: absolute; left: 0"
        />
        <div
          v-if="index != 1"
          :class="'title ' + getTraitRarity(slot.collection, slot.itemIndex)"
        >
          {{ getTraitName(slot.collection, slot.itemIndex) }}
        </div>
      </template>

      <!-- gear -->
      <template v-if="step == 3">
        <img :src="getImageUrl('body', resultItems[0])" />
        <img
          :src="getImageUrl('helmets', resultItems[1])"
          style="position: absolute; left: 0"
        />
        <img
          v-if="index != 1"
          :src="getImageUrl(slot.collection, slot.itemIndex)"
          style="position: absolute; left: 0"
        />
        <div
          v-if="index != 1"
          :class="'title ' + getTraitRarity(slot.collection, slot.itemIndex)"
        >
          {{ getTraitName(slot.collection, slot.itemIndex) }}
        </div>
      </template>
      <!-- extra -->
      <template v-if="step == 4">
        <img :src="getImageUrl('body', resultItems[0])" />
        <img
          :src="getImageUrl('helmets', resultItems[1])"
          style="position: absolute; left: 0"
        />
        <img
          :src="getImageUrl('gear', resultItems[2])"
          style="position: absolute; left: 0"
        />
        <img
          v-if="index != 1"
          :src="getImageUrl(slot.collection, slot.itemIndex)"
          style="position: absolute; left: 0"
        />
        <div
          v-if="index != 1"
          :class="'title ' + getTraitRarity(slot.collection, slot.itemIndex)"
        >
          {{ getTraitName(slot.collection, slot.itemIndex) }}
        </div>
      </template>

      <!-- back -->
      <template v-if="step == 5">
        <img
          v-if="index != 1"
          :src="getImageUrl(slot.collection, slot.itemIndex)"
          style="position: absolute; left: 0"
        />
        <img
          :src="getImageUrl('body', resultItems[0])"
          style="position: absolute; left: 0"
        />
        <img
          :src="getImageUrl('helmets', resultItems[1])"
          style="position: absolute; left: 0"
        />
        <img
          :src="getImageUrl('gear', resultItems[2])"
          style="position: absolute; left: 0"
        />
        <img
          :src="getImageUrl('extra', resultItems[3])"
          style="position: absolute; left: 0"
        />
        <div
          v-if="index != 1"
          :class="'title ' + getTraitRarity(slot.collection, slot.itemIndex)"
        >
          {{ getTraitName(slot.collection, slot.itemIndex) }}
        </div>
      </template>

      <!-- background -->
      <template v-if="step == 6">
        <img
          v-if="index != 1"
          :src="getImageUrl(slot.collection, slot.itemIndex)"
          style="position: absolute; left: 0"
        />
        <img
          :src="getImageUrl('back', resultItems[4])"
          style="position: absolute; left: 0"
        />
        <img
          :src="getImageUrl('body', resultItems[0])"
          style="position: absolute; left: 0"
        />
        <img
          :src="getImageUrl('helmets', resultItems[1])"
          style="position: absolute; left: 0"
        />
        <img
          :src="getImageUrl('gear', resultItems[2])"
          style="position: absolute; left: 0"
        />
        <img
          :src="getImageUrl('extra', resultItems[3])"
          style="position: absolute; left: 0"
        />
        <div
          v-if="index != 1"
          :class="'title ' + getTraitRarity(slot.collection, slot.itemIndex)"
        >
          {{ getTraitName(slot.collection, slot.itemIndex) }}
        </div>
      </template>

      <!-- rerolls -->
      <!-- reroll body -->
      <template v-if="step == 11">
        <img
          :src="getImageUrl('background', resultItems[5])"
          style="position: absolute; left: 0"
        />
        <img
          :src="getImageUrl('back', resultItems[4])"
          style="position: absolute; left: 0"
        />
        <img
          v-if="index != 1"
          :src="getImageUrl(slot.collection, slot.itemIndex)"
          style="position: absolute; left: 0"
        />
        <img
          :src="getImageUrl('helmets', resultItems[1])"
          style="position: absolute; left: 0"
        />
        <img
          :src="getImageUrl('gear', resultItems[2])"
          style="position: absolute; left: 0"
        />
        <img
          :src="getImageUrl('extra', resultItems[3])"
          style="position: absolute; left: 0"
        />
        <div
          v-if="index != 1"
          :class="'title ' + getTraitRarity(slot.collection, slot.itemIndex)"
        >
          {{ getTraitName(slot.collection, slot.itemIndex) }}
        </div>
      </template>
      <!-- reroll helmet -->
      <template v-if="step == 12">
        <img
          :src="getImageUrl('background', resultItems[5])"
          style="position: absolute; left: 0"
        />
        <img
          :src="getImageUrl('back', resultItems[4])"
          style="position: absolute; left: 0"
        />
        <img
          :src="getImageUrl('body', resultItems[0])"
          style="position: absolute; left: 0"
        />
        <img
          v-if="index != 1"
          :src="getImageUrl(slot.collection, slot.itemIndex)"
          style="position: absolute; left: 0"
        />
        <img
          :src="getImageUrl('gear', resultItems[2])"
          style="position: absolute; left: 0"
        />
        <img
          :src="getImageUrl('extra', resultItems[3])"
          style="position: absolute; left: 0"
        />
        <div
          v-if="index != 1"
          :class="'title ' + getTraitRarity(slot.collection, slot.itemIndex)"
        >
          {{ getTraitName(slot.collection, slot.itemIndex) }}
        </div>
      </template>

      <!-- reroll gear -->
      <template v-if="step == 13">
        <img
          :src="getImageUrl('background', resultItems[5])"
          style="position: absolute; left: 0"
        />
        <img
          :src="getImageUrl('back', resultItems[4])"
          style="position: absolute; left: 0"
        />
        <img
          :src="getImageUrl('body', resultItems[0])"
          style="position: absolute; left: 0"
        />
        <img
          :src="getImageUrl('helmets', resultItems[1])"
          style="position: absolute; left: 0"
        />
        <img
          v-if="index != 1"
          :src="getImageUrl(slot.collection, slot.itemIndex)"
          style="position: absolute; left: 0"
        />
        <img
          :src="getImageUrl('extra', resultItems[3])"
          style="position: absolute; left: 0"
        />
        <div
          v-if="index != 1"
          :class="'title ' + getTraitRarity(slot.collection, slot.itemIndex)"
        >
          {{ getTraitName(slot.collection, slot.itemIndex) }}
        </div>
      </template>

      <!-- reroll extra -->
      <template v-if="step == 14">
        <img
          :src="getImageUrl('background', resultItems[5])"
          style="position: absolute; left: 0"
        />
        <img
          :src="getImageUrl('back', resultItems[4])"
          style="position: absolute; left: 0"
        />
        <img
          :src="getImageUrl('body', resultItems[0])"
          style="position: absolute; left: 0"
        />
        <img
          :src="getImageUrl('helmets', resultItems[1])"
          style="position: absolute; left: 0"
        />
        <img
          :src="getImageUrl('gear', resultItems[2])"
          style="position: absolute; left: 0"
        />
        <img
          v-if="index != 1"
          :src="getImageUrl(slot.collection, slot.itemIndex)"
          style="position: absolute; left: 0"
        />
        <div
          v-if="index != 1"
          :class="'title ' + getTraitRarity(slot.collection, slot.itemIndex)"
        >
          {{ getTraitName(slot.collection, slot.itemIndex) }}
        </div>
      </template>

      <!-- reroll back -->
      <template v-if="step == 15">
        <img
          :src="getImageUrl('background', resultItems[5])"
          style="position: absolute; left: 0"
        />
        <img
          v-if="index != 1"
          :src="getImageUrl(slot.collection, slot.itemIndex)"
          style="position: absolute; left: 0"
        />
        <img
          :src="getImageUrl('body', resultItems[0])"
          style="position: absolute; left: 0"
        />
        <img
          :src="getImageUrl('helmets', resultItems[1])"
          style="position: absolute; left: 0"
        />
        <img
          :src="getImageUrl('gear', resultItems[2])"
          style="position: absolute; left: 0"
        />
        <img
          :src="getImageUrl('extra', resultItems[3])"
          style="position: absolute; left: 0"
        />
        <div
          v-if="index != 1"
          :class="'title ' + getTraitRarity(slot.collection, slot.itemIndex)"
        >
          {{ getTraitName(slot.collection, slot.itemIndex) }}
        </div>
      </template>

      <!-- reroll background -->
      <template v-if="step == 16">
        <img
          v-if="index != 1"
          :src="getImageUrl(slot.collection, slot.itemIndex)"
          style="position: absolute; left: 0"
        />
        <img
          :src="getImageUrl('back', resultItems[4])"
          style="position: absolute; left: 0"
        />
        <img
          :src="getImageUrl('body', resultItems[0])"
          style="position: absolute; left: 0"
        />
        <img
          :src="getImageUrl('helmets', resultItems[1])"
          style="position: absolute; left: 0"
        />
        <img
          :src="getImageUrl('gear', resultItems[2])"
          style="position: absolute; left: 0"
        />
        <img
          :src="getImageUrl('extra', resultItems[3])"
          style="position: absolute; left: 0"
        />
        <div
          v-if="index != 1"
          :class="'title ' + getTraitRarity(slot.collection, slot.itemIndex)"
        >
          {{ getTraitName(slot.collection, slot.itemIndex) }}
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#slot-holder {
  will-change: transform;
  display: flex;
  padding-left: calc(50% - 90px);
  flex-direction: column;
  margin-top: -100px;
}

@keyframes blinker {
  50% {
    opacity: 0.5;
  }
}

.blink {
  border: 4px solid #D43280 !important; 
  width: 172px!important;
  border-radius: 3px;
  height: 172px!important;
  animation: blinker 2s linear infinite;
}

.slot {
  position: relative;
  z-index: 2;
  width: 180px;
  flex-shrink: 0;
  height: 180px;
  background-color: #0f1823;
  margin-bottom: 4px;
  float: left;
  // display: inline-block;
  img {
    width: 100%;
    height: 100%;
  }

  .title {
    // display: none;
    &.common {
      background-color: #1e7eb4;
    }
    &.rare {
      background-color: #6C43EE;
;
    }
    &.epic {
      background-color: #EE3772;
    }
    background-color: rgb(0, 51, 255);
    position: absolute;
    left: 0;
    bottom: 0;
    font-weight: 500;
    font-size: 13px;
    padding-top: 5px;
    padding-bottom: 5px;
    color: white;
    text-align: center;
    width: 100%;
  }
}
</style>
