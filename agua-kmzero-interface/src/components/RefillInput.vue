<template>
    <div class="refill-input">
      <p>How many reeeefills? {{ reeeefills }}</p>
      <button @click="addRefill">Add Refill</button>
      <button @click="calculateImpact" class="calculate-impact-button">Calculate Impact</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RefillInput',
    props: {
      reeeefills: {
        type: Number,
        required: true,
      },
      onCalculateImpact: {
        type: Function,
        required: true,
      },
    },
    methods: {
      addRefill() {
        this.$emit('add-refill');
      },
      calculateImpact() {
        this.onCalculateImpact();
      },
    },
  };
  </script>
  
  <style>
  .refill-input {
    font-family: Arial, sans-serif;
    text-align: center;
    padding: 2rem;
  }
  
  .calculate-impact-button {
    margin-top: 1rem;
  }
  </style>