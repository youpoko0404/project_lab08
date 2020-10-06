<template>
  <div>
    <h2>Beauty clinic</h2>
    <v-container class="m">
      <v-form ref="form">
        <v-row>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="firstNameInput"
              :rules="[v => !!v || 'First Name is required']"
              label="First Name"
              required
            />
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="listNameInput"
              :rules="[v => !!v || 'List name is required']"
              label="List name"
              required
            />
          </v-col>
          <v-col
            cols="12"
            md="2"
          >
            <v-text-field
              v-model="ageInput"
              :rules="[v => !!v || 'Age is required']"
              label="Age"
              required
            />
          </v-col>
          <v-col
            cols="12"
            md="2"
          >
            <v-text-field
              v-model="heightInput"
              :rules="[v => !!v || 'Height is required']"
              label="Height"
              required
            />
          </v-col>
          <v-col
            cols="12"
            md="2"
          >
            <v-text-field
              v-model="weightInput"
              :rules="[v => !!v || 'Weight is required']"
              label="Weight"
              required
            />
          </v-col>
          <v-col
            cols="12"
            md="3"
          >
            <v-text-field
              v-model="phoneInput"
              :rules="[v => !!v || 'Phone is required']"
              label="Phone number"
              required
            />
          </v-col>
          <v-col
            cols="12"
            md="3"
          >
            <v-text-field
              v-model="emailInput"
              label="E-mail"
              required
            />
          </v-col>
          <v-col
            cols="12"
            md="2"
          >
            <v-select
              v-model="typeInput"
              :rules="[v => !!v || 'Type is required']"
              :items="this.$store.state.types"
              label="Type"
              required
            />
          </v-col>
          <v-col
            cols="12"
            md="2"
          >
            <v-select
              v-model="sexInput"
              :rules="[v => !!v || 'Sex is required']"
              :items="this.$store.state.sex"
              label="Sex"
              required
            />
          </v-col>
          <v-col
            cols="12"
            md="12"
          >
            <v-textarea
              v-model="otherInput"
              label="Other"
              required
            />
          </v-col>
          <v-btn
            class="mr-4"
            @click="addData"
          >
            submit
          </v-btn>
          <v-btn
            class="mr-4"
            @click="reset"
          >
            Reset
          </v-btn>
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      firstNameInput: null,
      listNameInput: null,
      phoneInput: null,
      emailInput: null,
      typeInput: null,
      sexInput: null,
      ageInput: null,
      otherInput: null,
      heightInput: null,
      weightInput: null
    }
  },
  computed: {
    ...mapGetters([
      'listData'
    ])
  },
  methods: {
    addData () {
      if (this.firstNameInput != null && this.listNameInput != null &&
      this.phoneInput != null && this.phoneInput != null &&
      this.sexInput != null && this.ageInput != null &&
      this.heightInput != null && this.weightInput != null) {
        const firstName = this.firstNameInput
        const listName = this.listNameInput
        const phone = this.phoneInput
        const email = this.emailInput
        const type = this.phoneInput
        const sex = this.sexInput
        const other = this.otherInput
        const age = this.ageInput
        const height = this.heightInput
        const weight = this.weightInput
        if (firstName || listName || phone || email || type || sex || other || age || height || weight) {
          this.$store.commit('add', { firstName, listName, phone, email, type, sex, other, age, height, weight })
          this.$refs.form.reset()
        }
      } this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    }
  }
}
</script>
