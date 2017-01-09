//parent | sub containing list of posts
var subreddit = Vue.component('subreddit', {
    template: '#subreddit',
    props: ['name'],
    // create a component using the template in the index
    data: function() {
        return {
            posts: []
        }

    },

            created: function() {
            this.$http.get("htps://www.reddit.com/r" + this.name + "/top.json?limit=5")
                // for name defined in named sub, call a GET request of the top 5 posts in json format.
                .then(function(resp) {
                    this.posts = resp.data.data.children
                    if (typeof resp.data == 'string') {
                        resp.data = JSON.parse(resp.data);
                    };
                    // populate children from collected data

                    //if there's a weirdo error in firefox of reading the json wrong, this fixes it.
                });
        }
});
// custom filtering
Vue.filter('truncate', function(value) {
    var length = 55;
    if (value.length <= length) {
        return value;
    } else {
        return value.substring(0, length) + '...';
    }
});

// Checks length of each value,
// if longer than 55, only shows up to character 55,
// then follows with...

Vue.filter('uppercase', function(value) {
    return value.toUpperCase();
});
//return the value after converting to uppercase
    /* -----------------
       Initialize app
    -----------------*/

new Vue({
    el: '#main'
})
