<template>
  <v-app>
    <NavMain />
    <v-main>
      <nuxt />
      <v-btn id="feedbackButton" dark class="pg rotate" fixed bottom right fab>
        <v-icon>mdi-comment-quote</v-icon>
      </v-btn>
    </v-main>
    <!-- menu showing feedback and sugestion menu -->
    <v-menu
      origin="bottom right"
      transition="scale-transition"
      offset-y
      top
      activator="#feedbackButton"
    >
      <v-card>
        <v-list subheader>
          <v-subheader>Share your thoughts</v-subheader>
          <v-list-item nuxt to="/more/feedback">
            <v-list-item-content>
              <v-list-item-title>Feedback</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item nuxt to="/more/suggestion">
            <v-list-item-content>
              <v-list-item-title>Suggestions</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.rotate {
  animation: btn 3s linear infinite;
}

@keyframes btn {
  0% {
    transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
</style>
