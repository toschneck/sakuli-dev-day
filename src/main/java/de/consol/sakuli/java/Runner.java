/**
 * @author tschneck
 */
package de.consol.sakuli.java;

import de.consol.sakuli.datamodel.TestSuite;
import de.consol.sakuli.starter.SakuliStarter;

import java.io.FileNotFoundException;

public class Runner {

    public static void main(java.lang.String[] args) {
        int exitState = -1;
        try {


            String testSuiteExample = "sakuli_test_suites/example";
            String testSuiteCM = "sakuli_test_suites/tschneck";
            String includeFolder = "_include";

            final TestSuite result = SakuliStarter.runTestSuite(testSuiteCM, includeFolder);

            exitState = result.getState().getErrorCode();

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } finally {
            System.exit(exitState);
        }
    }
}
