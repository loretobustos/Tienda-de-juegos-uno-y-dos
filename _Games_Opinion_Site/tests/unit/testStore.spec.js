import Vue from 'vue';
import Vuex from 'vuex';
import store from '@/store/store';

describe('Prueba a la Store-VUEX',()=>{
    beforeAll(()=>{
        Vue.use(Vuex);
        store = new Vuex.Store(store);
    });
});

describe('Prueba store',()=>{
    it('agregando una opinion',()=>{

        let nueva_opinion = { 
            nombre: "Antonio",
            opinion: "Buen Juego",
            juego: {
                name: "Juego 1",
                id: 1234,
            },
            id: 5
        }
        store.dispatch('guardandoOpinion',nueva_opinion);
        expect(store.state.opiniones).toHaveLength(1);
        expect(store.getters.enviandoOpiniones).toHaveLength(1);
    });

    it('editando opinion', () => {
        let opinionEditada = {
            nombre: "Martha",
            opinion: "Nuevo Comentario 2.0",
            juego: {
                name: "Juego 1",
                id: 1234,
            },
            id: 5
        };
        store.dispatch('guardandoEdicion',opinionEditada);
        expect(store.state.opiniones[0]).toHaveProperty('opinion','Nuevo Comentario 2.0');
    });

    it('eliminando opinion',()=>{
        const index = 0;
        store.dispatch('eliminarOpinion',index);
        expect(store.state.opiniones).toHaveLength(0);
    });
});