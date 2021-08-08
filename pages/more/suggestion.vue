<template>
  <v-container style="padding: 0 12%">
    <br />
    <p class="text-center text-md-h5 text-h6">Suggestion Area</p>
    <!-- Displays the different suggestion options -->
    <v-row>
      <v-col cols="12" sm="6">
        <v-card
          @click="
            suggestionType = 'layout';
            showDialog = true;
          "
          outlined
          hover
          class="pa-3"
        >
          <v-avatar class="pg mx-auto d-block" size="100">
            <v-icon large dark>mdi-view-dashboard</v-icon>
          </v-avatar>
          <p class="text-center mt-5">Layout Suggestion</p>
          <p class="text-caption text-center">
            Please share how you think we can improve the
            <span class="primary--text">Layout</span> of the website
          </p>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card
          @click="
            suggestionType = 'content';
            showDialog = true;
          "
          outlined
          hover
          class="pa-3"
        >
          <v-avatar class="pg mx-auto d-block" size="100">
            <v-icon large dark>mdi-table-of-contents</v-icon>
          </v-avatar>
          <p class="text-center mt-5">Content Suggestion</p>
          <p class="text-caption text-center">
            Please share how you think we can improve the
            <span class="primary--text">Content</span> of the website
          </p>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card
          @click="
            suggestionType = 'friend';
            showDialog = true;
          "
          outlined
          hover
          class="pa-3"
        >
          <v-avatar class="pg mx-auto d-block" size="100">
            <v-icon large dark>mdi-account-group</v-icon>
          </v-avatar>
          <p class="text-center mt-5">Friendliness Suggestion</p>
          <p class="text-caption text-center">
            Please share how you think we can improve the
            <span class="primary--text">Friendliness</span> of the website
          </p>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card
          @click="
            suggestionType = 'performance';
            showDialog = true;
          "
          outlined
          hover
          class="pa-3"
        >
          <v-avatar class="pg mx-auto d-block" size="100">
            <v-icon large dark>mdi-speedometer-medium</v-icon>
          </v-avatar>
          <p class="text-center mt-5">Performance Suggestion</p>
          <p class="text-caption text-center">
            Please share how you think we can improve the
            <span class="primary--text">Performance</span> of the website
          </p>
        </v-card>
      </v-col>
    </v-row>
    <Suggest
      @CloseSuggest="
        showDialog = false;
        suggestionType = null;
      "
      :showDialog="showDialog"
      :type="suggestionType"
    />
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      suggestionType: null,
      showDialog: false
    };
  }
};
</script>
