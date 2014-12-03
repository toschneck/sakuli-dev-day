/*
 * Sakuli - Testing and Monitoring-Tool for Websites and common UIs.
 *
 * Copyright 2013 - 2014 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

_dynamicInclude($includeFolder);
var testCase = new TestCase(40, 50);
var env = new Environment();
var screen = new Region();

try {
    _highlight(_link("Kontakt"));
    _focus(_link("Kontakt", _near(_link("M-net Shopfinder"))));
    env.sleep(3);
    _highlight(_link("Kontakt", _near(_link("M-net Shopfinder"))));
    _click(_link("Kontakt", _near(_link("M-net Shopfinder"))));

    _highlight(_heading2("Ihr Kontakt zu M-net"));
    _assert(_isVisible(_heading2("Ihr Kontakt zu M-net")));

    _highlight(_radio("noch_kein_kunde"));
    _click(_radio("noch_kein_kunde"));

    _highlight(_submit("Weiter"));
    _click(_submit("Weiter"));
    testCase.endOfStep("select no customer contact form", 10);

    _highlight(_radio("privatkunde"));
    _click(_radio("privatkunde"));
    env.sleep(3);
    _highlight(_submit("Weiter"));
    _click(_submit("Weiter"));
    testCase.endOfStep("select private customer", 6);

    _highlight(_radio("internet_in_meiner_region"));
    _click(_radio("internet_in_meiner_region"));
    env.sleep(3);
    _highlight(_submit("Weiter"));
    _click(_submit("Weiter"));

    _highlight(_label("Herr"));
    _click(_label("Herr"));

    _highlight(_radio("powermail_field_anrede_2"));
    _click(_radio("powermail_field_anrede_2"));

    // Recorder based code
    _highlight(_textbox("tx_powermail_pi1[field][119]"));
    _setValue(_textbox("tx_powermail_pi1[field][119]"), "Max");

    _highlight(_textbox("tx_powermail_pi1[field][116]"));
    _setValue(_textbox("tx_powermail_pi1[field][116]"), "Mustermann");

    _highlight(_textbox("tx_powermail_pi1[field][114]"));
    _setValue(_textbox("tx_powermail_pi1[field][114]"), "Dorfstraße");

    _highlight(_textbox("tx_powermail_pi1[field][113]"));
    _setValue(_textbox("tx_powermail_pi1[field][113]"), "16");

    _highlight(_textbox("tx_powermail_pi1[field][112]"));
    _setValue(_textbox("tx_powermail_pi1[field][112]"), "82246");

    _highlight(_textbox("tx_powermail_pi1[field][111]"));
    _setValue(_textbox("tx_powermail_pi1[field][111]"), "Musterdorf");

    _highlight(_textbox("tx_powermail_pi1[field][110]"));
    _setValue(_textbox("tx_powermail_pi1[field][110]"), "Süd");

    //developer code
    _highlight(_textbox("powermail_field_e_mailadresse"));
    _setValue(_textbox("powermail_field_e_mailadresse"), "max.mustermann@gmx.de");

    _highlight(_select("powermail_field_gebdat_day"));
    _setSelected(_select("powermail_field_gebdat_day"), "3");

    _highlight(_select("powermail_field_gebdat_month"));
    _setSelected(_select("powermail_field_gebdat_month"), "März");

    _highlight(_select("powermail_field_gebdat_year"));
    _setSelected(_select("powermail_field_gebdat_year"), "1933");

    _highlight(_select("powermail_field_gebdat_year"));
    _setValue(_select("powermail_field_gebdat_year"), "08446");

    _highlight(_select("powermail_field_gebdat_year"));
    _setValue(_select("powermail_field_gebdat_year"), "333333");
    testCase.endOfStep("enter contact data", 15);

    _highlight(_label("Surf & Fon-Flat 18"));
    _click(_label("Surf & Fon-Flat 18"));
    _highlight(_label("Surf & Fon-Flat 50"));
    _click(_label("Surf & Fon-Flat 50"));

    _highlight(_label("Surf-Flat 18 Regio"));
    _click(_label("Surf-Flat 18 Regio"));
    _highlight(_label("Surf-Flat 50 Regio"));
    _click(_label("Surf-Flat 50 Regio"));
    env.sleep(3);

    _highlight(_textarea(/tx_powermail.*/, _near(_label("Ihre Mitteilung"))));
    _setValue(_textarea(/tx_powermail.*/, _near(_label("Ihre Mitteilung"))), "Hallo M-Net, das ist ein Test!");

    _highlight(_label(/.*eine Antwort per Email.*/));
    _click(_label(/.*eine Antwort per Email.*/));

    _highlight(_label(/.*JA, ich möchte.*E-Mail.*Produkt.*/));
    _click(_label(/.*JA, ich möchte.*E-Mail.*Produkt.*/));
    testCase.endOfStep("enter product info and message", 7);

    //check if SIT-System => if true: send the form
    _focus(_submit("Absenden"));
    env.sleep(3);
    var regExTestSystem = /.*\.intern\.m-net\.de.*/;
    if (testCase.getLastURL().match(regExTestSystem)) {
        _highlight(_submit("Absenden"));
        _click(_submit("Absenden"));

        //validate the confirm text
        _assert(_isVisible(_heading1("Danke für Ihre Kontaktaufnahme.")));
        _highlight(_heading1("Danke für Ihre Kontaktaufnahme."));
        env.sleep(3);
    } else {
        env.logInfo("Don't send the contact formula, in case of productive system URL: " + testCase.getLastURL());
    }
    testCase.endOfStep("send form to Mnet", 12);

} catch (e) {
    testCase.handleException(e);
} finally {
    testCase.saveResult();
    //env.sleep(9999);
}

