new Vue({
    el: '#app',
    data: {
      message: 'GitHub User Repositories',
      loading: false,
      repos: []
    },
    methods: {
      getRepositories: function() {
        this.loading = true;
        fetch('https://api.github.com/users/YOUR_GITHUB_USERNAME/repos')
          .then(response => response.json())
          .then(data => {
            this.repos = data;
            this.loading = false;
          })
          .catch(error => {
            console.error('Error fetching repositories:', error);
            this.loading = false;
          });
      }
    }
  });