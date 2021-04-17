<template>
	<div class="container">
    <div class="row mt-5">
      <div class="col">
        <h1 class="text-center">COVID-19 DATA</h1>
      </div>
    </div>
    <div class="row mt-5" v-if="arrPositive.length > 0">
      <div class="col">
        <h2 class="text-center">Positive</h2>
        <line-chart
          :chartData="arrPositive"
          :options="chartOptions"
          :chartColors="positiveChartColors"
          label="Positive"
        />
      </div>
    </div>

    <div class="row mt-5" v-if="arrHospitalized.length > 0">
      <div class="col">
        <h2 class="text-center">Hospitalized</h2>
        <line-chart
          :chartData="arrHospitalized"
          :options="chartOptions"
          :chartColors="hospitalizedChartColors"
          label="Hospitalized"
        />
      </div>
    </div>

    <div class="row mt-5" v-if="arrInIcu.length > 0">
      <div class="col">
        <h2 class="text-center">In ICU</h2>
        <line-chart
          :chartData="arrInIcu"
          :options="chartOptions"
          :chartColors="inIcuColors"
          label="In ICU"
        />
      </div>
    </div>

    <div class="row mt-5" v-if="arrOnVentilators.length > 0">
      <div class="col">
        <h2 class="text-center">On Ventilators</h2>
        <line-chart
          :chartData="arrOnVentilators"
          :options="chartOptions"
          :chartColors="onVentilatorsColors"
          label="On Ventilators"
        />
      </div>
    </div>

    <div class="row mt-5" v-if="arrRecovered.length > 0">
      <div class="col">
        <h2 class="text-center">Recovered</h2>
        <line-chart
          :chartData="arrRecovered"
          :options="chartOptions"
          :chartColors="recoveredColors"
          label="Recovered"
        />
      </div>
    </div>

    <div class="row mt-5 mb-5">
      <div class="col">
        <h2 class="text-center">Deaths</h2>
        <line-chart
          v-if="arrDeaths.length > 0"
          :chartData="arrDeaths"
          :options="chartOptions"
          :chartColors="deathColors"
          label="Deaths"
        />
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import moment from 'moment';
//data have diffrent formats

import LineChart from './LineChart.vue'

export default {
  name: 'App',
  components: {
    LineChart
  },
  //bunch of arrays - 1 array => 1 variable
  data() {
    
    return {
    arrPositive: [],
    arrHospitalized: [],
    arrInIcu:[],
    arrOnVentilators: [],
    arrRecovered:[],
    arrDeaths: [],
    chartOptions: {
      responsive: true,
      maintainAspectRation: false
    }
    }
  },
  // fire API axios when page loading
  async created() {
    const{data}=await axios.get("https://api.covidtracking.com/v1/us/daily.json");
   
    data.forEach(entity=>{
      const date=moment(entity.date, "YYYYMMDD").format("MM/DD");
// dataset variables, check in console
      const {
        positive,
        hospitalizedCurrently,
        inIcuCumulative,
        onVentilatorCurrently,
        recovered,
        death
      } = entity;

      //pushing stuff into arrays
      this.arrPositive.push({date, total: positive});
      this.arrHospitalized.push({date, total: hospitalizedCurrently});
      this.arrInIcu.push({date,  total: inIcuCumulative });
      this.arrOnVentilators.push({date, total:onVentilatorCurrently});
      this.arrRecovered.push({date, total: recovered});
      this.arrDeaths.push({date, total :death});

    // console.log(this.arrPositive);
  
    })
    
  }
}
</script>