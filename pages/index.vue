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
      <v-col cols="12" md="4" v-for="col in 3" :key="col">
        <v-card class="mx-auto">
          <v-card-title class="white--text grey darken-1">
            User Directory
            <v-spacer></v-spacer>

            <v-btn color="white" class="text--primary" fab small>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-card-title>

          <v-virtual-scroll :items="items" :item-height="50" height="500">
            <template v-slot="{ item }">
              <v-list-item>
                <v-list-item-avatar>
                  <v-avatar :color="item.color" size="80" class="white--text">{{ item.initials }}</v-avatar>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>{{ item.fullName }}</v-list-item-title>
                </v-list-item-content>

                <v-list-item-action>
                  <v-btn depressed small>
                    View User
                    <v-icon color="orange darken-4" right>mdi-open-in-new</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </template>
          </v-virtual-scroll>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
Column


<script>
export default {
  data: () => ({
    colors: [
      "#2196F3",
      "#90CAF9",
      "#64B5F6",
      "#42A5F5",
      "#1E88E5",
      "#1976D2",
      "#1565C0",
      "#0D47A1",
      "#82B1FF",
      "#448AFF",
      "#2979FF",
      "#2962FF",
    ],
    names: [
      "Oliver",
      "Jake",
      "Noah",
      "James",
      "Jack",
      "Connor",
      "Liam",
      "John",
      "Harry",
      "Callum",
      "Mason",
      "Robert",
      "Jacob",
      "Jacob",
      "Jacob",
      "Michael",
      "Charlie",
      "Kyle",
      "William",
      "William",
      "Thomas",
      "Joe",
      "Ethan",
      "David",
      "George",
      "Reece",
      "Michael",
      "Richard",
      "Oscar",
      "Rhys",
      "Alexander",
      "Joseph",
      "James",
      "Charlie",
      "James",
      "Charles",
      "William",
      "Damian",
      "Daniel",
      "Thomas",
      "Amelia",
      "Margaret",
      "Emma",
      "Mary",
      "Olivia",
      "Samantha",
      "Olivia",
      "Patricia",
      "Isla",
      "Bethany",
    ],
    surnames: [
      "Smith",
      "Anderson",
      "Clark",
      "Wright",
      "Mitchell",
      "Johnson",
      "Thomas",
      "Rodriguez",
      "Lopez",
      "Perez",
      "Williams",
      "Jackson",
      "Lewis",
      "Hill",
      "Roberts",
      "Jones",
      "White",
      "Lee",
      "Scott",
      "Turner",
      "Brown",
      "Harris",
      "Walker",
      "Green",
      "Phillips",
      "Davis",
      "Martin",
      "Hall",
      "Adams",
      "Campbell",
      "Miller",
      "Thompson",
      "Allen",
      "Baker",
      "Parker",
      "Wilson",
      "Garcia",
      "Young",
      "Gonzalez",
      "Evans",
      "Moore",
      "Martinez",
      "Hernandez",
      "Nelson",
      "Edwards",
      "Taylor",
      "Robinson",
      "King",
      "Carter",
      "Collins",
    ],
  }),

  computed: {
    items() {
      const namesLength = this.names.length;
      const surnamesLength = this.surnames.length;
      const colorsLength = this.colors.length;

      return Array.from({ length: 10000 }, (k, v) => {
        const name = this.names[this.genRandomIndex(namesLength)];
        const surname = this.surnames[this.genRandomIndex(surnamesLength)];

        return {
          color: this.colors[this.genRandomIndex(colorsLength)],
          fullName: `${name} ${surname}`,
          initials: `${name[0]} ${surname[0]}`,
        };
      });
    },
  },

  methods: {
    genRandomIndex(length) {
      return Math.ceil(Math.random() * (length - 1));
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
