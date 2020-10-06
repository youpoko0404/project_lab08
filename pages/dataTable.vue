<template>
  <v-layout>
    <v-flex>
      <v-card>
        <v-card-title>
          Data
          <v-spacer />
          <v-text-field
            v-model="searchInput"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          />
        </v-card-title>
        <v-data-table
          :headers="this.$store.state.headers"
          :items="this.$store.state.list"
          :search="searchInput"
        />
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data () {
    return {
      searchInput: ''
    }
  },
  mounted () {
    const searchInput = this.$store.state.search
    return searchInput
  }
}
</script>
