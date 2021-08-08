<template>
  <v-container>
    <v-dialog v-model="dialog" transition="scroll-y-transition" max-width="550">
      <v-card class="pa-5">
        <v-form lazy-validation @submit.prevent="Create" ref="form">
          <v-row justify="center">
            <v-col cols="12" md="6">
              <v-text-field
                placeholder="John Tom"
                label="Name *"
                v-model.trim="name"
                :rules="[rules.required]"
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                placeholder="example@test.com"
                label="Email *"
                v-model.trim="email"
                :rules="[rules.required, rules.email]"
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="message"
                :rules="[rules.required]"
                label="Message"
                placeholder="Tell us what you think..."
                outlined
              ></v-textarea>
            </v-col>
            <v-col cols="12">
              <v-btn type="submit" min-width="200" dark class="pg"
                >Submit</v-btn
              >
            </v-col>
          </v-row>
        </v-form>
      </v-card>
    </v-dialog>

    <!-- Thank you box -->
    <v-dialog
      persistent
      transition="scroll-y-transition"
      v-model="thanks"
      max-width="350"
    >
      <v-card class="pa-5">
        <v-avatar class="pg mx-auto d-block" size="70">
          <v-icon dark large>mdi-gift</v-icon>
        </v-avatar>
        <v-card-text class="text-center mt-7 mb-3">
          Thank you for sharing your thoughts with us.
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn depressed class="text-capitalize" nuxt to="/">Continue</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import FormMix from "~/mixins/FormMixinx";
export default {
  mixins: [FormMix],
  props: ["type", "showDialog"],
  data() {
    return {
      name: null,
      email: null,
      message: null,
      thanks: false
    };
  },
  computed: {
    dialog: {
      get() {
        return this.showDialog;
      },
      set(v) {
        this.$emit("CloseSuggest", false);
      }
    }
  },
  methods: {
    async Create() {
      if (!this.$refs.form.validate()) return;
      try {
        let p = await this.$axios.post("/suggestions", {
          name: this.name,
          message: this.message,
          email: this.email,
          suggestionType: this.type
        });
        this.thanks = true;
      } catch (error) {
        alert("Something went wrong.");
        console.log(error);
      }
    }
  }
};
</script>

<style></style>
