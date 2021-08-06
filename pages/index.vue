<template>
  <v-container fluid style="height:100%" class="fill-height ma-0 pa-0">
    <v-row no-gutters align="center" justify="center" class="fill-height">
      <v-col md="5" cols="12" class="pl-md-12">
        <h1
          class="text-center text-md-left"
          :style="{ fontSize: $vuetify.breakpoint.mdAndUp ? '60px' : '48px' }"
        >
          All About Web Servers.
        </h1>
        <p
          class="text-center text-md-left"
          :style="{ fontSize: $vuetify.breakpoint.mdAndUp ? '26px' : '24px' }"
        >
          Learn about different webservers here.
        </p>
        <div class="text-center text-md-left">
          <v-btn
            nuxt
            to="/web-servers"
            min-height="48"
            dark
            class="pg font-weight-bold text-center text-md-left"
            >Web Servers</v-btn
          >
          <v-btn
            nuxt
            to="ftp-clients"
            depressed
            min-height="48"
            class="text-center text-md-left"
            outlined
            >FTP Clients</v-btn
          >
        </div>
      </v-col>
      <v-col class="hidden-sm-and-down" md="7" cols="12">
        <v-img height="100vh" src="/home.jpg"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>
