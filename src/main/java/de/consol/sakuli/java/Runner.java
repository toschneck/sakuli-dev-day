/**
 * Created by tschneck on 18.07.14.
 */
package de.consol.sakuli.java;

import de.consol.sakuli.datamodel.state.TestSuiteState;
import de.consol.sakuli.starter.SakuliStarter;

import java.io.FileNotFoundException;

public class Runner {

    public static void main(java.lang.String[] args) {
        int exitState = -1;
        try {


            String testSuiteFolder = "sakuli_test_suites/example";
            String includeFolder = "_include";
            String sahiInstallationPath = "sahi";

            final TestSuiteState resultState = SakuliStarter.runTestSuite(testSuiteFolder, includeFolder, sahiInstallationPath);

            exitState = resultState.getErrorCode();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } finally {
            System.exit(exitState);
        }
    }
}
