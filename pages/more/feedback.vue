<template>
  <v-container class="mt-md-10">
    <br />
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-form lazy-validation>
          <v-window touchless v-model="tab">
            <!-- window used to display questions for Aesthetics -->
            <v-window-item class="pa-2">
              <v-card class="pa-2 pb-5">
                <v-avatar class="d-block mx-auto pg mt-3" size="100">
                  <v-icon dark>mdi-auto-fix</v-icon>
                </v-avatar>
                <p class="text-center font-weight-bold text-h6 mt-3">
                  Aesthetics
                </p>
                <p class="text-center text-caption mt-3 mb-10">
                  Please share your thoughts with us.
                </p>
                <v-row class="px-2">
                  <v-col cols="12" md="6">
                    <label>Was the website appealing and easy to read?</label>
                    <v-select
                      v-model="a1"
                      class="mt-2"
                      placeholder="Choose one"
                      hide-details="auto"
                      outlined
                      :items="['Yes', 'No']"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="6">
                    <label
                      >Was the information presented clear and concise?</label
                    >
                    <v-select
                      v-model="a2"
                      class="mt-2"
                      placeholder="Choose one"
                      hide-details="auto"
                      outlined
                      :items="['Yes', 'No']"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="6">
                    <label>Would you say the website's design is modern?</label>
                    <v-select
                      v-model="a3"
                      placeholder="Choose one"
                      class="mt-2"
                      hide-details="auto"
                      outlined
                      :items="['Yes', 'No']"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="6">
                    <label>Do you like the color scheme?</label>
                    <v-select
                      placeholder="Choose one"
                      v-model="a4"
                      class="mt-2"
                      hide-details="auto"
                      outlined
                      :items="['Yes', 'No']"
                    ></v-select>
                  </v-col>
                  <v-col cols="12">
                    <v-btn
                      :disabled="!asStep"
                      dark
                      @click="tab++"
                      class="pg text-capitalize"
                      min-height="45"
                      >Next</v-btn
                    >
                  </v-col>
                </v-row>
              </v-card>
            </v-window-item>
            <!-- Window used to display usability questions -->
            <v-window-item class="pa-2">
              <v-card class="pa-2 pb-5">
                <v-avatar class="d-block mx-auto pg mt-3" size="100">
                  <v-icon dark>mdi-lan</v-icon>
                </v-avatar>
                <p class="text-center font-weight-bold text-h6 mt-3">
                  Usability
                </p>
                <p class="text-center text-caption mt-3 mb-10">
                  Please share your thoughts with us.
                </p>
                <v-row class="px-2">
                  <v-col cols="12" md="6">
                    <label
                      >How easy was it to use our website?(10 - Super
                      easy)</label
                    >
                    <v-select
                      v-model="u1"
                      class="mt-2"
                      placeholder="Choose one"
                      hide-details="auto"
                      outlined
                      :items="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="6">
                    <label
                      >Are there any features that you did not find
                      helpful?</label
                    >
                    <v-text-field
                      v-model="u2"
                      class="mt-2"
                      placeholder="type here"
                      hide-details="auto"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <label
                      >What was your first impression when you entered the
                      website</label
                    >
                    <v-text-field
                      v-model="u3"
                      class="mt-2"
                      placeholder="type here"
                      hide-details="auto"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <label>Did you have trouble finding anything?</label>
                    <v-select
                      v-model="u4"
                      placeholder="Choose one"
                      class="mt-2"
                      hide-details="auto"
                      outlined
                      :items="['Yes', 'No']"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="6">
                    <label
                      >If you could change one thing about the website what
                      would it be and why?</label
                    >
                    <v-text-field
                      placeholder="type here"
                      v-model="u5"
                      class="mt-2"
                      hide-details="auto"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" class="d-flex">
                    <v-btn
                      @click="tab--"
                      depressed
                      class="text-capitalize"
                      min-height="45"
                      >Back</v-btn
                    >
                    <v-spacer />
                    <v-btn
                      :disabled="!usStep"
                      dark
                      @click="tab++"
                      class="pg text-capitalize"
                      min-height="45"
                      >Next</v-btn
                    >
                  </v-col>
                </v-row>
              </v-card>
            </v-window-item>
            <!-- Window used to display performance questions -->
            <v-window-item class="pa-2">
              <v-card class="pa-2 pb-5">
                <v-avatar class="d-block mx-auto pg mt-3" size="100">
                  <v-icon dark>mdi-speedometer-medium</v-icon>
                </v-avatar>
                <p class="text-center font-weight-bold text-h6 mt-3">
                  Performance
                </p>
                <p class="text-center text-caption mt-3 mb-10">
                  Please share your thoughts with us.
                </p>
                <v-row class="px-2">
                  <v-col cols="12" md="6">
                    <label
                      >Did you encounter any errors while using the
                      website?</label
                    >
                    <v-select
                      v-model="p1"
                      class="mt-2"
                      placeholder="Choose one"
                      hide-details="auto"
                      outlined
                      :items="['Yes', 'No']"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="6">
                    <label>Did the website load quickly?</label>
                    <v-select
                      v-model="p2"
                      class="mt-2"
                      placeholder="Choose one"
                      hide-details="auto"
                      outlined
                      :items="['Yes', 'No']"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" class="d-flex">
                    <v-btn
                      @click="tab--"
                      depressed
                      class="text-capitalize"
                      min-height="45"
                      >Back</v-btn
                    >
                    <v-spacer />
                    <v-btn
                      :disabled="!pfStep"
                      dark
                      @click="SubmitForm"
                      class="pg text-capitalize"
                      min-height="45"
                      >Complete</v-btn
                    >
                  </v-col>
                </v-row>
              </v-card>
            </v-window-item>
          </v-window>
        </v-form>
      </v-col>
    </v-row>
    <!-- Overlay displayed while data gets sent to server -->
    <v-overlay color="white" opacity="0.8" z-index="999" v-model="overlay">
      <p class="ma-auto black--text text-h4">Sending thoughts...</p>
    </v-overlay>
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
          <v-btn depressed class="text-capitalize" nuxt to="/"
            >Continue Reading</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      tab: 0,
      a1: null,
      a2: null,
      a3: null,
      a4: null,
      u1: null,
      u2: null,
      u3: null,
      u4: null,
      u5: null,
      p1: null,
      p2: null,
      thanks: false,
      overlay: false
    };
  },
  computed: {
    /// Computed properties used to test if answers were entered
    asStep() {
      return !!this.a1 && !!this.a2 && !!this.a3 && !!this.a4;
    },
    /// Computed properties used to test if answers were entered

    usStep() {
      return !!this.u1 && !!this.u2 && !!this.u3 && !!this.u4 && !!this.u5;
    },
    /// Computed properties used to test if answers were entered
    pfStep() {
      return !!this.p1 && !!this.p2;
    }
  },
  methods: {
    /**
     * Metho used to send data to the server
     */
    async SubmitForm() {
      /// Check if form data is valid
      if (!this.asStep || !this.usStep || !this.pfStep)
        return alert("All questions should have an asnwer.");
      try {
        this.overlay = true;
        let p = await this.$axios.post("/feedback", {
          a1: this.a1,
          a2: this.a2,
          a3: this.a3,
          a4: this.a4,
          u1: this.u1,
          u2: this.u2,
          u3: this.u3,
          u4: this.u4,
          u5: this.u5,
          p1: this.p1,
          p2: this.p2
        });

        //Stop overlay and show thank you message
        this.overlay = false;
        this.thanks = true;
      } catch (error) {
        console.log(error.response);
      }
    }
  }
};
</script>

<style></style>
