"use strict";
const Antl = use("Antl");
class FortPassword {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      email: "required|email",
      redirect_url: "required|url"
    };
  }

  get messages() {
    return Antl.list("validation");
  }
}

module.exports = FortPassword;
