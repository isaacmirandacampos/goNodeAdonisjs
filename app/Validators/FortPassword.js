"use strict";

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
}

module.exports = FortPassword;
