<template>
    <div id="nav">
        <ul>
            {{ user }}
            <li><router-link :to= "{ name : 'home' }">Home </router-link></li>
            <template v-if="authenticated">
                <li><router-link  :to= "{ name : 'dashboard' }">Dashboard</router-link> </li>
                <li>Jesus Sarmiento</li> <!-- {{ user.name }}--> 
                <li><a href="#">Sing Out</a></li>
            </template>
            <template v-else>
                  <li><router-link  :to= "{ name : 'signin' }">Sign In</router-link></li>
            </template>
        </ul>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    computed : {
        ...mapGetters({
            authenticated : 'auth/authenticated',
            user : 'auth/user'
        })
    }
}
</script>