<template>
  <div>
    <v-img src="/lighttpd.png" height="60vh" width="100%"> </v-img>
    <br />
    <v-container style="padding: 0 12%">
      <p>
        Security, speed, compliance, and flexibility -- all of these describe
        lighttpd (pron. lighty) which is rapidly redefining efficiency of a
        webserver; as it is designed and optimized for high performance
        environments. With a small memory footprint compared to other
        web-servers, effective management of the cpu-load, and advanced feature
        set (FastCGI, SCGI, Auth, Output-Compression, URL-Rewriting and many
        more) lighttpd is the perfect solution for every server that is
        suffering load problems. And best of all it's Open Source licensed under
        the revised BSD license.
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
        Lighttpd does not support specific languages but protocols. They support
        CGI, HTTP, FastCGI, SCGI, AJP... PHP for example works with CGI and
        FastCGI, so that is supported. JSP uses AJP afaik, so that's supported
        too. Basically they support all major protocols.
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
        " Load balancing, FastCGI, SCGI and HTTP proxy support",
        "chroot support",
        "Web server event mechanism performance – select(), poll(), and epoll()",
        "Support for more efficient event notification schemes like kqueue and epoll",
        "Conditional URL rewriting (mod_rewrite)",
        "TLS/SSL with SNI support, via OpenSSL.",
        "Authentication against an LDAP server",
        "RRDtool statistics",
        "Rule-based downloading with possibility of a script handling only authentication",
        "Server Side Includes support (but not server-side CGI)",
        "Flexible virtual hosting",
        "Modules support",
        "Cache Meta Language (currently being replaced by mod_magnet) using the Lua programming language",
        "Minimal WebDAV support",
        "Servlet (AJP) support (in versions 1.5.x and up)",
        "HTTP compression using mod_compress and the newer mod_deflate (1.4.42)",
        "Light-weight (less than 1 MB)",
        "Single-process design with only several threads. No processes or threads started per connection.",
        "HTTP/2 support since lighttpd 1.4.56"
      ],
      os: ["Unix", "Windows"]
    };
  }
};
</script>

<style></style>
