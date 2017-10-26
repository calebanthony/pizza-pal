<template>
    <div class="column is-10 is-offset-1">
        <div class="columns is-multiline">
            <div class="column is-4" v-for="pizza in this.$store.state.pizza">
                <h3 class="title is-3">{{ pizza.size }} Pizza</h3>
                <div class="columns is-multiline">
                    <div class="column is-6 has-text-centered">
                        <p>One Half</p>
                        <span class="tag is-medium is-primary" v-for="topping in pizza.topping1">
                            {{ topping }}
                        </span>
                    </div>
                    <div class="column is-6 has-text-centered">
                        <p>Other Half</p>
                        <span class="tag is-medium is-primary" v-for="topping in pizza.topping2">
                            {{ topping }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'showPizzaOrder',
    computed: {
        isPizzaExists() {
            // Checks if there's more than one large pizza being calculated.
            if (Object.keys(this.$store.state.pizza).length > 0) {
                return true;
            }
            return false;
        },
    },
};
</script>
