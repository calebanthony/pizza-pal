<template>
    <div class="field column is-4 is-offset-4" v-if="peopleExist">
        <form v-on:submit.prevent="addNewPerson({numPeople: totalEaters})">
            <p class="control">
                <input
                    class="input title is-3 has-text-centered"
                    type="text"
                    placeholder="How Many Eaters?"
                    v-model="totalEaters"
                >
            </p>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'getEaters',
    data() {
        return {
            totalEaters: null,
        };
    },
    methods: mapActions([
        'addNewPerson',
    ]),
    computed: {
        peopleExist() {
            if (this.$store.state.people.length > 0) {
                return false;
            }
            return true;
        },
    },
};
</script>
