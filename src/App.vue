<template>
    <div id="app" class="container">
        <Hero></Hero>
        <GetEaters></GetEaters>
        <CalculatePizza></CalculatePizza>
        <ShowPizzaOrder></ShowPizzaOrder>
        <div class="section">
            <div class="columns is-multiline">
                <PersonCard v-for="(person, key) in $store.state.people" :data="person" :key="key"></PersonCard>
            </div>
        </div>
    </div>
</template>

<script>
import PersonCard from './components/PersonCard';
import Hero from './components/Hero';
import GetEaters from './components/GetEaters';
import CalculatePizza from './components/CalculatePizza';
import ShowPizzaOrder from './components/ShowPizzaOrder';

export default {
    name: 'app',
    components: {
        Hero,
        GetEaters,
        CalculatePizza,
        ShowPizzaOrder,
        PersonCard,
    },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
