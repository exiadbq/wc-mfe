<template>
  <section>
    <h1>{{ msg }}</h1>
    <div v-if="tz">
      <strong>{{ tz.zoneName }} time now</strong>
      <div :style="{display:'flex', alignItems:'baseline'}">
        <strong :style="{
          fontSize: 'xxx-large',width:'215px' }">
          {{ displayDate.time }}
        </strong>
        <sub :style="{ color: 'grey' }">
          {{ displayDate.meridiem }}
        </sub>
      </div>
      <div :style="{ color: 'slategrey' }">
        {{ displayDate.weekday }}
      </div>
    </div>
  </section>
</template>

<script>
import eventBus from "../eventBus";
import { DateTime } from "luxon";
export default {
  name: "CurrentDate",
  props: {
    msg: String
  },
  beforeDestroy() {
    clearInterval(this.polling);
    eventBus.remove("tzApply");
  },
  created() {
    this.pollData();
    const [,tz] = window.location.href.split('#');
    if (tz) {
      this.tz = {zoneName: tz};
    }
    eventBus.on("tzApply", data => {
      this.tz = data.message;
    });
  },
  data() {
    return {
      displayDate: {},
      polling: null,
      tz: null
    };
  },
  methods: {
    pollData() {
      this.polling = setInterval(() => {
        if (this.tz) {
          const dt = DateTime.local().setZone(this.tz.zoneName);
          this.displayDate = {
            time: dt.toFormat("TT"),
            meridiem: dt.toFormat("a"),
            weekday: dt.toFormat("DDDD")
          };
        }
      }, 1000);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
