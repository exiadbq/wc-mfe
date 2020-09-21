<template>
  <section>
    <h1>{{ msg }}</h1>
    <div v-if="tz">
      {{ displayDate }}
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
    eventBus.on("tzApply", data => {
      this.tz = data.message;
    });
  },
  data() {
    return {
      displayDate: null,
      polling: null,
      tz: null
    };
  },
  methods: {
    pollData() {
      this.polling = setInterval(() => {
        if (this.tz) {
          this.displayDate =
              DateTime.local().setZone(this.tz.zoneName).toFormat('hh:mm:S');
        }
      }, 1000);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
