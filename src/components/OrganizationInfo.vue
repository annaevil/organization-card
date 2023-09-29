<template>
  <div class="content-wpapper">
    <div class="info">
      <div class="info__header">
        <h1 class="info__header__title">Организация</h1>
        <button class="info__header__btn-edit" @click="editOrganization">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M5.38626 11.5322C5.19852 11.7212 4.94311 11.8276 4.67669 11.8276H3C2.72386 11.8276 2.5 11.6037 2.5 11.3276V9.62927C2.5 9.36526 2.6044 9.11197 2.79043 8.92463L9.48806 2.18018C9.60266 2.06481 9.75807 2 9.92011 2C10.0822 2 10.2376 2.06481 10.3522 2.18018L12.081 3.92048C12.1956 4.03589 12.2599 4.19238 12.2599 4.35556C12.2599 4.51874 12.1956 4.67524 12.081 4.79064L5.38626 11.5322ZM2.5 13.3846C2.5 13.0447 2.77552 12.7692 3.11539 12.7692H12.8846C13.2245 12.7692 13.5 13.0447 13.5 13.3846C13.5 13.7245 13.2245 14 12.8846 14H3.11538C2.77552 14 2.5 13.7245 2.5 13.3846Z"
          fill="#353535"
        /></svg>
        Редактировать
    </button>
      </div>
    <div class="info__form">
      <div class="info__form__list"><span>Тип</span>{{ organizationSelect }}</div>
      <div class="info__form__list"><span>Название</span> {{ organizationName }}</div>
      <div class="info__form__list"><span>Описание</span> {{ organizationTextAria }}</div>
      <div class="info__form__list">
        <span class="info__form__list-item_size">Логотип</span>
        <img
          v-if="organizationLogo"
          :src="organizationLogo"
          class="logo-image"
          alt="logo"
        />
      </div>
    </div>
   
    </div>
    
  </div>
</template>

<script>

import { mapState } from 'vuex';
export default {
  props: [
    "organizationSelect",
    "organizationName",
    "organizationTextAria",
    "organizationLogo",
  ],
  methods: {
    editOrganization() {
      this.$router.push("/edit");
    },
  },

  computed: {
    ...mapState([
      'organizationSelect',
      'organizationName',
      'organizationTextAria',
      'organizationLogo'
    ]),
  },
};
</script>

<style lang="scss">
@import "../styles/styles.scss";
</style>
