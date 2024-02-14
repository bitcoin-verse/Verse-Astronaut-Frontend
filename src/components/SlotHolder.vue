<script>
import { toRefs } from 'vue'
import {
  getImageUrl,
  getTraitName,
  getTraitRarity
} from '../helper/traitFinder'
export default {
  props: ['slots', 'resultItems', 'step', 'startAnimation'],
  setup (props) {
    const { slots, resultItems, step, startAnimation } = toRefs(props)
    return {
      slots,
      resultItems,
      step,
      startAnimation,
      getImageUrl,
      getTraitRarity,
      getTraitName
    }
  }
}
</script>

<template>
  <div id="slot-holder" :class="{ 'spin-anim': startAnimation }">
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
        <div class="title" v-if="index != 1">Body Title</div>
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
        <div class="title" v-if="index != 1">Gear Title</div>
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
.slot {
  position: relative;
  z-index: 2;
  width: 176px;
  flex-shrink: 0;
  height: 176px;
  background-color: #0f1823;
  margin-bottom: 4px;
  border: 2px solid #000000;
  float: left;
  // display: inline-block;
  img {
    width: 100%;
    height: 100%;
  }

  .title {
    &.common {
      background-color: rgb(0, 51, 255);
    }
    &.rare {
      background-color: #a120a8;
    }
    &.epic {
      background-color: #fb0a3e;
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
