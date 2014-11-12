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

// Pfad zu AcroRd32 in User-Env PATH hinzufügen!

_dynamicInclude($includeFolder);
var testCase = new TestCase(60, 70);
var env = new Environment();
var screen = new Region();

try {
//    var $startUrl = "http://www.m-net.de";
//    var $startUrl = "http://mnettestshop-prelive/is-bin/INTERSHOP.enfinity/WFS/MNET-STORE-Site/de_DE/-/EUR/ViewApplication-StartAgent?AgentName=online-shop-kengelna&PosCode=0007";
//    _navigateTo($startUrl);
    _highlight(_link("Internet & Telefon"));
    _mouseOver(_link("Internet & Telefon"));
    _highlight(_link("Surf-Flat 100"));
    _click(_link("Surf-Flat 100"));
//    env.sleep(999);


    _highlight(_span("Zusatzoptionen"));
    _click(_span("Zusatzoptionen"));
    _highlight(_link("Jetzt bestellen"));
    _click(_link("Jetzt bestellen"));
    _highlight(_textbox("ZipCode[1]"));
    _setValue(_textbox("ZipCode[1]"), "80804");
    _click(_link("80804"));

    _highlight(_textbox("StreetWithDistrict[1]"));
    _setValue(_textbox("StreetWithDistrict[1]"), "Düsseldorfer Str.");
    _highlight(_link("Düsseldorfer Str."));
    _click(_link("Düsseldorfer Str."));
    _highlight(_textbox("HouseNumberWithExtension[1]"));
    _setValue(_textbox("HouseNumberWithExtension[1]"), "13");
    _highlight(_submit("Verfügbarkeit prüfen[1]"));
    _click(_submit("Verfügbarkeit prüfen[1]"));
    _highlight(_submit("Weiter[1]"));
    _click(_submit("Weiter[1]"));
    _highlight(_textbox("couponInput"));
    _setValue(_textbox("couponInput"), "SFGS25");
    _highlight(_submit("Code einlösen"));
    _click(_submit("Code einlösen"));

    _highlight(_span("Der Aktionscode SFG25 wurde eingelöst"));
    _assert(_isVisible(_span("Der Aktionscode SFG25 wurde eingelöst")));
    _highlight(_submit("Weiter"));
    _click(_submit("Weiter"));
    _highlight(_select("PersonalDataForm_Salutation"));
    _setSelected(_select("PersonalDataForm_Salutation"), "Herr");
    _highlight(_textbox("PersonalDataForm_Firstname"));
    _setValue(_textbox("PersonalDataForm_Firstname"), "Max");
    _highlight(_textbox("PersonalDataForm_Name"));
    _setValue(_textbox("PersonalDataForm_Name"), "Mustermann");
    _highlight(_textbox("PersonalDataForm_GuidedAddressInput_PLZ"));
    _assertEqual("80804", _getValue(_textbox("PersonalDataForm_GuidedAddressInput_PLZ")));
    _highlight(_select("PersonalDataForm_GuidedAddressInput_City"));
    _assertEqual("München", _getSelectedText(_select("PersonalDataForm_GuidedAddressInput_City")));
    _highlight(_select("PersonalDataForm_GuidedAddressInput_Street"));
    _assertEqual("Düsseldorfer Str.", _getSelectedText(_select("PersonalDataForm_GuidedAddressInput_Street")));
    _highlight(_select("PersonalDataForm_GuidedAddressInput_HouseNumber"));
    _assertEqual("13", _getSelectedText(_select("PersonalDataForm_GuidedAddressInput_HouseNumber")));
    _highlight(_textbox("PersonalDataForm_FloorApartment"));
    _setValue(_textbox("PersonalDataForm_FloorApartment"), "4. OG");
    _highlight(_textbox("PersonalDataForm_Phone1"));
    _setValue(_textbox("PersonalDataForm_Phone1"), "089");
    _highlight(_textbox("PersonalDataForm_Phone2"));
    _setValue(_textbox("PersonalDataForm_Phone2"), "333444");
    _highlight(_textbox("PersonalDataForm_EMail"));
    _setValue(_textbox("PersonalDataForm_EMail"), "max.mustermann@gmx.de");
    _highlight(_textbox("PrivateDataForm_DateOfBirth"));
    _setValue(_textbox("PrivateDataForm_DateOfBirth"), "02.05.1977");
    _highlight(_textbox("PaymentForm_Iban"));
    _setValue(_textbox("PaymentForm_Iban"), "DE42720500000000066555");
    _highlight(_textbox("PaymentForm_Bic"));
    _setValue(_textbox("PaymentForm_Bic"), "AUGSDE77XXX");
    _highlight(_submit("Weiter"));
    _click(_submit("Weiter"));
    _highlight(_submit("Weiter"));
    _click(_submit("Weiter"));

    _highlight(_link("Allgemeinen Geschäftsbedingungen"));

    _click(_link("Allgemeinen Geschäftsbedingungen"));

//TODO TS validate PDF
//_saveDownloadedAs("C:/sakuli/sahi/userdata/temp/download/agb1.pdf");
//var appAdobeReader = new Application("AcroRd32.exe " + "C:/sakuli/sahi/userdata/temp/download/agb1.pdf");
//appAdobeReader.open();

} catch (e) {
    testCase.handleException(e);
} finally {
    testCase.saveResult();
}
