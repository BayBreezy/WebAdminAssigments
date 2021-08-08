<template>
  <div>
    <v-app-bar app fixed elevate-on-scroll color="white" class="px-md-15">
      <div class="hidden-md-and-up">
        <v-app-bar-nav-icon @click="drawer = !drawer">
          <v-icon>mdi-sort-variant</v-icon>
        </v-app-bar-nav-icon>
      </div>
      <v-spacer class="hidden-md-and-up" />
      <div @click="$router.push('/')" class="d-flex align-center point">
        <v-avatar color="primary">
          <v-icon dark>mdi-server</v-icon>
        </v-avatar>
        <h1 class="text-h5 font-weight-bold ml-2 hidden-sm-and-down">
          Servers
        </h1>
      </div>

      <v-spacer class="hidden-sm-and-down" />
      <div class="hidden-sm-and-down">
        <v-btn
          active-class="white--text pg "
          text
          nuxt
          to="/"
          class="text-capitalize mr-md-2 font-weight-bold"
          >Home</v-btn
        >
        <v-menu offset-y bottom open-on-hover transition="scroll-y-transition">
          <template #activator="{on}">
            <v-btn
              active-class="white--text pg font-weight-bold"
              nuxt
              to="/web-servers"
              text
              class="text-capitalize font-weight-bold"
              v-on="on"
              >Web Servers</v-btn
            >
          </template>
          <v-card>
            <v-list dense>
              <v-list-item
                nuxt
                :to="n.link"
                v-for="(n, i) in nav"
                :key="`nav-${i}`"
              >
                <v-list-item-content>
                  <v-list-item-title>{{ n.text }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
        <v-menu offset-y bottom open-on-hover transition="scroll-y-transition">
          <template #activator="{on}">
            <v-btn
              active-class="white--text pg font-weight-bold"
              nuxt
              to="/ftp-clients"
              text
              class="text-capitalize font-weight-bold"
              v-on="on"
              >FTP CLients</v-btn
            >
          </template>
          <v-card>
            <v-list dense>
              <v-list-item
                nuxt
                :to="n.link"
                v-for="(n, i) in ftp"
                :key="`ftp-${i}`"
              >
                <v-list-item-content>
                  <v-list-item-title>{{ n.text }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
        <v-menu offset-y bottom open-on-hover transition="scroll-y-transition">
          <template #activator="{on}">
            <v-btn
              active-class="white--text pg font-weight-bold"
              text
              class="text-capitalize font-weight-bold"
              v-on="on"
              >More</v-btn
            >
          </template>
          <v-card>
            <v-list dense>
              <v-list-item
                nuxt
                :to="n.link"
                v-for="(n, i) in more"
                :key="`more-${i}`"
              >
                <v-list-item-content>
                  <v-list-item-title>{{ n.text }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
      </div>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer">
      <v-list>
        <v-list-item @click="$router.push('/')">
          <v-list-item-avatar color="primary">
            <v-icon dark>mdi-server</v-icon>
          </v-list-item-avatar>
          <v-list-item-title>
            <h1 class="text-h5 font-weight-bold ml-2">
              Servers
            </h1>
          </v-list-item-title>
        </v-list-item>
        <v-divider class="my-2" />
        <v-subheader>Web Servers</v-subheader>
        <template v-for="(m, l) in nav">
          <v-list-item nuxt :to="m.link" :key="`miniNav-${l}`">
            <v-list-item-content>
              <v-list-item-title>{{ m.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
        <v-divider class="my-2" />
        <v-subheader>FTP Clients</v-subheader>
        <template v-for="(m, l) in ftp">
          <v-list-item nuxt :to="m.link" :key="`miniFtpNav-${l}`">
            <v-list-item-content>
              <v-list-item-title>{{ m.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
        <v-divider class="my-2" />
        <v-subheader>More</v-subheader>
        <template v-for="(m, l) in more">
          <v-list-item nuxt :to="m.link" :key="`miniMoreNav-${l}`">
            <v-list-item-content>
              <v-list-item-title>{{ m.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      nav: [
        {
          text: "NodeJS",
          link: "/web-servers/node"
        },
        {
          text: "Nginx",
          link: "/web-servers/nginx"
        },
        {
          text: "Lighttpd",
          link: "/web-servers/lighttpd"
        }
      ],
      ftp: [
        {
          text: "FileZilla",
          link: "/ftp-clients/filezilla"
        },
        {
          text: "WinSCP",
          link: "/ftp-clients/winscp"
        },
        {
          text: "Cyberduck",
          link: "/ftp-clients/cyberduck"
        }
      ],
      more: [
        {
          text: "Feedback",
          link: "/more/feedback"
        },
        {
          text: "Suggestion",
          link: "/more/suggestion"
        }
      ]
    };
  }
};
</script>

<style></style>
