<template lang="pug">
  .LinearChartSmall(ref="chartdiv")
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4lang_ru_RU from "@amcharts/amcharts4/lang/ru_RU";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default {
  name: "LinearChartSmall",
  methods: {
    renderLinearChart() {
      const chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart);
      //ФОРМАТ ГРАФИКА
      chart.language.locale = am4lang_ru_RU;
      // chart.numberFormatter.numberFormat = "#₽";
      chart.dy = 20;
      chart.dx = -17;
      chart.minWidth = 600;

      //ЗАГОЛОВОК
      const title1 = chart.titles.create();
      title1.text = "Количество инвестиций";
      title1.fontFamily = "Futura PT";
      title1.fontSize = 14;
      title1.fontWeight = "normal";
      title1.fill = am4core.color("#7F80A4");
      title1.align = "left";
      title1.x = 55;
      title1.y = 40;
      title1.isMeasured = false;
      const circleTitle1 = chart.titles.create();
      circleTitle1.text = "•";
      circleTitle1.fontSize = 25;
      circleTitle1.fill = am4core.color("#4B98F8");
      circleTitle1.isMeasured = false;
      circleTitle1.align = "left";
      circleTitle1.x = 35;
      circleTitle1.y = 33;

      const title2 = chart.titles.create();
      title2.text = "Количество участников в проекте";
      title2.fontFamily = "Futura PT";
      title2.fontSize = 14;
      title2.fontWeight = "normal";
      title2.fill = am4core.color("#7F80A4");
      title2.align = "left";
      title2.x = 55;
      title2.isMeasured = false;
      const circleTitle2 = chart.titles.create();
      circleTitle2.text = "•";
      circleTitle2.fontSize = 25;
      circleTitle2.fill = am4core.color("#1A4B93");
      circleTitle2.isMeasured = false;
      circleTitle2.align = "left";
      circleTitle2.x = 35;
      circleTitle2.y = -7;

      //ДЕФОЛТНЫЕ СТИЛИ
      //нижняя заливка
      const fillModifier = new am4core.LinearGradientModifier();
      fillModifier.opacities = [0.3, 0];
      fillModifier.offsets = [0, 1];
      fillModifier.gradient.rotation = 90;

      //ЗНАЧЕНИЯ ДЛЯ ГРАФИКОВ
      //Значения для 1го графика
      const values_1 = [250000, 180000, 200000, 170000, 200000, 190000, 210000];
      //Значения для 2го графика
      const values_2 = [10, 20, 15, 11, 7, 6, 10];
      //Общие значения
      const data = [];
      values_1.forEach((value, index) => {
        data.push({
          date: new Date().setMonth(new Date().getMonth() - index),
          value: value,
          value2: values_2[index]
        });
      });
      chart.data = data;

      //ОСЬ ДАТ
      const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      //сетка
      dateAxis.renderer.grid.template.location = 0;
      dateAxis.renderer.grid.template.strokeWidth = 0;
      dateAxis.renderer.labels.template.location = -0.7;
      dateAxis.renderer.inside = true;
      //стили
      dateAxis.renderer.labels.template.fill = am4core.color("#9B9B9B");
      dateAxis.fontFamily = "Futura PT";
      dateAxis.fontSize = 14;

      // ОСЬ ЗНАЧЕНИЙ
      const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.grid.template.strokeWidth = 0;
      valueAxis.renderer.labels.template.width = 0;
      valueAxis.renderer.inside = true;
      valueAxis.opacity = 0;
      valueAxis.tooltip.disabled = true;

      const valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis2.renderer.inside = true;
      valueAxis2.opacity = 0;
      valueAxis2.tooltip.disabled = true;

      //ПЕРВАЯ ЛИНИЯ
      //инициализация
      const series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.dateX = "date";
      series.dataFields.valueY = "value";
      series.legendSettings.itemValueText = "series1";
      //стили
      series.fill = am4core.color("#e1e1e1");
      series.fillOpacity = 1;
      series.tensionX = 0.8;
      series.stroke = am4core.color("#4B98F8");
      series.strokeWidth = 5;
      //нижняя заливка
      series.segments.template.fillModifier = fillModifier;
      //круг
      const circleBullet1 = new am4charts.CircleBullet();
      circleBullet1.circle.radius = 2.5;
      circleBullet1.dy = -12;
      circleBullet1.circle.fill = am4core.color("#4B98F8");
      series.bullets.push(circleBullet1);
      //текст над кругом
      const labelBullet1 = series.bullets.push(new am4charts.LabelBullet());
      labelBullet1.label.text = "{value} ₽";
      labelBullet1.fontSize = 14;
      labelBullet1.fontWeight = 600;
      labelBullet1.fontFamily = "Futura PT";
      labelBullet1.label.fill = am4core.color("#4B98F8");
      labelBullet1.label.dy = -24;

      //ВТОРАЯ ЛИНИЯ
      //инициализация
      const series2 = chart.series.push(new am4charts.LineSeries());
      series2.dataFields.dateX = "date";
      series2.dataFields.valueY = "value2";
      series2.yAxis = valueAxis2;
      // стили
      series2.fill = am4core.color("#e1e1e1");
      series2.fillOpacity = 1;
      series2.tensionX = 0.8;
      series2.stroke = am4core.color("#1A4B93");
      series2.strokeWidth = 5;
      //нижняя заливка
      series2.segments.template.fillModifier = fillModifier;
      //круг
      const circleBullet2 = new am4charts.CircleBullet();
      circleBullet2.circle.radius = 2.5;
      circleBullet2.dy = -12;
      circleBullet2.circle.fill = am4core.color("#1A4B93");
      series2.bullets.push(circleBullet2);
      //текст над кругом
      const labelBullet2 = series2.bullets.push(new am4charts.LabelBullet());
      labelBullet2.label.text = "{value2} человек";
      labelBullet2.fontSize = 14;
      labelBullet2.fontWeight = 600;
      labelBullet2.fontFamily = "Futura PT";
      labelBullet2.label.fill = am4core.color("#1A4B93");
      labelBullet2.label.dy = -24;

      this.chart = chart;
    }
  },
  mounted() {
    this.renderLinearChart();
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.LinearChartSmall {
  height: 250px;
  width: 573px;
}
</style>
