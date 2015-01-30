Sakuli-Workshop am ConSol* DEV-day
==============

Der Fokus des Workshops wird darauf gelegt sein, welche Möglichkeiten es für den Einsatz von Sakuli aus DEV-Sicht gibt und in welche Richtung es in Zukunft gehen kann

Information findet ihr auf:
* [GitHub - Sakuli](https://github.com/ConSol/sakuli).
* [Sakuli - Einführungspresentation](https://rawgit.com/toschneck/presentation/sakuli-dev-day-presentation/index.html#/)


## API Link
Link zur Sakuli - [API - Dokumenation](https://github.com/ConSol/sakuli/blob/master/docs/sakuli-api.md)

## Was ist das Ziel?

* Es sollen erste Erfahrungen mit Sakuli gemacht werden, um die Einsatzmöglichkeiten abschätzen zu können und ein "Gefühl" für das was möglich ist zu bekommen.
* Grundsätzlich werden die Tests (derzeit) in JavaScript geschrieben (Java wäre auch möglich, ist allerdings noch nicht vollständig integriert).
* Getestet wird an einem CM6-Stage-System:
  * Testen von "normalen" HTML Funktionen, die sich über den HTML-DOM ansprechen lassen.
  * Testen von "Off-Browser-Inhalten", die über grafische Muster und Tastatur-Befehle angesprochen werden, z.B. Word-Dokument aus CM öffnen und Inhalt validieren.
* Erfahrungen mit dem Umgang des Sahi-Recorders sammeln, der es ermöglicht HTML-DOM basierte Tests aufzuzeichnen
* Detaillierter Blick auf die Einstellungsmöglichkeiten und den Aufbau von Sakuli-TestSuites
* Grundsätzliche Einsatzmöglichkeiten diskutieren (Einbindung in eine CI-Umgebung, Integration von Citrus-Funktionen, Weitere Einsatzmöglichkeiten bzw. was wäre aus DEV-Sicht noch wünschenswert) 

An sich ist es angedacht, dass wir den Workshop in lockerer Atmosphäre abhalten und jeder seine Vorstellung frei realisieren kann. Falls der ein oder andere bereits einen konkreten Anwendungsfall hat, können wir diesen auch gerne zusammen angehen 


## Vorbereitung

* Um keine unnötige Zeit mit der Installation usw. zu verbringen, werde ich euch am Mittwoch eine Virtual-Box-Appliance auf den internen FTP mit der folgenden Konfig zur Verfügung stellen:
  * Ubuntu 14.04 LTS
  * JDK 7, Maven, Git
  * IntelliJ Community-Edition
  * Sublime
  * Vorkonfiguriertes Sakuli-Projekt in USER_HOME
* Falls jemand als IDE oder Text-Editor andere Vorlieben hat, könnt ihr diese dann gerne auch selbst noch anpassen. Grundsätzlich werden die Tests in JavaScript erstellt, es kann aber auch sein, dass wir uns ein paar Sachen im Java ansehen werden.
* Ideal wäre auch noch ein GitHub-Account, dann können wir unsere Ergebnisse dort sammeln und allen als Hilfe zur Verfügung stellen.
