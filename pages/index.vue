<template>
  <v-container fluid class="pa-8">
    <v-row justify="center" class="mb-8">
      <div class="text-h2 text-wrap text-center">Hello, DemoDom</div>
    </v-row>
    <v-row align="center" justify="center" class="grey lighten-5 mb-8">
      <v-card v-for="n in 3" :key="n" class="ma-3 pa-6" max-width="400" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">OVERLINE</div>
            <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn text>Button</v-btn>
          <v-btn text>Button</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
    <v-row class="grey lighten-3 mb-8">
      <v-col cols="12">
        <v-card class="ma-3 pa-6" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">OVERLINE</div>
              <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
              <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn text>Button</v-btn>
            <v-btn text>Button</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="grey lighten-1 mb-8">
      <v-col cols="12" md="4">
        <v-virtual-scroll :bench="benched" :items="items" height="300" item-height="64">
          <template v-slot="{ item }">
            <v-list-item :key="item">
              <v-list-item-action>
                <v-btn fab small depressed color="primary">{{ item }}</v-btn>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>
                  User Database Record
                  <strong>ID {{ }}</strong>
                </v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-icon small>mdi-open-in-new</v-icon>
              </v-list-item-action>
            </v-list-item>

            <v-divider></v-divider>
          </template>
        </v-virtual-scroll>
      </v-col>
      <v-col cols="12" md="4">
        <v-virtual-scroll :bench="benched" :items="items" height="300" item-height="64">
          <template v-slot="{ item }">
            <v-list-item :key="item">
              <v-list-item-action>
                <v-btn fab small depressed color="primary">{{ item }}</v-btn>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>
                  User Database Record
                  <strong>ID {{ }}</strong>
                </v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-icon small>mdi-open-in-new</v-icon>
              </v-list-item-action>
            </v-list-item>

            <v-divider></v-divider>
          </template>
        </v-virtual-scroll>
      </v-col>
      <v-col cols="12" md="4">
        <v-virtual-scroll :bench="benched" :items="items" height="300" item-height="64">
          <template v-slot="{ item }">
            <v-list-item :key="item">
              <v-list-item-action>
                <v-btn fab small depressed color="primary">{{ item }}</v-btn>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>
                  User Database Record
                  <strong>ID {{ }}</strong>
                </v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-icon small>mdi-open-in-new</v-icon>
              </v-list-item-action>
            </v-list-item>

            <v-divider></v-divider>
          </template>
        </v-virtual-scroll>
      </v-col>
    </v-row>
  </v-container>
</template>
Column


<script>
export default {
  data: () => ({
    benched: 0,
  }),
  computed: {
    items() {
      return Array.from({ length: this.length }, (k, v) => v + 1);
    },
    length() {
      return 50;
    },
  },
};
</script>
<style>
.v-card__text,
.v-card__title {
  word-break: normal; /* maybe !important  */
}
</style>
