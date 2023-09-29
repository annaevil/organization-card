import { createStore } from 'vuex';

export default createStore ({
    state: {
      organizationSelect: "",
      organizationName: "",
      organizationTextAria: "",
      organizationLogo: null,
    },
    mutations: {
      setOrganizationData(state, payload) {
        state.organizationSelect = payload.organizationSelect;
        state.organizationName = payload.organizationName;
        state.organizationTextAria = payload.organizationTextAria;
        state.organizationLogo = payload.organizationLogo;
      }
    }
  });