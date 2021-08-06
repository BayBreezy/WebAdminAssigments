<template>
  <div>
    <v-img
      gradient="to right, rgba(0,0,0,0.9), rgba(0,0,0,0.1)"
      src="/web-servers.jpg"
      height="60vh"
      width="100%"
    >
      <v-container class="fill-height">
        <v-row align="center">
          <v-col>
            <h1 class="white--text text-md-h2">Web Servers</h1>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
    <v-container class="mt-5">
      <h2>What Are Web Servers?</h2>
      <br /><br />
      <p>
        On the hardware side, a web server is a computer that stores web server
        software and a website's component files. (for example, HTML documents,
        images, CSS stylesheets, and JavaScript files) A web server connects to
        the Internet and supports physical data interchange with other devices
        connected to the web.
      </p>
      <p>
        On the software side, a web server includes several parts that control
        how web users access hosted files. At a minimum, this is an HTTP server.
        An HTTP server is software that understands
        <a
          target="_blank"
          href="https://developer.mozilla.org/en-US/docs/Glossary/URL"
          >URL</a
        >
        (web addresses) and
        <a
          target="_blank"
          href="https://developer.mozilla.org/en-US/docs/Glossary/HTTP"
          >HTTP</a
        >
        (the protocol your browser uses to view webpages). An HTTP server can be
        accessed through the domain names of the websites it stores, and it
        delivers the content of these hosted websites to the end user's device.
      </p>
      <br />
      <h2>Different Web Servers</h2>
      <br />
      <v-row>
        <template v-for="(n, i) in servers">
          <v-col md="4" cols="12" :key="`server-${i}`">
            <v-card outlined hover>
              <v-img :src="n.img" height="250"></v-img>
              <v-card-title>{{ n.title }}</v-card-title>
              <v-card-text></v-card-text>
              <v-card-actions>
                <v-btn nuxt :to="n.link" depressed class="text-capitalize"
                  >Read More <v-icon right>mdi-open-in-new</v-icon></v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      servers: [
        { title: "NodeJS", img: "/nodejs.png", link: "/web-servers/node" },
        { title: "Nginx", img: "/nginx.png", link: "/web-servers/nginx" },
        {
          title: "Lighttpd",
          img: "/lighttpd.png",
          link: "/web-servers/lighttpd"
        }
      ]
    };
  },
  head() {
    return {
      title: "Web Servers",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "All you need to know about web servers."
        }
      ]
    };
  }
};
</script>

<style></style>
