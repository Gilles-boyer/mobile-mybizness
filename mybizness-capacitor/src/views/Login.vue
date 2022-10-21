<template>
  <v-container fluid fill-height style="background-color: #04153b">
    <v-row justify="center" align="center" class="text-center mb-5">
      <v-form ref="form" v-model="valid" lazy-validation class="pa-0">
        <v-col cols="12">
          <v-img
            class="mx-auto"
            src="../assets/logo100x100.png"
            max-height="100"
            max-width="100"
          ></v-img>
        </v-col>
        <v-col cols="12" class="text-center mb-4">
          <h2 class="white--text">MyBizness</h2>
        </v-col>

        <v-col cols="12" class="py-0">
          <v-text-field
            class="pa-0"
            v-model="login.email"
            :rules="[rules.required, rules.min, rules.email]"
            single-line
            label="Email"
            solo
            rounded
          >
          </v-text-field>
        </v-col>
        <v-col cols="12" class="py-0">
          <v-text-field
            v-model="login.password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            single-line
            solo
            rounded
            label="Password"
          >
          </v-text-field>
        </v-col>

        <v-col cols="12">
          <v-btn
            :disabled="!valid"
            @click="tryLogin()"
            class="px-10 primary--text"
            rounded
            color="#9ca8c2"
          >
            Login
          </v-btn>
        </v-col>
      </v-form>
    </v-row>
  </v-container>
</template>
<script>
export default {
  methods: {
    tryLogin() {
      if (this.$refs.form.validate()) {
        console.log(this.login);
        this.$router.push("/home");
      }
    },
  },
  data() {
    return {
      valid: true,
      show1: false,
      login: {
        email: "",
        password: "",
      },
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        email: (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      },
    };
  },
};
</script>
