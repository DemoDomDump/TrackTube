<template>
  <v-container fluid>
    <v-row justify="center" class="my-8">
      <div class="text-h2 text-wrap text-center">Hello DemoDom</div>
    </v-row>
    <v-row class="grey lighten-1 py-8 px-4">
      <v-col cols="12">
      <v-text-field
        flat
        hide-details
        append-icon="mdi-magnify"
        placeholder="Search"
        outlined
        dense
        v-model="searchText"
        @click:append="search"
        class="hidden-sm-and-down"
      ></v-text-field>
        <v-card class="mx-auto mt-4">
          <v-card-title class="white--text grey darken-1">
            Comments
            <v-spacer></v-spacer>

            <v-btn color="white" class="text--primary" fab small>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-card-title>

          <v-list three-line>
          <template v-for="(item, index) in comments">
            <v-subheader
              v-if="item.header"
              :key="item.header"
              v-text="item.header"
            ></v-subheader>

            <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"
            ></v-divider>

            <v-list-item
              v-else
              :key="item.title"
            >
              <v-list-item-avatar>
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-subtitle v-html="item.username"></v-list-item-subtitle>
                <v-list-item-title v-html="item.text"></v-list-item-title>
                <v-list-item-subtitle>Likes: {{ item.likeCount }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    searchText: "",
  }),
  computed: {
    comments() {
      return this.$store.getters.userComments;
    }
  },
  methods: {
    search() {
      const videoID = this.searchText.split("=")[1]
      return this.$store.dispatch("search", videoID);
    }
  },
};
</script>
