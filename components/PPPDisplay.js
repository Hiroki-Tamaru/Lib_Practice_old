app.component("p-display", {
  props: {
    PPPData: {
      type: Array,
      required: true
    }
  },
  template:
    /*html*/
    `
<div class="p-display">

<send-receive-buttons></send-receive-buttons>

<ul>
  <li v-for="PPP in PPPData" :key="PPP.id">
    {{ PPP.id PPP.PPPname PPP.AAAname PPP.CCCname PPP.RRRname }}
  </li>
</ul>


</div>
  `
});
