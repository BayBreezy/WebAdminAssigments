<template>
  <div>
    <v-img src="/cyberduck.jpg" height="60vh" width="100%"> </v-img>
    <br />
    <v-container style="padding: 0 12%">
      <p>
        Cyberduck is an FTP client with free-of-charge cloud capabilities and
        support for Windows and Mac OS X systems. Cyberduck uses a graphical
        user interface (GUI) to provide end users with access to files from
        servers and otherwise manage data over diverse locations, including file
        access, editing and storage options
      </p>
      <br />
      <h2>Features</h2>
      <v-list>
        <template v-for="(f, i) in features">
          <v-list-item :key="`feature-${i}`">
            <v-list-item-avatar size="30" color="primary">
              <v-icon dark>mdi-check</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>
                {{ f }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
      <br />
      <h2>Tell Us What You Think</h2>
      <br />
      <Post />
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: [
        "Unparalleled bookmarking feature",
        "Supports external editors for instantaneous file editing",
        "Supports FTP, SFTP, OpenStack Swift, WebDAV and Amazon S3",
        "Advanced SSH functionality",
        "Available in multiple languages",
        "Convenient system tray notifications"
      ]
    };
  }
};
</script>

<style></style>
