# Install log for sakuli on ubuntu 14 for dev day

* Download and unzip the current Sakuli version from [http://labs.consol.de/sakuli/install/](http://labs.consol.de/sakuli/install/)
* Download and install the Sahi client in the unzip folder [http://labs.consol.de/sakuli/install/3rd-party/install_sahi_v44_20130429.jar](http://labs.consol.de/sakuli/install/3rd-party/install_sahi_v44_20130429.jar) 
* Clone the dev day git repository and configure it for java start and start over `scripts/starter/START_testsuite1.sh`
  * `git clone https://github.com/toschneck/sakuli-dev-day.git`
  * move the alle files from the already unzipped folder to `sakuli-dev-day/binary`
  * delete `sakuli-dev-day/binary/_include` and `sakuli-dev-day/binary/sakuli_test_suites` folder, because these are now dublicated
  * Adjust the script starter file `binary/scripts/starter/START_testsuite1.sh` like follow:
    ```
    PROJECT_FOLDER=/home/sakuli/sakuli-workshop/sakuli-dev-day/binary
	
  	TEST_SUITE_FOLDER=$PROJECT_FOLDER/../sakuli_test_suites/example
	
    INCLUDE_FOLDER=$PROJECT_FOLDER/../_include
    ```
* Install missing `wmctrl` over `sudo apt-get install wmctrl`

* Config proxy for sahi controller under `sahi/userdata/config/userdata.properties`
