function login() {
    _navigateTo("http://cm6-cvcm-stage.int.consol.de:8080/cm-client");

    _highlight(_textbox("username"));
    _setValue(_textbox("username"), "sakuli");
    _setValue(_password("password"), "XXXXXX");

    _highlight(_submit(":submit"));
    _click(_submit(":submit"));
}