<template>
 <form @submit.prevent="submit">
     <div>
         <label>UserName</label>
         <input type="text" name="userName" id="userName" v-model="form.userName">
     </div>
      <div>
         <label for="password">Password</label>
         <input type="password" name="password" id="password" v-model="form.password">
     </div>
      <div>
        <button type="submit">Sign In</button>
     </div>
 </form>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
export default {

  name: 'signin',
  components: {
   
  },
  data () {
      return {
          form : {
              userName : '',
              password : '',
              grant_type : 'password'
          }
      }
  },
  methods : {
    async submit () {
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        let response =  axios.post('token', qs.stringify(this.form) , config)
        console.log(response.data);
    }
  }
}
</script>
