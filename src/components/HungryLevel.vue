<template>
    <div class="columns is-multiline has-text-centered">
        <a
            class="column is-8 is-offset-2 button is-dark"
            :class="isThisHungry === 1 ? '' : 'is-outlined'"
            @click="setHungryState({person, hungryLevel: 1})"
        >
            Just want a snack
        </a>
        <a
            class="column is-8 is-offset-2 button is-success"
            :class="isThisHungry === 2 ? '' : 'is-outlined'"
            @click="setHungryState({person, hungryLevel: 2})"
        >
            A light meal sounds nice
        </a>
        <a
            class="column is-8 is-offset-2 button is-primary"
            :class="isThisHungry === 3 ? '' : 'is-outlined'"
            @click="setHungryState({person, hungryLevel: 3})"
        >
            I'm ready to eat
        </a>
        <a
            class="column is-8 is-offset-2 button is-info"
            :class="isThisHungry === 4 ? '' : 'is-outlined'"
            @click="setHungryState({person, hungryLevel: 4})"
        >
            I'm ready to chow down
        </a>
        <a
            class="column is-8 is-offset-2 button is-danger"
            :class="isThisHungry === 5 ? '' : 'is-outlined'"
            @click="setHungryState({person, hungryLevel: 5})"
        >
            I could eat a whole pizza
        </a>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'hungryLevel',
    props: ['person'],
    methods: mapActions([
        'setHungryState',
    ]),
    computed: {
        isThisHungry() {
            return this.$store.state.people[this.person].hungryLevel;
        },
    },
};
</script>
