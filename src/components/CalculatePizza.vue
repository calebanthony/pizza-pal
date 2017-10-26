<template>
    <div class="column is-4 is-offset-4" v-if="peopleExist">
        <button class="button is-large is-outlined is-primary" @click="calcPizza">
            Get Pizza!
        </button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'calculatePizza',
    methods: mapActions([
        'calcPizza',
    ]),
    computed: {
        peopleExist() {
            if (this.$store.state.people.length > 0) {
                return true;
            }
            return false;
        },
    },
};
</script>
