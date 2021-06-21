import { registerApplication, start } from "single-spa";
import { activeMfeFunctions } from "./active-functions";

const microfrontends = Object.keys(activeMfeFunctions);

microfrontends.forEach(name => {
  let elementForMfe = document.getElementById(`single-spa-application:${name}`);

  if (!elementForMfe) {
    const microFrontendElement = document.createElement('div');
    microFrontendElement.setAttribute('id', `single-spa-application:${name}`);

    elementForMfe = microFrontendElement;
  }
  
  document.body.appendChild(elementForMfe);

  registerApplication({
    name,
    app: () => System.import(name),
    activeWhen: activeMfeFunctions[name]
  });
})

start();
