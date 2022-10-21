<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <span id="status">Initializing...</span>
    <div id="controls" style="display: none">
      <select id="cameraSelect" style="max-width: 200px"></select>
      <button id="controlButton">Start Scanning</button>
      <div id="result"></div>
    </div>
  </div>
</template>

  <script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { Plugins } from "@capacitor/core";
import { DBR } from "capacitor-plugin-dynamsoft-barcode-reader";
export default {
  data() {
    return {};
  },
  mounted() {
    this.initDBR();
  },
  methods: {
    async  initDBR(){
  let options = {license:"DLS2eyJoYW5kc2hha2VDb2RlIjoiMjAwMDAxLTE2NDk4Mjk3OTI2MzUiLCJvcmdhbml6YXRpb25JRCI6IjIwMDAwMSIsInNlc3Npb25QYXNzd29yZCI6IndTcGR6Vm05WDJrcEQ5YUoifQ=="};
  let result = await DBR.initialize(options);
  if (result) {
    if (result.success == true) {
      await loadCameras();
      document.getElementById("status").remove();
      document.getElementById("controls").style.display = "";
      DBR.addListener('onFrameRead', (retObj) => {
        onFrameRead(retObj);
      });
    }
  }
  async function loadCameras(){
  let cameraSelect = document.getElementById("cameraSelect");
  let result = await DBR.getAllCameras();
  result.cameras.forEach(camera => {
    let option = document.createElement("option");
    option.value = camera;
    option.label = camera;
    cameraSelect.appendChild(option);
  });
}


}
  },
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>