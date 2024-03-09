<template>
  <div id="app">
    <RefillInput
      :reeeefills="reeeeefills"
      @add-refill="addRefill"
      @calculate-impact="calculateImpact"
    />
    <ImpactDisplay
      :bottles-saved="bottlesSaved"
      :plastic-saved="plasticSaved"
      :carbon-saved="carbonSaved"
      :co2-emissions="co2Emissions"
      :impact-calculated="impactCalculated"
    />
  </div>
</template>

<script>
import RefillInput from './RefillInput.vue';
import ImpactDisplay from './ImpactDisplay.vue';

export default {
  name: 'App',
  components: {
    RefillInput,
    ImpactDisplay,
  },
  data() {
    return {
      reeeefills: 2,
      currentRefills: 2,
      impactCalculated: false,
    };
  },
  computed: {
    bottlesSaved() {
      return this.currentRefills * 2;
    },
    plasticSaved() {
      return (this.bottlesSaved * 0.012).toFixed(2);
    },
    carbonSaved() {
      return (this.bottlesSaved * 0.08).toFixed(2);
    },
    co2Emissions() {
      return (this.carbonSaved / 0.08).toFixed(0);
    },
  },
  methods: {
    addRefill() {
      this.currentRefills++;
    },
    calculateImpact() {
      this.impactCalculated = true;
    },
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 2rem;
}
</style>