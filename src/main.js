import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import axios from 'axios'

const store = createStore({
    state() {
        return {
            counter: 0,
            history: [0, 2, 5, 8, 5]
        }
    },
    mutations: {
        addToCount(state, payload) {
            state.counter = state.counter + payload
            state.history.push(state.counter)
        },
        minusCount(state, payload) {
            state.counter = state.counter - payload
            state.history.push(state.counter)
        }
    },
    actions: {
        async addRandomNumber(context) {
            let data = await axios.get('https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new');
            console.log(data);
            let generateNum = data.data;
            context.commit('addToCount', generateNum)
        }
    },
    getters: {
        activeIndexes: (state) => (payload) => {
            let indexes = [];
            state.history.forEach((number, index) => {
                if (number == payload) {
                    indexes.push(index);
                }
            })
            return indexes
        }
    }
})

const app = createApp(App)

app.use(store)

app.mount('#app')
