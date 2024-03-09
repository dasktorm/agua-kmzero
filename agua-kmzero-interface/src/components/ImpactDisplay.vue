<template>
    <div class="impact-display">
      <p v-if="impactCalculated">
        <span class="impact-text">Impact:</span>
        <span class="impact-value">
          {{ bottlesSaved }} bottles <br>
          ({{ plasticSaved }} kg of plastic saved)
        </span>
      </p>
      <p v-if="impactCalculated">
        <span class="impact-text">Did you know?</span>
        <span class="impact-value">
          This is the impact of your refill<br>
          {{ carbonSaved }} kg<br>
          ({{ co2Emissions }} of CO2 emissions)
        </span>
      </p>
      <p v-if="impactCalculated">
        <span class="impact-text">(Plastic bottles)</span>
        <span class="impact-value">
          Share your Impact!
        </span>
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ImpactDisplay',
    props: {
      bottlesSaved: {
        type: Number,
        required: true,
      },
      plasticSaved: {
        type: String,
        required: true,
      },
      carbonSaved: {
        type: String,
        required: true,
      },
      co2Emissions: {
        type: String,
        required: true,
      },
      impactCalculated: {
        type: Boolean,
        required: true,
      },
    },
  };
  </script>
  
  <style>
  .impact-display {
    margin-top: 1rem;
    border: 1px solid #ccc;
    padding: 0.5rem;
    background-color: #f8f8f8;
  }
  
  .impact-text {
    font-weight: bold;
    display: block;
    text-align: left;
    width: 50%;
  }
  
  .impact-value {
    font-weight: normal;
    display: block;
    text-align: right;
    width: 50%;
  }
  </style>