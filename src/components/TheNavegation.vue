<template>
    <div id="nav">
        <ul>
            <li><router-link :to= "{ name : 'home' }">Home </router-link></li>
            <li><router-link  :to= "{ name : 'dashboard' }">Dashboard</router-link> </li>
            <li><router-link  :to= "{ name : 'signin' }">Sign In</router-link></li>
            <li>Jesus Sarmiento</li>
            <li><a href="#">Sing Out</a></li>
        </ul>
    </div>
</template>