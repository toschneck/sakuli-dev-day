/*
 * Copyright (c) 2014 - M-net Telekommunikations GmbH
 * All rights reserved.
 * -------------------------------------------------------
 * File created: 08.10.2014
 */
package de.mnet.hurrican;

import de.consol.sakuli.datamodel.TestSuite;
import de.consol.sakuli.exceptions.SakuliExceptionHandler;
import de.consol.sakuli.javaDSL.AbstractSakuliTest;
import de.consol.sakuli.starter.SakuliStarter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.CollectionUtils;
import org.testng.annotations.Test;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

/**
 * @author Tobias Schneck
 */

@Test(groups = AbstractSakuliTest.SAKULI_TEST)
public class OnlineShopTest {

    private static final Logger logger = LoggerFactory.getLogger(OnlineShopTest.class);

    @Test
    public void testPortal() throws Throwable {

        Path testsuite = Paths.get("mnet_sakuli_inst/sakuli_test_suites/mnet_online_shop");
        String includeFolder = "mnet_sakuli_inst/sakuli/_include";

        final TestSuite result = SakuliStarter.runTestSuite(testsuite.toString(), includeFolder);
        List<Throwable> exceptions = SakuliExceptionHandler.getAllExceptions(result);
        if (!CollectionUtils.isEmpty(exceptions)) {
            for (Throwable e : exceptions) {
                logger.error("Sakuli-Exception:", e);
            }
            //return the first
            throw exceptions.iterator().next();
        }
    }
}
