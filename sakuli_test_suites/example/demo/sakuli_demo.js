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
var appNotepad = new Application("gedit");

//vars consol.labs
var $cl_home = "http://labs.consol.de/lang/en";
var $cl_projekte = "Projects";
var $cl_c_mysql_h = "check_mysql_health";
var $cl_c_oracle_h = "check_oracle_health";


/******************************
 * Description of the test case
 ******************************/
try {
    /************************
     * Step for Notepad
     ***********************/
    appNotepad.open();
    env.type("Welcome to Sakuli!\n");
    env.type("I will help you to test your projects, like webapplications...\n");
    env.sleep(2);
    testCase.endOfStep("notepad", 20);

    /************************
     * Step for labs.consol
     ***********************/
    switchWindow();
    _navigateTo($cl_home);
    _highlight(_link($cl_projekte));
    _click(_link($cl_projekte));
    env.sleep(5);
    env.takeScreenshot("C:\\sakuli\\testscreenshot.png");
    _highlight(_link($cl_c_mysql_h));
    _click(_link($cl_c_mysql_h));
    _highlight(_link($cl_c_oracle_h));
    _click(_link($cl_c_oracle_h));
    _setValue(_textbox("s"), "nagios");
    _click(_link("Home[1]"));
    testCase.endOfStep("project", 20);


    /*****************
     * print test client
     *****************/
    backToNotepad();
    env.type("I can also test client applications, like gedit...\n");
    env.sleep(2);
    testCase.endOfStep("print_test_client", 10);


    /************************************************
     * Exception handling and shutdown of test case
     **********************************************/
} catch (e) {
    testCase.handleException(e);
} finally {
    try {
    //finally try to close the notepad
    appNotepad.closeApp();
    env.sleep(2);
    env.setSimilarity(0.9);
    //env.type(Key.TAB + Key.ENTER);
    //or
    var message = new Region("attention.png").find().grow(0,300);
    message.highlight().find("close_without_saving.png").click();

    //go to the desktop
    new Region().find("desktop.png").click();
    } catch (e) {
        testCase.handleException(e);
    }
    testCase.saveResult();
}

/********************
 * CUSTOM FUNCTIONS
 *******************/


/**********
 * TAB+ALT
 *********/
function switchWindow() {
    env.type(Key.TAB, Key.ALT);
}

/***************
 * Go back to notepad
 **************/
function backToNotepad() {
    switchWindow();
    env.type("Finish!\n\n");
}
