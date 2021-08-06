<template>
  <div>
    <v-img
      gradient="to right, rgba(0,0,0,0.9), rgba(0,0,0,0.1)"
      src="/ftp.png"
      height="60vh"
      width="100%"
    >
      <v-container class="fill-height">
        <v-row align="center">
          <v-col>
            <h1 class="white--text text-md-h2">FTP Clients</h1>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
    <v-container class="mt-5">
      <h2>What Is FTP?</h2>
      <br /><br />
      <p>
        The File Transfer Protocol (FTP) is a standard communication protocol
        used for the transfer of computer files from a server to a client on a
        computer network. FTP is built on a client–server model architecture
        using separate control and data connections between the client and the
        server.[1] FTP users may authenticate themselves with a clear-text
        sign-in protocol, normally in the form of a username and password, but
        can connect anonymously if the server is configured to allow it. For
        secure transmission that protects the username and password, and
        encrypts the content, FTP is often secured with SSL/TLS (FTPS) or
        replaced with SSH File Transfer Protocol (SFTP).
      </p>
      <br />
      <h2>Different FTP Clients</h2>
      <br />
      <v-row>
        <template v-for="(n, i) in ftp">
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
      ftp: [
        {
          title: "FileZilla",
          img: "/filezilla.jpg",
          link: "/ftp-clients/filezilla"
        },
        { title: "WinSCP", img: "/winscp.jpg", link: "/ftp-clients/winscp" },
        {
          title: "Cyberduck",
          img: "/cyberduck.jpg",
          link: "/ftp-clients/cyberduck"
        }
      ]
    };
  },
  head() {
    return {
      title: "FTP Clients",
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
