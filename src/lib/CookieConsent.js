// import WrapperFilter from "./WrapperFilter";
import Interface from "./Interface";
import Configuration from "./Configuration";
// import RemoveCookies from "./RemoveCookies";

export default class CookieConsent {
  init(configObject) {
    new Configuration(configObject);

    // const removeCookies = new RemoveCookies();
    //const wrapperFilter = new WrapperFilter();

    // removeCookies.init();
    // wrapperFilter.init();

    const UI = new Interface();

    UI.buildInterface(() => {
      UI.addEventListeners();
    });
  }
}
