<template>
  <form @submit.prevent="submit">
    <div>
      <label>UserName</label>
      <input type="text" name="userName" id="userName" v-model="form.userName" />
    </div>
    <div>
      <label for="password">Password</label>
      <input type="password" name="password" id="password" v-model="form.password" />
    </div>
    <div>
      <button type="submit">Sign In</button>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex';
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
    ...mapActions({
        signIn : 'auth/signIn'
    }),
    submit () {
        this.signIn(this.form).then(() => {
            this.$router.replace({
                name : 'dashboard'
            })
        }).catch((e) => {
            console.log(e)
        })
    }
  }
}
</script>
