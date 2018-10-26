module.exports = {
    exportPathMap: function () {
      return {
        '/': { page: '/' },
        '/about': { page: '/about' },
        '/p/hello': { page: '/post', query: { title: "Hello Next.js" } },
        '/p/learn': { page: '/post', query: { title: "Learn Next.js is awesome" } },
        '/p/deploy': { page: '/post', query: { title: "Deploy apps with Azure" } },
        '/p/exporting-pages': { page: '/post', query: { title: "Learn to Export HTML Pages" } }
      }
    }
  }