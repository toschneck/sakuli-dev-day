@echo off
set PROJECT_FOLDER=C:\Project\sakuli-dev-day\mnet_sakuli_inst\sakuli
echo project-folder: %PROJECT_FOLDER%

set TEST_SUITE_FOLDER=%PROJECT_FOLDER%\..\sakuli_test_suites\portal-test-suite
echo suite-folder: %TEST_SUITE_FOLDER%

set INCLUDE_FOLDER=%PROJECT_FOLDER%\_include
set SAKULI_JARS=%PROJECT_FOLDER%\bin\lib\*
echo jar-file: %SAKULI_JARS%

echo start the java application
java -classpath %SAKULI_JARS%\..\sakuli.jar;%SAKULI_JARS% de.consol.sakuli.starter.SakuliStarter -run "%TEST_SUITE_FOLDER%" "%INCLUDE_FOLDER%"

exit
