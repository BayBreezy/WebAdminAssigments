<template>
  <div>
    <v-img src="/nginx.png" height="60vh" width="100%"> </v-img>
    <br />
    <v-container style="padding: 0 12%">
      <p>
        NGINX is open source software for web serving, reverse proxying,
        caching, load balancing, media streaming, and more. It started out as a
        web server designed for maximum performance and stability. In addition
        to its HTTP server capabilities, NGINX can also function as a proxy
        server for email (IMAP, POP3, and SMTP) and a reverse proxy and load
        balancer for HTTP, TCP, and UDP servers.
      </p>
      <p>
        The goal behind NGINX was to create the fastest web server around, and
        maintaining that excellence is still a central goal of the project.
        NGINX consistently beats Apache and other servers in benchmarks
        measuring web server performance. Since the original release of NGINX,
        however, websites have expanded from simple HTML pages to dynamic,
        multifaceted content. NGINX has grown along with it and now supports all
        the components of the modern Web, including WebSocket, HTTP/2, gRPC, and
        streaming of multiple video formats (HDS, HLS, RTMP, and others).
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
        NGINX Unit dramatically reduces the burden of managing multiple app
        servers. It currently supports seven languages – Go, Node.js, Perl, PHP,
        Python, Ruby, and Java Servlet Containers (the last as an experimental
        module). You can run applications written in different languages on the
        same server. Furthermore, app versions written in different versions of
        a language (PHP 5 and PHP 7, Python 2.7 and Python 3) run side by side
        on the same server.
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
        "Reverse proxy with caching",
        "IPv6",
        "Load balancing",
        "FastCGI support with caching",
        "WebSockets",
        "Handling of static files, index files, and auto-indexing",
        "TLS/SSL with SNI"
      ],
      os: [
        "SUSE Linux Enterprise Server (SLES)",
        "Ubuntu",
        "Red Hat Enterprise Linux (RHEL)",
        "Oracle Linux",
        "CentOS",
        "Debian",
        "FreeBSD",
        "Amazon Linux 2",
        "Alpine Linux",
        "Amazon Linux"
      ]
    };
  }
};
</script>
