import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    people: [],
    possibleNames: ['Superman', 'Spiderman', 'Wonder Woman', 'Batman', 'The Flash',
        'Iron Man', 'Captain America', 'Hulk', 'Black Widow', 'Thor', 'Luke Cage',
        'Daredevil', 'Wolverine', 'Aquaman', 'Beast Boy', 'Green Arrow', 'Hawkman',
        'Destroyer', 'Groot', 'Magneto', 'Starfire', 'Spectre', 'Robin', 'Rocket'],
    pizza: [],
};

const mutations = {
    addNewPerson(state, data) {
        state.people.push({
            id: data.i,
            name: data.randomName,
            preferredToppings: {
                'Pepperoni': false,
                'Sausage': false,
                'Bacon': false,
                'Ham': false,
                'Banana Peppers': false,
                'Black Olives': false,
                'Spinach': false,
                'Pineapple': false,
                'Green Pepper': false,
                'Mushrooms': false,
                'Extra Cheese': false,
            },
            hungryLevel: 1,
        });
    },
    toggleTopping(state, data) {
        const pref = state.people[data.person].preferredToppings;
        if (pref[data.topping] === true) {
            pref[data.topping] = false;
        } else {
            pref[data.topping] = true;
        }
    },
    setHungryState(state, data) {
        state.people[data.person].hungryLevel = data.hungryLevel;
    },
};

const actions = {
    addNewPerson: ({ commit }, { numPeople }) => {
        state.people = [];
        for (let i = 0; i < numPeople; i++) {
            const randomName = state.possibleNames[
                Math.floor(
                    Math.random() * state.possibleNames.length,
                )
            ];
            commit('addNewPerson', { i, randomName });
        }
    },
    toggleTopping: ({ commit }, { person, topping }) => {
        commit('toggleTopping', { person, topping });
    },
    setHungryState: ({ commit }, { person, hungryLevel }) => {
        commit('setHungryState', { person, hungryLevel });
    },
    calcPizza: () => {
        // Go through each individual person
        let totalPizzas = 0;
        Vue.set(state.pizza, totalPizzas, { 'slices': 0, 'size': 'Medium' });
        // state.pizza[totalPizzas] = { 'slices': 0, 'size': 'Medium' };

        for (let i = 0; i < state.people.length; i++) {
            const person = state.people[i];
            // Grab the total number of pieces
            // Hungry Level Calculations
            //  1 = 0.9
            //  2 = 1.8
            //  3 = 2.7
            //  4 = 3.6
            //  5 = 4.5


            // If there's more than 8 slices or if the second topping is taken, make a new pizza
            if (state.pizza[totalPizzas].slices > 8 ||
                state.pizza[totalPizzas].topping2 !== undefined) {
                totalPizzas += 1;
                state.pizza[totalPizzas] = { 'slices': 0, 'size': 'Medium' };
            }

            // Add the slices to the current pizza
            state.pizza[totalPizzas].slices += person.hungryLevel * 0.9;

            // Grab all the selected toppings for this person and put them in an array
            const toppings = [];
            Object.keys(person.preferredToppings).forEach((topping) => {
                if (person.preferredToppings[topping] === true) {
                    toppings.push(topping);
                }
            });

            // Add the array of selected toppings to either 1 or 2, whichever is open
            if (!('topping1' in state.pizza[totalPizzas])) {
                state.pizza[totalPizzas].topping1 = toppings;
            } else {
                state.pizza[totalPizzas].topping2 = toppings;
            }
            // Beef up this section with optimizing where the toppings go.
            // 1. Find topping arrays that match perfectly and add them first.
            // 2. Find two arrays that have similar ingredients and match those up.
        }

        // Look at all the pizzas we have.
        // If the pizza has more than 6 slices, define it as a large.
        Object.keys(state.pizza).forEach((pizza) => {
            if (state.pizza[pizza].slices > 6) {
                state.pizza[pizza].size = 'Large';
            }
        });

        console.log(state.pizza);
    },
};

export default new Vuex.Store({
    state,
    mutations,
    actions,
});
