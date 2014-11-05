/*
 * Copyright (c) 2014 - M-net Telekommunikations GmbH
 * All rights reserved.
 * -------------------------------------------------------
 * File created: 07.10.2014
 */
package de.consol.sakuli.actions;

import de.consol.sakuli.exceptions.SakuliExceptionHandler;
import de.consol.sakuli.javaDSL.AbstractSakuliTest;
import de.consol.sakuli.javaDSL.TestCaseInitParameter;
import de.consol.sakuli.javaDSL.actions.Application;
import de.consol.sakuli.loader.BeanLoader;
import org.sikuli.script.Key;
import org.slf4j.LoggerFactory;
import org.testng.annotations.Test;

import java.awt.event.KeyEvent;
import java.io.File;
import java.util.HashMap;
import java.util.Map;

/**
 * @author Tobias Schneck
 */
@Test(groups = AbstractSakuliTest.SAKULI_TEST)
public class KeyEventTest extends AbstractSakuliTest {

    @Override
    protected TestCaseInitParameter getTestCaseInitParameter() throws Throwable {
        return new TestCaseInitParameter("Key-Event-Test", "keyevent")
                .withWarningTime(200)
                .withCriticalTime(250);
    }

    @Override
    protected String getTestSuiteFolder() {
        return getTestSuiteRootFolder() + File.separator + "sakuli-test-suite";
    }

    @Override
    protected String getIncludeFolder() {
        return "_include";
    }

    @Test
    public void typeAllChars() throws Throwable {
        try {
            BeanLoader.loadBaseActionLoader().getActionProperties().setTypeDelay(0.002);
            de.consol.sakuli.actions.screenbased.Region editor = new Application("notepad.exe").open().getRegion();

            String sep = "\n--------------------\n";

            if (true) {
                editor.paste(sep);
                for (int i = 0; i < 10; i++) {
                    editor.type(String.valueOf(i), Key.SHIFT);
                }
                editor.paste(sep);
            }

            if (false) {
                String specialChAll = "!\"§$%&/()=?\\`´-_.:;|<>@^°";
                String specialChWorks = "!\"$%&/()=?\\-_.:;|<>@^";
                editor.paste(sep).paste(specialChWorks);
                editor.type(sep).type(specialChWorks);
            }

            if (false) {
                for (Map.Entry<Character, String> entry : getSikuliXKeys().entrySet()) {
                    try {
                        editor.type("\n" + entry.getValue() + ":");
                        editor.getActionRegion().type(entry.getKey().toString());
                    } catch (Throwable e) {
                        editor.type("EX " + e.getMessage());
                        LoggerFactory.getLogger(this.getClass()).error("KEY-Event-Error " + entry.getValue(), e);
                    }
                }
            }

            if (false) {
                for (Map.Entry<Integer, String> entry : getAllKeyEnvets().entrySet()) {
                    try {
                        editor.type("\n" + entry.getValue() + ":");
                        editor.getActionRegion().keyDown(entry.getKey());
                        editor.getActionRegion().keyUp(entry.getKey());
                    } catch (Exception e) {
                        editor.type("EX " + e.getMessage());
                        LoggerFactory.getLogger(this.getClass()).error("KEY-Event-Error " + entry.getValue(), e);
                    }
                }
            }
        } catch (Throwable e) {
            SakuliExceptionHandler exceptionHandler = BeanLoader.loadBaseActionLoader().getExceptionHandler();
            exceptionHandler.handleException(e);
            throw e;
        }
    }

    private Map<Character, String> getSikuliXKeys() {
        Map<Character, String> result = new HashMap<>();
        result.put(Key.C_ESC, "Key.C_ESC");
        result.put(Key.C_UP, "Key.C_UP");
        result.put(Key.C_RIGHT, "Key.C_RIGHT");
        result.put(Key.C_DOWN, "Key.C_DOWN");
        result.put(Key.C_LEFT, "Key.C_LEFT");
        result.put(Key.C_PAGE_UP, "Key.C_PAGE_UP");
        result.put(Key.C_PAGE_DOWN, "Key.C_PAGE_DOWN");
        result.put(Key.C_DELETE, "Key.C_DELETE");
        result.put(Key.C_END, "Key.C_END");
        result.put(Key.C_HOME, "Key.C_HOME");

        result.put(Key.C_INSERT, "Key.C_INSERT");

        result.put(Key.C_F1, "Key.C_F1");

        result.put(Key.C_F2, "Key.C_F2");

        result.put(Key.C_F3, "Key.C_F3");

        result.put(Key.C_F4, "Key.C_F4");

        result.put(Key.C_F5, "Key.C_F5");

        result.put(Key.C_F6, "Key.C_F6");

        result.put(Key.C_F7, "Key.C_F7");

        result.put(Key.C_F8, "Key.C_F8");

        result.put(Key.C_F9, "Key.C_F9");

        result.put(Key.C_F10, "Key.C_F10");

        result.put(Key.C_F11, "Key.C_F11");

        result.put(Key.C_F12, "Key.C_F12");

        result.put(Key.C_F13, "Key.C_F13");

        result.put(Key.C_F14, "Key.C_F14");

        result.put(Key.C_F15, "Key.C_F15");

        result.put(Key.C_SHIFT, "Key.C_SHIFT");

        result.put(Key.C_CTRL, "Key.C_CTRL");

        result.put(Key.C_ALT, "Key.C_ALT");

        result.put(Key.C_ALTGR, "Key.C_ALTGR");

        result.put(Key.C_META, "Key.C_META");

        result.put(Key.C_CMD, "Key.C_CMD");

//        result.put(Key.C_WIN, "Key.C_WIN");

        result.put(Key.C_PRINTSCREEN, "Key.C_PRINTSCREEN");

        result.put(Key.C_SCROLL_LOCK, "Key.C_SCROLL_LOCK");

        result.put(Key.C_PAUSE, "Key.C_PAUSE");

        result.put(Key.C_CAPS_LOCK, "Key.C_CAPS_LOCK");

        result.put(Key.C_NUM0, "Key.C_NUM0");

        result.put(Key.C_NUM1, "Key.C_NUM1");

        result.put(Key.C_NUM2, "Key.C_NUM2");

        result.put(Key.C_NUM3, "Key.C_NUM3");

        result.put(Key.C_NUM4, "Key.C_NUM4");

        result.put(Key.C_NUM5, "Key.C_NUM5");

        result.put(Key.C_NUM6, "Key.C_NUM6");

        result.put(Key.C_NUM7, "Key.C_NUM7");

        result.put(Key.C_NUM8, "Key.C_NUM8");

        result.put(Key.C_NUM9, "Key.C_NUM9");

        result.put(Key.C_SEPARATOR, "Key.C_SEPARATOR");

        result.put(Key.C_NUM_LOCK, "Key.C_NUM_LOCK");

        result.put(Key.C_ADD, "Key.C_ADD");

        result.put(Key.C_MINUS, "Key.C_MINUS");

        result.put(Key.C_MULTIPLY, "Key.C_MULTIPLY");

        result.put(Key.C_DIVIDE, "Key.C_DIVIDE");

        result.put(Key.C_DECIMAL, "Key.C_DECIMAL");

        result.put(Key.C_CONTEXT, "Key.C_CONTEXT");

        result.put(Key.C_NEXT, "Key.C_NEXT");

//        result.put(Key.cMax, "Key.cMax");
//        result.put(Key.cMin, "Key.cMin");

        return result;
    }

    private Map<Integer, String> getAllKeyEnvets() {
        Map<Integer, String> result = new HashMap<>();
        result.put(KeyEvent.VK_ENTER, "KeyEvent.VK_ENTER");
        result.put(KeyEvent.VK_BACK_SPACE, "KeyEvent.VK_BACK_SPACE");
        result.put(KeyEvent.VK_TAB, "KeyEvent.VK_TAB");
        result.put(KeyEvent.VK_CANCEL, "KeyEvent.VK_CANCEL");
        result.put(KeyEvent.VK_CLEAR, "KeyEvent.VK_CLEAR");
        result.put(KeyEvent.VK_SHIFT, "KeyEvent.VK_SHIFT");
        result.put(KeyEvent.VK_CONTROL, "KeyEvent.VK_CONTROL");
        result.put(KeyEvent.VK_ALT, "KeyEvent.VK_ALT");
        result.put(KeyEvent.VK_PAUSE, "KeyEvent.VK_PAUSE");
        result.put(KeyEvent.VK_CAPS_LOCK, "KeyEvent.VK_CAPS_LOCK");
        result.put(KeyEvent.VK_ESCAPE, "KeyEvent.VK_ESCAPE");
        result.put(KeyEvent.VK_SPACE, "KeyEvent.VK_SPACE");
        result.put(KeyEvent.VK_PAGE_UP, "KeyEvent.VK_PAGE_UP");
        result.put(KeyEvent.VK_PAGE_DOWN, "KeyEvent.VK_PAGE_DOWN");
        result.put(KeyEvent.VK_END, "KeyEvent.VK_END");
        result.put(KeyEvent.VK_HOME, "KeyEvent.VK_HOME");
        result.put(KeyEvent.VK_LEFT, "KeyEvent.VK_LEFT");
        result.put(KeyEvent.VK_UP, "KeyEvent.VK_UP");
        result.put(KeyEvent.VK_RIGHT, "KeyEvent.VK_RIGHT");
        result.put(KeyEvent.VK_DOWN, "KeyEvent.VK_DOWN");
        result.put(KeyEvent.VK_COMMA, "KeyEvent.VK_COMMA");
        result.put(KeyEvent.VK_MINUS, "KeyEvent.VK_MINUS");
        result.put(KeyEvent.VK_PERIOD, "KeyEvent.VK_PERIOD");
        result.put(KeyEvent.VK_SLASH, "KeyEvent.VK_SLASH");
        result.put(KeyEvent.VK_0, "KeyEvent.VK_0");
        result.put(KeyEvent.VK_1, "KeyEvent.VK_1");
        result.put(KeyEvent.VK_2, "KeyEvent.VK_2");
        result.put(KeyEvent.VK_3, "KeyEvent.VK_3");
        result.put(KeyEvent.VK_4, "KeyEvent.VK_4");
        result.put(KeyEvent.VK_5, "KeyEvent.VK_5");
        result.put(KeyEvent.VK_6, "KeyEvent.VK_6");
        result.put(KeyEvent.VK_7, "KeyEvent.VK_7");
        result.put(KeyEvent.VK_8, "KeyEvent.VK_8");
        result.put(KeyEvent.VK_9, "KeyEvent.VK_9");
        result.put(KeyEvent.VK_SEMICOLON, "KeyEvent.VK_SEMICOLON");
        result.put(KeyEvent.VK_EQUALS, "KeyEvent.VK_EQUALS");
        result.put(KeyEvent.VK_A, "KeyEvent.VK_A");
        result.put(KeyEvent.VK_B, "KeyEvent.VK_B");
        result.put(KeyEvent.VK_C, "KeyEvent.VK_C");
        result.put(KeyEvent.VK_D, "KeyEvent.VK_D");
        result.put(KeyEvent.VK_E, "KeyEvent.VK_E");
        result.put(KeyEvent.VK_F, "KeyEvent.VK_F");
        result.put(KeyEvent.VK_G, "KeyEvent.VK_G");
        result.put(KeyEvent.VK_H, "KeyEvent.VK_H");
        result.put(KeyEvent.VK_I, "KeyEvent.VK_I");
        result.put(KeyEvent.VK_J, "KeyEvent.VK_J");
        result.put(KeyEvent.VK_K, "KeyEvent.VK_K");
        result.put(KeyEvent.VK_L, "KeyEvent.VK_L");
        result.put(KeyEvent.VK_M, "KeyEvent.VK_M");
        result.put(KeyEvent.VK_N, "KeyEvent.VK_N");
        result.put(KeyEvent.VK_O, "KeyEvent.VK_O");
        result.put(KeyEvent.VK_P, "KeyEvent.VK_P");
        result.put(KeyEvent.VK_Q, "KeyEvent.VK_Q");
        result.put(KeyEvent.VK_R, "KeyEvent.VK_R");
        result.put(KeyEvent.VK_S, "KeyEvent.VK_S");
        result.put(KeyEvent.VK_T, "KeyEvent.VK_T");
        result.put(KeyEvent.VK_U, "KeyEvent.VK_U");
        result.put(KeyEvent.VK_V, "KeyEvent.VK_V");
        result.put(KeyEvent.VK_W, "KeyEvent.VK_W");
        result.put(KeyEvent.VK_X, "KeyEvent.VK_X");
        result.put(KeyEvent.VK_Y, "KeyEvent.VK_Y");
        result.put(KeyEvent.VK_Z, "KeyEvent.VK_Z");
        result.put(KeyEvent.VK_OPEN_BRACKET, "KeyEvent.VK_OPEN_BRACKET");
        result.put(KeyEvent.VK_BACK_SLASH, "KeyEvent.VK_BACK_SLASH");
        result.put(KeyEvent.VK_CLOSE_BRACKET, "KeyEvent.VK_CLOSE_BRACKET");
        result.put(KeyEvent.VK_NUMPAD0, "KeyEvent.VK_NUMPAD0");
        result.put(KeyEvent.VK_NUMPAD1, "KeyEvent.VK_NUMPAD1");
        result.put(KeyEvent.VK_NUMPAD2, "KeyEvent.VK_NUMPAD2");
        result.put(KeyEvent.VK_NUMPAD3, "KeyEvent.VK_NUMPAD3");
        result.put(KeyEvent.VK_NUMPAD4, "KeyEvent.VK_NUMPAD4");
        result.put(KeyEvent.VK_NUMPAD5, "KeyEvent.VK_NUMPAD5");
        result.put(KeyEvent.VK_NUMPAD6, "KeyEvent.VK_NUMPAD6");
        result.put(KeyEvent.VK_NUMPAD7, "KeyEvent.VK_NUMPAD7");
        result.put(KeyEvent.VK_NUMPAD8, "KeyEvent.VK_NUMPAD8");
        result.put(KeyEvent.VK_NUMPAD9, "KeyEvent.VK_NUMPAD9");
        result.put(KeyEvent.VK_MULTIPLY, "KeyEvent.VK_MULTIPLY");
        result.put(KeyEvent.VK_ADD, "KeyEvent.VK_ADD");
        result.put(KeyEvent.VK_SEPARATER, "KeyEvent.VK_SEPARATER");
        result.put(KeyEvent.VK_SEPARATOR, "KeyEvent.VK_SEPARATOR");
        result.put(KeyEvent.VK_SUBTRACT, "KeyEvent.VK_SUBTRACT");
        result.put(KeyEvent.VK_DECIMAL, "KeyEvent.VK_DECIMAL");
        result.put(KeyEvent.VK_DIVIDE, "KeyEvent.VK_DIVIDE");
        result.put(KeyEvent.VK_DELETE, "KeyEvent.VK_DELETE");
        result.put(KeyEvent.VK_NUM_LOCK, "KeyEvent.VK_NUM_LOCK");
        result.put(KeyEvent.VK_SCROLL_LOCK, "KeyEvent.VK_SCROLL_LOCK");
        result.put(KeyEvent.VK_F1, "KeyEvent.VK_F1");
        result.put(KeyEvent.VK_F2, "KeyEvent.VK_F2");
        result.put(KeyEvent.VK_F3, "KeyEvent.VK_F3");
        result.put(KeyEvent.VK_F4, "KeyEvent.VK_F4");
        result.put(KeyEvent.VK_F5, "KeyEvent.VK_F5");
        result.put(KeyEvent.VK_F6, "KeyEvent.VK_F6");
        result.put(KeyEvent.VK_F7, "KeyEvent.VK_F7");
        result.put(KeyEvent.VK_F8, "KeyEvent.VK_F8");
        result.put(KeyEvent.VK_F9, "KeyEvent.VK_F9");
        result.put(KeyEvent.VK_F10, "KeyEvent.VK_F10");
        result.put(KeyEvent.VK_F11, "KeyEvent.VK_F11");
        result.put(KeyEvent.VK_F12, "KeyEvent.VK_F12");
        result.put(KeyEvent.VK_F13, "KeyEvent.VK_F13");
        result.put(KeyEvent.VK_F14, "KeyEvent.VK_F14");
        result.put(KeyEvent.VK_F15, "KeyEvent.VK_F15");
        result.put(KeyEvent.VK_F16, "KeyEvent.VK_F16");
        result.put(KeyEvent.VK_F17, "KeyEvent.VK_F17");
        result.put(KeyEvent.VK_F18, "KeyEvent.VK_F18");
        result.put(KeyEvent.VK_F19, "KeyEvent.VK_F19");
        result.put(KeyEvent.VK_F20, "KeyEvent.VK_F20");
        result.put(KeyEvent.VK_F21, "KeyEvent.VK_F21");
        result.put(KeyEvent.VK_F22, "KeyEvent.VK_F22");
        result.put(KeyEvent.VK_F23, "KeyEvent.VK_F23");
        result.put(KeyEvent.VK_F24, "KeyEvent.VK_F24");
        result.put(KeyEvent.VK_PRINTSCREEN, "KeyEvent.VK_PRINTSCREEN");
        result.put(KeyEvent.VK_INSERT, "KeyEvent.VK_INSERT");
        result.put(KeyEvent.VK_HELP, "KeyEvent.VK_HELP");
        result.put(KeyEvent.VK_META, "KeyEvent.VK_META");
        result.put(KeyEvent.VK_BACK_QUOTE, "KeyEvent.VK_BACK_QUOTE");
        result.put(KeyEvent.VK_QUOTE, "KeyEvent.VK_QUOTE");
        result.put(KeyEvent.VK_KP_UP, "KeyEvent.VK_KP_UP");
        result.put(KeyEvent.VK_KP_DOWN, "KeyEvent.VK_KP_DOWN");
        result.put(KeyEvent.VK_KP_LEFT, "KeyEvent.VK_KP_LEFT");
        result.put(KeyEvent.VK_KP_RIGHT, "KeyEvent.VK_KP_RIGHT");
        result.put(KeyEvent.VK_DEAD_GRAVE, "KeyEvent.VK_DEAD_GRAVE");
        result.put(KeyEvent.VK_DEAD_ACUTE, "KeyEvent.VK_DEAD_ACUTE");
        result.put(KeyEvent.VK_DEAD_CIRCUMFLEX, "KeyEvent.VK_DEAD_CIRCUMFLEX");
        result.put(KeyEvent.VK_DEAD_TILDE, "KeyEvent.VK_DEAD_TILDE");
        result.put(KeyEvent.VK_DEAD_MACRON, "KeyEvent.VK_DEAD_MACRON");
        result.put(KeyEvent.VK_DEAD_BREVE, "KeyEvent.VK_DEAD_BREVE");
        result.put(KeyEvent.VK_DEAD_ABOVEDOT, "KeyEvent.VK_DEAD_ABOVEDOT");
        result.put(KeyEvent.VK_DEAD_DIAERESIS, "KeyEvent.VK_DEAD_DIAERESIS");
        result.put(KeyEvent.VK_DEAD_ABOVERING, "KeyEvent.VK_DEAD_ABOVERING");
        result.put(KeyEvent.VK_DEAD_DOUBLEACUTE, "KeyEvent.VK_DEAD_DOUBLEACUTE");
        result.put(KeyEvent.VK_DEAD_CARON, "KeyEvent.VK_DEAD_CARON");
        result.put(KeyEvent.VK_DEAD_CEDILLA, "KeyEvent.VK_DEAD_CEDILLA");
        result.put(KeyEvent.VK_DEAD_OGONEK, "KeyEvent.VK_DEAD_OGONEK");
        result.put(KeyEvent.VK_DEAD_IOTA, "KeyEvent.VK_DEAD_IOTA");
        result.put(KeyEvent.VK_DEAD_VOICED_SOUND, "KeyEvent.VK_DEAD_VOICED_SOUND");
        result.put(KeyEvent.VK_DEAD_SEMIVOICED_SOUND, "KeyEvent.VK_DEAD_SEMIVOICED_SOUND");
        result.put(KeyEvent.VK_AMPERSAND, "KeyEvent.VK_AMPERSAND");
        result.put(KeyEvent.VK_ASTERISK, "KeyEvent.VK_ASTERISK");
        result.put(KeyEvent.VK_QUOTEDBL, "KeyEvent.VK_QUOTEDBL");
        result.put(KeyEvent.VK_LESS, "KeyEvent.VK_LESS");
        result.put(KeyEvent.VK_GREATER, "KeyEvent.VK_GREATER");
        result.put(KeyEvent.VK_BRACELEFT, "KeyEvent.VK_BRACELEFT");
        result.put(KeyEvent.VK_BRACERIGHT, "KeyEvent.VK_BRACERIGHT");
        result.put(KeyEvent.VK_AT, "KeyEvent.VK_AT");
        result.put(KeyEvent.VK_COLON, "KeyEvent.VK_COLON");
        result.put(KeyEvent.VK_CIRCUMFLEX, "KeyEvent.VK_CIRCUMFLEX");
        result.put(KeyEvent.VK_DOLLAR, "KeyEvent.VK_DOLLAR");
        result.put(KeyEvent.VK_EURO_SIGN, "KeyEvent.VK_EURO_SIGN");
        result.put(KeyEvent.VK_EXCLAMATION_MARK, "KeyEvent.VK_EXCLAMATION_MARK");
        result.put(KeyEvent.VK_INVERTED_EXCLAMATION_MARK, "KeyEvent.VK_INVERTED_EXCLAMATION_MARK");
        result.put(KeyEvent.VK_LEFT_PARENTHESIS, "KeyEvent.VK_LEFT_PARENTHESIS");
        result.put(KeyEvent.VK_NUMBER_SIGN, "KeyEvent.VK_NUMBER_SIGN");
        result.put(KeyEvent.VK_PLUS, "KeyEvent.VK_PLUS");
        result.put(KeyEvent.VK_RIGHT_PARENTHESIS, "KeyEvent.VK_RIGHT_PARENTHESIS");
        result.put(KeyEvent.VK_UNDERSCORE, "KeyEvent.VK_UNDERSCORE");
        result.put(KeyEvent.VK_WINDOWS, "KeyEvent.VK_WINDOWS");
        result.put(KeyEvent.VK_CONTEXT_MENU, "KeyEvent.VK_CONTEXT_MENU");
        result.put(KeyEvent.VK_FINAL, "KeyEvent.VK_FINAL");
        result.put(KeyEvent.VK_CONVERT, "KeyEvent.VK_CONVERT");
        result.put(KeyEvent.VK_NONCONVERT, "KeyEvent.VK_NONCONVERT");
        result.put(KeyEvent.VK_ACCEPT, "KeyEvent.VK_ACCEPT");
        result.put(KeyEvent.VK_MODECHANGE, "KeyEvent.VK_MODECHANGE");
        result.put(KeyEvent.VK_KANA, "KeyEvent.VK_KANA");
        result.put(KeyEvent.VK_KANJI, "KeyEvent.VK_KANJI");
        result.put(KeyEvent.VK_ALPHANUMERIC, "KeyEvent.VK_ALPHANUMERIC");
        result.put(KeyEvent.VK_KATAKANA, "KeyEvent.VK_KATAKANA");
        result.put(KeyEvent.VK_HIRAGANA, "KeyEvent.VK_HIRAGANA");
        result.put(KeyEvent.VK_FULL_WIDTH, "KeyEvent.VK_FULL_WIDTH");
        result.put(KeyEvent.VK_HALF_WIDTH, "KeyEvent.VK_HALF_WIDTH");
        result.put(KeyEvent.VK_ROMAN_CHARACTERS, "KeyEvent.VK_ROMAN_CHARACTERS");
        result.put(KeyEvent.VK_ALL_CANDIDATES, "KeyEvent.VK_ALL_CANDIDATES");
        result.put(KeyEvent.VK_PREVIOUS_CANDIDATE, "KeyEvent.VK_PREVIOUS_CANDIDATE");
        result.put(KeyEvent.VK_CODE_INPUT, "KeyEvent.VK_CODE_INPUT");
        result.put(KeyEvent.VK_JAPANESE_KATAKANA, "KeyEvent.VK_JAPANESE_KATAKANA");
        result.put(KeyEvent.VK_JAPANESE_HIRAGANA, "KeyEvent.VK_JAPANESE_HIRAGANA");
        result.put(KeyEvent.VK_JAPANESE_ROMAN, "KeyEvent.VK_JAPANESE_ROMAN");
        result.put(KeyEvent.VK_KANA_LOCK, "KeyEvent.VK_KANA_LOCK");
        result.put(KeyEvent.VK_INPUT_METHOD_ON_OFF, "KeyEvent.VK_INPUT_METHOD_ON_OFF");
        result.put(KeyEvent.VK_CUT, "KeyEvent.VK_CUT");
        result.put(KeyEvent.VK_COPY, "KeyEvent.VK_COPY");
        result.put(KeyEvent.VK_PASTE, "KeyEvent.VK_PASTE");
        result.put(KeyEvent.VK_UNDO, "KeyEvent.VK_UNDO");
        result.put(KeyEvent.VK_AGAIN, "KeyEvent.VK_AGAIN");
        result.put(KeyEvent.VK_FIND, "KeyEvent.VK_FIND");
        result.put(KeyEvent.VK_PROPS, "KeyEvent.VK_PROPS");
        result.put(KeyEvent.VK_STOP, "KeyEvent.VK_STOP");
        result.put(KeyEvent.VK_COMPOSE, "KeyEvent.VK_COMPOSE");
        result.put(KeyEvent.VK_ALT_GRAPH, "KeyEvent.VK_ALT_GRAPH");
        result.put(KeyEvent.VK_BEGIN, "KeyEvent.VK_BEGIN");
        result.put(KeyEvent.VK_UNDEFINED, "KeyEvent.VK_UNDEFINED");
        result.put(KeyEvent.KEY_LOCATION_UNKNOWN, "KeyEvent.KEY_LOCATION_UNKNOWN");
        result.put(KeyEvent.KEY_LOCATION_STANDARD, "KeyEvent.KEY_LOCATION_STANDARD");
        result.put(KeyEvent.KEY_LOCATION_LEFT, "KeyEvent.KEY_LOCATION_LEFT");
        result.put(KeyEvent.KEY_LOCATION_RIGHT, "KeyEvent.KEY_LOCATION_RIGHT");
        result.put(KeyEvent.KEY_LOCATION_NUMPAD, "KeyEvent.KEY_LOCATION_NUMPAD");
        return result;
    }
}
