<template>
    <div class="column is-4">
        <div class="field">
            <p class="control has-icons-left">
                <input class="input" type="text" placeholder="Name" :value="data.name">
                <span class="icon is-small is-left">
                    <i class="fa fa-user"></i>
                </span>
            </p>
        </div>
        <ToppingTagsBlock :person="data.id"></ToppingTagsBlock>
        <HungryLevel :person="data.id"></HungryLevel>
    </div>
</template>

<script>
import ToppingTagsBlock from './ToppingTagsBlock';
import HungryLevel from './HungryLevel';

export default {
    name: 'personCard',
    components: {
        HungryLevel,
        ToppingTagsBlock,
    },
    props: ['data'],
};
</script>
