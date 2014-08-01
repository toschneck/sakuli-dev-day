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
_include("login.js");
var testCase = new TestCase(60, 70);
var env = new Environment();


/******************************
 * Description of the test case
 ******************************/
try {

    login();  //included over the "login.js" file
    testCase.endOfStep("login", 2);

    /**
     * Open the ticket over my tickets
     */
    var $ownTicketsIdentifier = /Own tickets.*/;     //<= Regex literal in JS, here for the link 'Own tickets(1)'
    var $ticketName = "SakuliTest1";   //must match 1:1
    _click(_heading1($ownTicketsIdentifier));
    _highlight(_link($ticketName, _near(_heading1($ownTicketsIdentifier))));
    _click(_link($ticketName, _near(_heading1($ownTicketsIdentifier))));
    testCase.endOfStep("open cm ticket", 4);

//    _click(_link("SakuliTest1"));
//    _click(_div("Detail", _in(_div("edit_ticket_acims"))));


    /**
     *  Open the attached word document
     */
    var $detailButtonIdentifier = /DETAIL.*/;    //regex for detail button class
    var $historyFrameIdentifier = /edit_ticket_acims section.*/; //regex for history frame class
    _assertExists($detailButtonIdentifier);
    _assertExists($historyFrameIdentifier);
    _highlight(_div($detailButtonIdentifier, _in(_div($historyFrameIdentifier))));
    _click(_div($detailButtonIdentifier, _in(_div($historyFrameIdentifier))));


    //it is also possible to address the type of the identifier (here className) directly
    _click(_div({className: $detailButtonIdentifier}, _in(_div({className: $historyFrameIdentifier}))));

    var $wordDocumentIdentifier = "ZettlProjektantrag (ZettlProjektantrag.docx)";
    _assertExists($wordDocumentIdentifier);
    _highlight(_link($wordDocumentIdentifier));
    _click(_link($wordDocumentIdentifier));
    testCase.endOfStep("open history and word document", 8);

    //wait for the "download - save or open" dialog and click "ok"
    new Region().waitForImage("antrag_doc", 8)
        .grow(600, 600)
        .find("ok")
        .click();
    new Region().waitForImage("pdf", 8) //wait 8 seconds for the pdf logo and clicks it
        .click();
    new Region().waitForImage("pdf_save_dialog", 5) //wait 5 seconds for the "where to save" dialog
    ;
    testCase.endOfStep("open pdf dialog", 15);

    //copy the FileName to the clipboard and validate it
    env.type("c", Key.CTRL);  //use the second paramter as modifier, to hold the CTRL key
    var $pdfFileName = env.getClipboard();

    env.type("c", Key.ALT) //close the pdf dialog
        .type("q", Key.CTRL); // close the word app
    env.sleep(1);

    //remove the counter number and assert the name
    $pdfFileName = $pdfFileName.substring(0, $pdfFileName.lastIndexOf("-"));
    if ($pdfFileName != "ZettlProjektantrag") {
        throw "PDF filename '" + $pdfFileName + "' is not valid!";   //throw a custom exception
    }
    testCase.endOfStep("validate the pdf", 2);

} catch (e) {
    testCase.handleException(e);
} finally {
    testCase.saveResult();
}
