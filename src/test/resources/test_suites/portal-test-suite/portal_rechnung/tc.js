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

/* global _include,_alert, _navigateTo,_isFF,_isChrome, backEndInit, getFilePathOfTestcase, sakuliInit, writeTC2DB, _wait, navigate */


/*************************************
 * Initialization of the JAVA backend
 * and set warning and critical time
 *************************************/
_dynamicInclude($includeFolder);
var testCase = new TestCase(60, 70);
var env = new Environment();

/******************************
 * Description of the test case
 ******************************/
try {

    _navigateTo("https://kundenportal-dev.mnet-online.de");
    if (!_condition(_exists(_textbox("username")))) {
        _click(_link("Administrator"));
    }
    if (_condition(_exists(_textbox("username")))) {
        _highlight(_textbox("username"));
        _setValue(_textbox("username"), "schneckto");
        _highlight(_password("password"));
        var $pw = env.decryptSecret("2UZCRTLCHlARtmlAFhXHrA==");
        _setValue(_password("password"), $pw);
        _click(_div("Anmelden"));
    }
    testCase.endOfStep("login kundenportal", 10);

    env.sleep(2);
    _highlight(_link("Administrator"));
    _click(_link("Administrator"));
    _highlight(_textbox("request"), "bebitalia");
    _setValue(_textbox("request"), "bebitalia");
    env.sleep(1);
    _highlight(_submit("Los!"));
    _click(_submit("Los!"));

    env.sleep(3);
    _assertExists(_tableHeader("boe002.003.C"));
    _highlight(_tableHeader("boe002.003.C"));

    _highlight(_link("Hauptmenü"));
    _click(_link("Hauptmenü"));
    testCase.endOfStep("createUser 'bebitalia'", 15);

    env.sleep(3);
    _highlight(_link("Rechnung Online"));
    _click(_link("Rechnung Online"));
    _highlight(_heading2("Debitorennummer m000037146"));
    env.sleep(1);
    _highlight(_imageSubmitButton("rechnung_anzeigen.gif", _under(_heading2("Debitorennummer m000001351"))));
    env.sleep(1);
    _click(_imageSubmitButton("rechnung_anzeigen.gif", _under(_heading2("Debitorennummer m000001351"))));
    testCase.endOfStep("open Rechnung July", 10);

    _highlight(_image("Download", _near(_cell("Jul"))));
    env.sleep(1);
    _click(_image("Download", _near(_cell("Jul"))));
    var $curPath = _resolvePath();
    var $filename = $curPath + "invoice.pdf";
    env.logInfo("filename for pdf => " + $filename);
    _assertNotNull(_lastDownloadedFileName());
    _saveDownloadedAs($filename);
    testCase.endOfStep("validate download", 5);

    _click(_link("Logout"));

} catch (e) {
    testCase.handleException(e);
} finally {
    testCase.saveResult();
}
