<template>
   <b-container fluid>
    <div>
    <b-row>
    <b-col md="3" offset-md="1">
    <h1>Contact Me</h1>
    </b-col>
    </b-row>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-row>
      <b-col md="6" offset-md="1">
      <b-form-group id="exampleInputGroup1"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="Enter email">
        </b-form-input>
      </b-form-group>
      </b-col>
      </b-row>
      <b-row>
      <b-col md="6" offset-md="1">
      <b-form-group id="exampleInputGroup2"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Enter name">
        </b-form-input>
      </b-form-group>
      </b-col>
      </b-row>
      <b-row>
      <b-col md="6" offset-md="1">
      <div>
           <br/>
              <b-form-textarea id="textarea1"
                            v-model="text"
                            placeholder="Enter something"
                            :rows="3"
                            :max-rows="6">
              </b-form-textarea>
            <pre class="mt-3">{{ text }}</pre>
           </div>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
       </b-col>
      </b-row>  
    </b-form>
  </div>
 </b-container>
</template>
<script>
  export default {
  data () {
   return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [
        { text: 'Select One', value: null },
        'Carrots', 'Beans', 'Tomatoes', 'Corn'
      ],
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>
<style>
 
</style>