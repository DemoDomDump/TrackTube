<template>
  <v-container fluid>
    <v-row justify="center" class="my-8">
      <div class="text-h2 text-wrap text-center">Hello, DemoDom</div>
    </v-row>
    <v-row align="center" justify="center" class="grey lighten-1 py-8">
      <v-card v-for="n in 3" :key="n" class="ma-4" rounded="0">
        <v-img
          src="https://img.youtube.com/vi/iNVHHgymrg8/maxresdefault.jpg"
          :aspect-ratio="16 / 9"
          width="280"
        ></v-img>

        <v-card-title>Top western road trips</v-card-title>

        <v-card-subtitle>1,000 miles of wonder</v-card-subtitle>
      </v-card>
    </v-row>
    <v-row class="grey lighten-3 py-8">
      <v-col cols="12">
        <v-card class="card" tile flat router>
          <v-row no-gutters>
            <v-col cols="12" md="8">
              <div class="ma-5">
                <v-card-title class="pl-2 pt-0 subtitle-1 font-weight-bold">
                  Top western road trips
                </v-card-title>

                <v-card-subtitle class="pl-2 pb-0">
                  1,000 miles of wonder
                  <v-icon>mdi-circle-small</v-icon>9.6k
                  views<v-icon>mdi-circle-small</v-icon>6 hours ago
                </v-card-subtitle>
                <v-card-subtitle class="pl-2 pt-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae exercitationem minus in asperiores. Dolorem dicta ea
                  praesentium, repellendus ipsam harum optio, delectus facilis
                  ratione quam quaerat a architecto hic reprehenderit.
                </v-card-subtitle>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <v-img
                class="ma-5"
                contain
                max-height="200"
                src="https://img.youtube.com/vi/iNVHHgymrg8/maxresdefault.jpg"
              >
              </v-img>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="grey lighten-1 py-8 px-4">
      <v-col cols="12" md="4" v-for="col in 3" :key="col">
        <v-card class="mx-auto">
          <v-card-title class="white--text grey darken-1">
            User Directory
            <v-spacer></v-spacer>

            <v-btn color="white" class="text--primary" fab small>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-card-title>

          <v-list three-line>
            <template v-for="(item, index) in items">
              <v-divider
                v-if="item.divider"
                :key="index"
                :inset="item.inset"
              ></v-divider>

              <v-list-item :key="item.title" @click>
                <v-list-item-content>
                  <v-list-item-title v-html="item.title"></v-list-item-title>
                  <v-list-item-subtitle
                    v-html="item.subtitle"
                  ></v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile width="160" height="90">
                  <v-img
                    src="https://img.youtube.com/vi/iNVHHgymrg8/maxresdefault.jpg"
                  ></v-img>
                </v-list-item-avatar>
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
    items: [
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
    ]
  })
};
</script>
<style>
.v-card__text,
.v-card__title {
  word-break: normal; /* maybe !important  */
}
</style>
