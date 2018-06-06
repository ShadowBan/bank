/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import Vue from 'vue/dist/vue.esm'
import VueMaterial from 'vue-material'
import axios from 'axios'
import VueAxios from 'vue-axios'

import TestComponent from '../components/test-component.vue'
import TodoList from '../components/todo-list.vue'

//Vue.use(VueMaterial)
Vue.use(VueAxios, axios)


new Vue({
  el: '#app',
  components: { TestComponent, TodoList }
})
