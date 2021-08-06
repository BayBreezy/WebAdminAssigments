<template>
  <div>
    <v-img src="/winscp.jpg" height="60vh" width="100%"> </v-img>
    <br />
    <v-container style="padding: 0 12%">
      <p>
        WinSCP is an open source free SFTP client, FTP client, WebDAV client, S3
        client and SCP client for Windows. Its main function is file transfer
        between a local and a remote computer. Beyond this, WinSCP offers
        scripting and basic file manager functionality.
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
        " Graphical user interface (screenshots)",
        "Translated into many languages",
        "Integration with Windows (drag&drop, URL, shortcut icons, jump list)",
        "All common operations with files",
        "Support for SFTP and SCP protocols over SSH and FTP and WebDAV and S3 protocols",
        "Batch file scripting and command-line interface and .NET assembly for advanced programming tasks",
        "Directory synchronization in several semi or fully automatic ways",
        "Integrated text editor",
        "Shares site settings with PuTTY",
        "Support for password, keyboard-interactive, public key and Kerberos (GSS) authentication",
        "Integrates with Pageant (PuTTY authentication agent) for full support of public key authentication with SSH",
        "Explorer and Commander interfaces",
        "Optionally protects stored site information with master password",
        "Optionally supports portable operation using a configuration file in place of registry entries, suitable for operation from removable media"
      ]
    };
  }
};
</script>

<style></style>
