<template>
  <div>
    <v-img src="/nodejs.png" height="60vh" width="100%"> </v-img>
    <br />
    <v-container style="padding: 0 12%">
      <p>
        Node.js is an open-source, cross-platform, back-end JavaScript runtime
        environment that runs on the V8 engine and executes JavaScript code
        outside a web browser. Node.js lets developers use JavaScript to write
        command line tools and for server-side scripting—running scripts
        server-side to produce dynamic web page content before the page is sent
        to the user's web browser. Consequently, Node.js represents a
        "JavaScript everywhere" paradigm, unifying web-application development
        around a single programming language, rather than different languages
        for server-side and client-side scripts.
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
      <h2>Supported Operating Systems</h2>
      <v-list>
        <template v-for="(f, i) in os">
          <v-list-item :key="`os-${i}`">
            <v-list-item-avatar size="30" color="secondary">
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
      <h2>Programming Languages</h2>
      <p>
        Node JS is not a programming language, but it allows developers to use
        JavaScript, which is a programming language that allows users to build
        web applications. This tool is mostly used by programmers who use
        JavaScript to write Server-Side scripts.
      </p>
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
        "Non-blocking thread execution",
        "Multi-threaded",
        "Cross-platform",
        "Fast development environment",
        "Object oriented",
        "Synchronous code execution",
        "Open source packages on NPM",
        "One language for frontend and backend",
        "Sockets and two way data binding"
      ],
      os: [
        "Linux",
        "MacOS",
        "Microsoft Windows 8.1 and up",
        "Windows Server 2012 and up",
        "SmartOS",
        "IBM AIX",
        "FreeBSD (Experimental)"
      ]
    };
  }
};
</script>

<style></style>
