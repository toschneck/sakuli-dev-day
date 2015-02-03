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
var testCase = new TestCase(80, 100);
var env = new Environment();
var screen = new Region();
var $pdfFileName = "AGB.pdf";
var $orderConfFileName = "Bestellbestaetigung.pdf";
var notClosed = [];

try {
    _highlight(_link("Internet & Telefon"));
    _mouseOver(_link("Internet & Telefon"));
    env.sleep(1);
    _highlight(_link("Surf-Flat 100"));
    _click(_link("Surf-Flat 100"));
    env.sleep(3);
    testCase.endOfStep("select SF 100", 8);

    _wait(5000, _exists(_span("Surf-Flat 100")));
    if (_exists(_span("Zusatzoptionen"))) {
        env.logInfo("ZUSATZOPTION SITE!!!")
        _highlight(_span("Zusatzoptionen"));
        _click(_span("Zusatzoptionen"));
        _focus(_link("Jetzt bestellen"));
        _highlight(_link("Jetzt bestellen"));
        _click(_link("Jetzt bestellen"));
        env.sleep(1);
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
        _focus(_submit("Weiter[1]"));
        _highlight(_submit("Weiter[1]"));
        _click(_submit("Weiter[1]"));
    } else {
        env.logInfo("NEW SITE???")
        _focus(_submit(1));
        _highlight(_submit(1));
        _click(_submit(1));
    }
    env.sleep(3);
    testCase.endOfStep("check availability", 15);

    _highlight(_textbox("couponInput"));
    _setValue(_textbox("couponInput"), "SFGS25");
    env.sleep(1);
    _highlight(_submit("Code einlösen"));
    _click(_submit("Code einlösen"));
    _highlight(_span("Der Aktionscode SFG25 wurde eingelöst"));
    _assert(_isVisible(_span("Der Aktionscode SFG25 wurde eingelöst")));
    env.sleep(3);
    testCase.endOfStep("check coupon SFG25", 15);

    _focus(_submit("Weiter"));
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
    _focus(_submit("Weiter"));
    env.sleep(3);
    _highlight(_submit("Weiter"));
    _click(_submit("Weiter"));
    env.sleep(1);
    _highlight(_submit("Weiter"));
    _click(_submit("Weiter"));
    testCase.endOfStep("insert contact data", 20);

    var $pdfFileLocation = testCase.getTestCaseFolderPath() + "\\" + $pdfFileName;
    env.logInfo($pdfFileLocation);
    _highlight(_link("Allgemeinen Geschäftsbedingungen"));
    _click(_link("Allgemeinen Geschäftsbedingungen"));
    _saveDownloadedAs($pdfFileLocation);
    env.type("w", Key.CTRL);
    _focus(_link("Allgemeinen Geschäftsbedingungen"));
    env.sleep(3);
    openPdfFile($pdfFileLocation);
    screen.waitForImage("agb_mnet.png", 10).highlight();
    env.type(Key.F4, Key.ALT);
    notClosed.pop();
    testCase.endOfStep("validate AGBs", 20);

    _highlight(_checkbox("SummaryForm_AGB"));
    _click(_checkbox("SummaryForm_AGB"));
    _highlight(_checkbox("SummaryForm_Bonitaet"));
    _click(_checkbox("SummaryForm_Bonitaet"));
    _highlight(_checkbox("SummaryForm_Widerruf"));
    _click(_checkbox("SummaryForm_Widerruf"));
    _highlight(_checkbox("SummaryForm_Bankeinzug"));
    _click(_checkbox("SummaryForm_Bankeinzug"));

    if (isTestEnvironment()) {
        _focus(_submit("Kostenpflichtig bestellen"));
        _highlight(_submit("Kostenpflichtig bestellen"));
        _click(_submit("Kostenpflichtig bestellen"));

        //validate the confirm text
        _assert(_isVisible(_heading1("Vielen Dank für Ihre Bestellung!")));
        _highlight(_heading1("Vielen Dank für Ihre Bestellung!"));

        var $conformFile = testCase.getTestCaseFolderPath() + '\\' + $orderConfFileName;
        _highlight(_link("Dokument downloaden"))
        _click(_link("Dokument downloaden"))
        _saveDownloadedAs($conformFile);
        env.type("w", Key.CTRL);
        openPdfFile($conformFile);
        screen.waitForImage("best_header", 10).highlight();
        screen.find("best_vorname").highlight();
        screen.find("best_nachname").highlight();
        screen.find("best_tel").highlight();
        screen.find("best_email").highlight();
        env.type(Key.F4, Key.ALT);
        notClosed.pop();
        env.sleep(1);

    } else {
        env.logInfo("Don't send the order, in case of productive system URL: " + testCase.getLastURL());
    }
    testCase.endOfStep("confirm and send the order", 30);

} catch (e) {
    testCase.handleException(e);
} finally {
    testCase.saveResult();
    closePdfReader();
    //env.sleep(999);
}


function isTestEnvironment() {
    var match = testCase.getLastURL().match(/.*\.intern\.m-net\.de.*/);
    env.logInfo("testEnvironment=" + match);
    return match;
}

/**
 * open the assigned file in the default PDF reader.
 *
 * @param $pdfFileLocation
 * @returns {Application}
 */
function openPdfFile($pdfFileLocation) {
    var appPdfReader = new Application('cmd.exe /C \"start ' + $pdfFileLocation + '"');
    appPdfReader.open();
    notClosed.push($pdfFileLocation);
    return appPdfReader;
}

/**
 * close the already opend PDF reader in var 'notClosed'
 */
function closePdfReader() {
    notClosed.forEach(function ($file) {
        if ($file != undefined) {
            //remove file path and ending
            new Application($file.replace(/.pdf/, '').replace(/.*\\/, ''), true).focus().closeApp();
        }
    });
}