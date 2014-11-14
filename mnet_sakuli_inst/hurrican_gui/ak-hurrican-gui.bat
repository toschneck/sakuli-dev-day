@echo off
SETLOCAL
rem #######################################################
rem
rem Start-Skript fuer die Hurrican-GUI
rem
rem Ueber den Parameter %1 kann definiert werden, ob die
rem Applikation im Produktiv- oder Debug-Modus gestartet
rem werden soll.
rem Moegliche Werte:
rem    d - debug
rem    alles andere wird als javaw-Modus erkannt
rem
rem #######################################################
title=Hurrican II

set HUR_JAVA="C:\Program Files\Java\jdk1.7.0_21\bin"

set ROOT=C:\Project\sakuli-dev-day\mnet_sakuli_inst\hurrican_gui
set CLASSPATH=%ROOT%\hurrican-gui.jar;%ROOT%\config


@echo.
@echo *****************************
@echo **
@echo ** Hurrican wird gestartet...
@echo **
@echo *****************************

rem starte hurrican-gui im javaw-Modus
%HUR_JAVA%\javaw -cp %CLASSPATH% -Xms64m -Xmx512m -XX:MaxPermSize=128m -Duse.config=user.schneckto -Dapplication.modus=devel_schneckto -Djava.library.path=./3rdparty -Djava.security.policy=config/ak.java.policy de.augustakom.hurrican.gui.system.HurricanStart

@echo.
@echo *****************************
@echo **
@echo ** Hurrican wird beendet...
@echo **
@echo *****************************
