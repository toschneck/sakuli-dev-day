/*
 * Copyright (c) 2014 - M-net Telekommunikations GmbH
 * All rights reserved.
 * -------------------------------------------------------
 * File created: 07.10.2014
 */
package de.mnet.hurrican;

import de.consol.sakuli.javaDSL.AbstractSakuliTest;
import de.consol.sakuli.javaDSL.TestCaseInitParameter;
import de.consol.sakuli.javaDSL.actions.Application;
import de.consol.sakuli.javaDSL.actions.Environment;
import de.consol.sakuli.javaDSL.actions.Region;
import org.sikuli.script.Key;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import java.io.File;

/**
 * @author Tobias Schneck
 */
public class HurricanGuiTest extends AbstractSakuliTest {
    private Application testling;
    private Environment env;

    @Override
    protected TestCaseInitParameter getTestCaseInitParameter() throws Throwable {
        return new TestCaseInitParameter("Hurrican-GUI-1", "hurrican1")
                .withWarningTime(200)
                .withCriticalTime(250);
    }

    @Override
    protected String getTestSuiteFolder() {
        return getTestSuiteRootFolder() + File.separator + "mnet-test-suite";
    }

    @Override
    protected String getIncludeFolder() {
        return "_include";
    }

    @BeforeClass
    @Override
    public void initTC() throws Throwable {
        super.initTC();
        env = new Environment();
    }

    @Test
    public void hurrican1() throws Exception {
        testling = startHurricanGUI();
        testling.getRegion().highlight();
        env.sleep(100);

    }

    @AfterClass
    @Override
    public void stopTC() throws Throwable {
        try {
            closeHurricanGUI();
        } catch (Exception e) {
            logger.error("can't finally close HURRICAN", e);
        }
        super.stopTC();
    }

    /**
     * Initialize and starts the Hurrican GUI
     *
     * @return a {@link Application} object of the GUI
     */
    private Application startHurricanGUI() {
        new Application("hurrican_gui\\ak-hurrican-gui.bat").open();

        new Region().exists("login-logo", 20)
                .type("mnet2014!").type(Key.ENTER);

        new Region().exists("menu", 60);
        return new Application("M-net HURRICAN");
    }

    /**
     * Close the Hurrican GUI
     */
    private void closeHurricanGUI() {
        new Application("M-net HURRICAN").focus().closeApp();
    }
}
