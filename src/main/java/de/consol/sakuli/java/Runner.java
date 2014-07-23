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


            String testSuiteFolder = "sakuli_test_suites/example";
            String includeFolder = "_include";

            final TestSuite result = SakuliStarter.runTestSuite(testSuiteFolder, includeFolder);

            exitState = result.getState().getErrorCode();

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } finally {
            System.exit(exitState);
        }
    }
}
