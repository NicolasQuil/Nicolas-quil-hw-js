import { doSearchApi } from "./empManager.js";

export const declareEvents = () => {
  let btn_search = document.querySelector("#btn_search");
  let id_input = document.querySelector("#id_input");

  id_input.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      let input_val = document.querySelector("#id_input").value;
      doSearchApi(input_val);
    }
  })

  btn_search.addEventListener("click", () => {
    let input_val = document.querySelector("#id_input").value;
    doSearchApi(input_val);
  })
}