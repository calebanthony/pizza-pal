<template>
    <div class="segment">
        <ToppingTag v-for="(active, topping) in personToppings" :topping="topping" :person="person"></ToppingTag>
    </div>
</template>

<script>
import ToppingTag from './ToppingTag';

export default {
    name: 'toppingTags',
    props: ['person'],
    components: {
        ToppingTag,
    },
    computed: {
        personToppings() {
            return this.$store.state.people[this.person].preferredToppings;
        },
    },
};
</script>
