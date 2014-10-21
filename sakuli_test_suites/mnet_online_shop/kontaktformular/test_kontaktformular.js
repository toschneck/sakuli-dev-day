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
var testCase = new TestCase(60, 70);
var env = new Environment();
var screen = new Region();

try {
//    var $startUrl = "http://www.m-net.de/service/kontakt";
//    _navigateTo($startUrl);
    _highlight(_link("Kontakt"));
    _click(_link("Kontakt"));
    _highlight(_heading2("Ihr Kontakt zu M-net"));
    _assert(_isVisible(_heading2("Ihr Kontakt zu M-net")));

    _highlight(_radio("noch_kein_kunde"));
    _click(_radio("noch_kein_kunde"));

    _highlight(_submit("Weiter"));
    _click(_submit("Weiter"));

    _highlight(_radio("privatkunde"));
    _click(_radio("privatkunde"));

    _highlight(_submit("Weiter"));
    _click(_submit("Weiter"));

    _highlight(_radio("internet_in_meiner_region"));
    _click(_radio("internet_in_meiner_region"));

    _highlight(_submit("Weiter"));
    _click(_submit("Weiter"));

    _highlight(_label("Herr"));
    _click(_label("Herr"));

    _highlight(_radio("powermail_field_anrede_2"));
    _click(_radio("powermail_field_anrede_2"));

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

    _highlight(_textbox("tx_powermail_pi1[field][109]"));
    _setValue(_textbox("tx_powermail_pi1[field][109]"), "max.mustermann@gmx.de");

    _highlight(_select("tx_powermail_pi1[field][88][0]"));
    _setSelected(_select("tx_powermail_pi1[field][88][0]"), "3");

    _highlight(_select("tx_powermail_pi1[field][87][0]"));
    _setSelected(_select("tx_powermail_pi1[field][87][0]"), "März");

    _highlight(_select("tx_powermail_pi1[field][86][0]"));
    _setSelected(_select("tx_powermail_pi1[field][86][0]"), "1933");

    _highlight(_textbox("tx_powermail_pi1[field][104]"));
    _setValue(_textbox("tx_powermail_pi1[field][104]"), "08446");

    _highlight(_textbox("tx_powermail_pi1[field][103]"));
    _setValue(_textbox("tx_powermail_pi1[field][103]"), "333333");

    _highlight(_label("Surf & Fon-Flat 18"));
    _click(_label("Surf & Fon-Flat 18"));

    _highlight(_checkbox("tx_powermail_pi1[field][117][0] gruppe_117"));
    _click(_checkbox("tx_powermail_pi1[field][117][0] gruppe_117"));

    _highlight(_label("Surf-Flat 18 Regio"));
    _click(_label("Surf-Flat 18 Regio"));

    _highlight(_checkbox("tx_powermail_pi1[field][117][3] gruppe_117"));
    _click(_checkbox("tx_powermail_pi1[field][117][3] gruppe_117"));

    _highlight(_label("M-net Flat"));
    _click(_label("M-net Flat"));

    _highlight(_checkbox("tx_powermail_pi1[field][117][5] gruppe_117"));
    _click(_checkbox("tx_powermail_pi1[field][117][5] gruppe_117"));

    _highlight(_textarea("tx_powermail_pi1[field][123][0]"));
    _setValue(_textarea("tx_powermail_pi1[field][123][0]"), "Lorem Ipsum dolor sit amet.");

    _highlight(_label("Ich wünsche eine Antwort per Email*"));
    _click(_label("Ich wünsche eine Antwort per Email*"));

    _highlight(_checkbox("tx_powermail_pi1[field][122][0] gruppe_122"));
    _click(_checkbox("tx_powermail_pi1[field][122][0] gruppe_122"));


    _highlight(_submit("Absenden"));


} catch (e) {
    testCase.handleException(e);
} finally {
    testCase.saveResult();
}

