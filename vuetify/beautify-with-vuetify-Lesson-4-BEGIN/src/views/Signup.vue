<template>
  <v-container>
    <v-row>
      <v-col md="6" class="mx-auto">
        <v-card>
          <v-card-title>
            <h1 class="display-1">Signup</h1>
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field label="Email" type="email"></v-text-field>
              <v-autocomplete label="Which browser do you use?" :items="browsers"></v-autocomplete>
              <v-file-input label="Attach profile picture"></v-file-input>
              <v-text-field label="Birthday" v-model="birthday" readonly></v-text-field>
              <v-date-picker v-model="birthday"></v-date-picker>
              <v-checkbox label="Agree to term & conditions"></v-checkbox>
              <v-divider></v-divider>
              <v-btn type="submit" color="primary" class="mt-3">Submit</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    birthday: '',
    browsers: [
        'Chrome', 'Mozilla', 'Edge', 'Opera', 'Safari'
      ]
  })
}
</script>