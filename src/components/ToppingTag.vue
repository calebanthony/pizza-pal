<template>
    <span
        class="tag button"
        :class="isActive ? 'is-primary' : 'is-dark'"
        @click="toggleTopping({person: person, topping: topping})"
    >
        {{ topping }}
    </span>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'toppingTag',
    props: ['topping', 'person'],
    methods: mapActions([
        'toggleTopping',
    ]),
    computed: {
        isActive() {
            return this.$store.state.people[this.person].preferredToppings[this.topping];
        },
    },
};
</script>
