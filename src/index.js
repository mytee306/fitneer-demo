import register from "./components/complex/register.js";
import main from "./components/complex/main.js";

const app = document.querySelector( "#app" );
app.innerHTML = register.content;

const Store = {
  activate: ( id, event = "click" ) => {
    document.querySelector(`#${id}`).addEventListener(event, () => {
      Store.dispatch( id );
    });
  },
  dispatch: (action) => {
    switch (action) {
      case "facebook":
        app.innerHTML = main.content;
        break;

      default:
        break;
    }
  }
};

Store.activate( "facebook" );

/**
 * TODO
 * Lazy Load main.js
 */
