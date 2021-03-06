import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";

import Navigo from "navigo";
import { capitalize } from "lodash";

const router = new Navigo("/");

router
  .on({
    "/": () => render(state.Home),
    ":page": (params) => {
      let page = capitalize(params.data.page);
      render(state[page]);
    },
  })
  .resolve();

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}
`;
addEventListeners();
  router.updatePageLinks();

}

// add menu toggle to bars icon in nav bar


  function addEventListeners(){
    const hamburger =  document.querySelector(".fa-bars")

    hamburger.addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );



  }
