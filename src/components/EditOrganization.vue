
<template>
  <div class="content-wpapper">
    <div class="edit">
      <div class="edit__header">
        <h2 class="edit__header__title">Организация</h2>
        <button class="edit__header__btn-cancel" @click="cancelEdit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.0463 2.33521C12.4932 1.88826 13.2179 1.88826 13.6648 2.33521C14.1117 2.78215 14.1117 3.50678 13.6648 3.95372L9.61851 8L13.6648 12.0463C14.1117 12.4932 14.1117 13.2179 13.6648 13.6648C13.2179 14.1117 12.4932 14.1117 12.0463 13.6648L8 9.61851L3.95372 13.6648C3.50678 14.1117 2.78215 14.1117 2.33521 13.6648C1.88826 13.2179 1.88826 12.4932 2.33521 12.0463L6.38149 8L2.33521 3.95372C1.88826 3.50678 1.88826 2.78215 2.33521 2.33521C2.78215 1.88826 3.50678 1.88826 3.95372 2.33521L8 6.38149L12.0463 2.33521Z"
              fill="#353535"
            />
          </svg>
          Отменить
        </button>
      </div>
      <form class="edit__form" @submit.prevent="addOrganization">
        <label class="edit__form__label" for="select">Тип</label>
        <div class="custom__select">
          <select
            class="edit__form__select"
            id="select"
            v-model="organizationSelect"
          >
            <option value="" disabled selected hidden>Санаторий</option>
            <option value="Школа">Школа</option>
            <option value="Детский сад">Детский сад</option>
            <option value="Больница">Больница</option>
            <option value="Университет">Университет</option>
          </select>
        </div>

        <label class="edit__form__label" for="name">Название организации</label>
        <input
          class="edit__form__input"
          v-model="organizationName"
          id="name"
          type="text"
          placeholder='Санаторий "Огонёк"'
        />

        <label
          class="edit__form__label edit__form__label_before"
          for="text-area"
          >Описание</label
        >
        <textarea
          class="edit__form__text-area"
          id="text-aria"
          placeholder='Санаторий "Огонёк"'
          v-model="organizationTextAria"
        >
        </textarea>
        <label class="edit__form__label" for="logo">Логотип</label>
        <div class="edit__form__file-input">
          <input
            class="edit__form__input-logo"
            type="file"
            id="logo"
            accept=".jpeg, .png, .webp, .svg"
            @change="handleLogoChange"
          />
          <label for="logo" class="edit__form__label-file">
            <img
              v-if="organizationLogo"
              :src="organizationLogo"
              alt="Логотип"
              class="edit__form__logo-thumbnail"
            />
            <p v-else class="edit__form__lable-file">
              Загрузите изображение или перетащите файл сюда.
              <span
                >Максимальный размер изображения 10 Мб. Допустимые форматы:
                .jpeg .png .webp .svg</span
              >
            </p>
          </label>
          <button class="edit__form__btn-upload" @click="uploadLogo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
            >
              <path
                d="M11.5 5H7.5V1C7.5 0.734784 7.39464 0.48043 7.20711 0.292893C7.01957 0.105357 6.76522 0 6.5 0C6.23478 0 5.98043 0.105357 5.79289 0.292893C5.60536 0.48043 5.5 0.734784 5.5 1V5H1.5C1.23478 5 0.98043 5.10536 0.792893 5.29289C0.605357 5.48043 0.5 5.73478 0.5 6C0.5 6.26522 0.605357 6.51957 0.792893 6.70711C0.98043 6.89464 1.23478 7 1.5 7H5.5V11C5.5 11.2652 5.60536 11.5196 5.79289 11.7071C5.98043 11.8946 6.23478 12 6.5 12C6.76522 12 7.01957 11.8946 7.20711 11.7071C7.39464 11.5196 7.5 11.2652 7.5 11V7H11.5C11.7652 7 12.0196 6.89464 12.2071 6.70711C12.3946 6.51957 12.5 6.26522 12.5 6C12.5 5.73478 12.3946 5.48043 12.2071 5.29289C12.0196 5.10536 11.7652 5 11.5 5Z"
                fill="#045CC4"
              /></svg>Загрузить
          </button>
        </div>
        <button class="edit__form__btn-save" type="submit">Сохранить</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
  
  data() {
    return {
      organizationSelect: "",
      organizationName: "",
      organizationTextAria: "",
      organizationLogo: null,
    };
  },
  created() {
    this.organizationSelect = this.$store.state.organizationSelect;
    this.organizationName = this.$store.state.organizationName;
    this.organizationTextAria = this.$store.state.organizationTextAria;
    this.organizationLogo = this.$store.state.organizationLogo;
  },
  computed: {
    ...mapState([
      'organizationSelect',
      'organizationName',
      'organizationTextAria',
      'organizationLogo'
    ]),
  },
  methods: {
    ...mapMutations(['setOrganizationData']),
    addOrganization() {
      if (this.organizationLogo !== null) {
        this.$router.push({
          name: "info",
          params: {
            organizationSelect: this.organizationSelect,
            organizationName: this.organizationName,
            organizationTextAria: this.organizationTextAria,
            organizationLogo: this.organizationLogo,
          },
        });
      } else {
        console.error("Отсутствует логотип организации.");
      }

      this.setOrganizationData({
      organizationSelect: this.organizationSelect,
      organizationName: this.organizationName,
      organizationTextAria: this.organizationTextAria,
      organizationLogo: this.organizationLogo,
    });
    },
    cancelEdit() {
      this.$router.push("/add");
    },
   
    uploadLogo() {
      document.getElementById("logo").click();
    },

    handleLogoChange(event) {
      const file = event.target.files[0];
      if (file) {
        const maxSizeInBytes = 1024 * 1024;
        if (file.size <= maxSizeInBytes) {
          const allowedFormats = [".jpeg", ".png", ".webp", ".svg"];
          const fileExtension = file.name.slice(
            ((file.name.lastIndexOf(".") - 1) >>> 0) + 2
          );
          if (allowedFormats.includes("." + fileExtension.toLowerCase())) {
            const image = new Image();
            image.src = URL.createObjectURL(file);
            image.onload = () => {
              const maxWidth = 164;
              const maxHeight = 164;
              if (image.width > maxWidth || image.height > maxHeight) {
                this.organizationLogo = URL.createObjectURL(file);
              } else {
                this.organizationLogo = URL.createObjectURL(file);
              }
            };
          } else {
            alert("Недопустимый формат файла.");
          }
        } else {
          alert("Превышен максимальный размер файла (1 Мб).");
        }
      }
    },
  },

  
};
</script>

<style lang="scss">
@import "../styles/styles.scss";
</style>
