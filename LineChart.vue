<script>
// no template, JavaScript render chart
import Line from 'vue-chartjs';

export default {
  extends: Line,
  props: {
    label: {
      type: String
    },
    chartData: {
      type: Array
    },
    options: {
      type: Object
    },
    chartColors: {
      type: Object
    }
  },
   //another view lifecycle
    //render chart
    // flat array have to be
    mounted(){
        //api decending order so reverse
        const dates= this.chartData.map(entity=> entity.date).reverse();
        const totals= this.chartData.map(entity=> entity.total).reverse();

    const {
      borderColor,
      pointBorderColor,
      pointBackgroundColor,
      backgroundColor
    } = this.chartColors;

    this.renderChart(
      {
        labels: dates,
        datasets: [
          {
            label: this.label,
            data: totals,
            borderColor: borderColor,
            pointBorderColor: pointBorderColor,
            pointBackgroundColor: pointBackgroundColor,
            backgroundColor: backgroundColor
          }
        ]
      },
      this.options
    );
    }
};
</script>