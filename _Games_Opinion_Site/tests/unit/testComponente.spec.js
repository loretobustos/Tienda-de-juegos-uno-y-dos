import TheNavBar from '@/components/TheNavBar.vue';
import Vue from 'vue';
import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUsersCog, faComments, faHome, faHeadset } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faUsersCog);
library.add(faComments);
library.add(faHome);
library.add(faHeadset);

Vue.component('font-awesome-icon', FontAwesomeIcon);

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
    },
    {
      path: '/opiniones',
      name: 'Opiniones',
    },
    {
      path: '/administracion',
      name: 'Administracion',
    }
  ]
});

describe('Home.vue', () => {
  it('existe informacion en el navBar y la ruta es correcta', () => {
    const wrapper = mount(TheNavBar,{
      localVue,
      router
    });
    expect(wrapper.find('.navbar-brand').text().length).toBe(13);
    expect(wrapper.text()).toContain('Administración');
    expect(wrapper.vm.$route.path).toBe('/');
  })
})
