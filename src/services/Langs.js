import Map from "./Langs/Map";

export default class Langs {
  constructor(Vue) {
    this.Vue = Vue;
    this.defaultLang = "en";
    this.lang = this.defaultLang;
  }

  setLang(lang) {
    this.lang = lang.toLowerCase();
  }

  // keep simple for now
  _(key, argument) {
    const sentence = Map[this.lang][key] || Map[this.defaultLang][key];
    return sentence ? sentence.replace("%s", argument) : sentence;
  }
}
