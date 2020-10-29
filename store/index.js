import Vuex from 'vuex'
import axios from 'axios'

const API_KEY = "AIzaSyApmlOS_tiSrg7qiUbGX2nnDLgKXGOIHAU"
const BASE_URL = "https://youtube.googleapis.com/youtube/v3/commentThreads"

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      userComments: [
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Brunch this weekend?",
          subtitle:
            "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle:
            "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "Oui oui",
          subtitle:
            "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          title: "Birthday gift",
          subtitle:
            "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?"
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
          title: "Recipe to try",
          subtitle:
            "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
        }
      ],
    }),
    mutations: {
      setComments(state, payload) {
        state.userComments = payload;
      },
    },
    actions: {
      search({ commit }, payload) {
        const comments = [];
        let pageToken = "";
        let apiURL = `${BASE_URL}?part=snippet&videoId=${payload}&key=${API_KEY}&pageToken=${pageToken}`;
        console.log(apiURL);
        axios.get(apiURL)
        .then(response => {
          console.log(response.data);
          pageToken = response.data.nextPageToken;
          const items = response.data.items;
          items.forEach(item => {
            comments.push({
              id: item.snippet.topLevelComment.id,
              text: item.snippet.topLevelComment.snippet.textDisplay,
              username: item.snippet.topLevelComment.snippet.authorDisplayName,
              avatar: item.snippet.topLevelComment.snippet.authorProfileImageUrl,
              likeCount: item.snippet.topLevelComment.snippet.likeCount,
            })
          });
          
        })
        .then(() => {
          apiURL = apiURL + pageToken;
          axios.get(apiURL)
          .then(response => {
            console.log(response.data);
            pageToken = response.data.nextPageToken;
            const items = response.data.items;
            items.forEach(item => {
              comments.push({
                id: item.snippet.topLevelComment.id,
                text: item.snippet.topLevelComment.snippet.textDisplay,
                username: item.snippet.topLevelComment.snippet.authorDisplayName,
                avatar: item.snippet.topLevelComment.snippet.authorProfileImageUrl,
                likeCount: item.snippet.topLevelComment.snippet.likeCount,
              })
            });
            
          })
          
        })

        commit("setComments", comments);
      },
    },
    getters: {
      userComments(state){
        return state.userComments;
      }
    }
  })
}

export default createStore