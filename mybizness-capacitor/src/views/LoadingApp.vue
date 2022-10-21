<template>
  <v-container fluid fill-height style="background-color: #04153b">
    <v-row justify="center" align="center">
      <v-col cols="12">
        <v-img
          class="mx-auto"
          src="../assets/logo100x100.png"
          max-height="150"
          max-width="150"
        ></v-img>
      </v-col>
      <v-col class="text-center">
        <h1 class="white--text">MyBizness</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  mounted () {
    this.init();
  },
  methods: {
    init() {
      setTimeout(() => {
        this.$router.push('/login');
      },2000);
    },
  },
  name: "LoadingApp",
};
</script>
