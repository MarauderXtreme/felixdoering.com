---
layout: project
title: Thermometer
github_link: h4llow3En/Thermometer
status: "development"
date: 22.06.2014
languages: [Python]
---

Für dieses Projekt wird ein Adafruit DHT22, ein Raspberry Pi und ein HD44780 LCD-Display (20x4 Zeichen) benötingt. Auf dem Display werden dann Zeit, Temperatur und Luftfeuchtigkeit angezeit.


Benötigte Sachen
-----------
* Raspberry Pi Model B
* Adafruit DHT22
* HD44780 4x20 LCD-Display
* Python 2.7 auf dem Raspberry Pi

RPi un das Display
---------------

Auf dem Raspberry Pi werden folgende Pins verwendet:

![piPin](/images/piPin.png)


| Pin| Usage                 | Pin| Usage |
| -- | --------------------- | -- | ----- |
|  1 | Power DHT22 und LED + | 16 | DATA6 |
|  2 | Power HD44780         | 18 | DATA5 |
|  6 | Common Ground (GND)   | 22 | DATA4 |
|  7 | Daten vom DHT22       | 24 | E     |
| 12 | DATA7                 | 26 | RS    |


Es wird empfohlen zuerst ein Breadboard zu nutzen.

Das HD44780:

![hd44780Pin](/images/hd44780Pin.png)

Die Pins müssen, wie in der Grafik gezeigtm angeschlossen werden. Es kann ein zusätzlicher 10k Widerstand bei 'Contrast' verwendet werden. Auch LED + kann an den 5V Pin angeschlossen werden, jedoch war das bei mir zu hell, also habe ich es an die 3,3V angeschlossen.

DHT22
---------------
Dieser Abschnitt gilt fü Adafruit DHT22, welche keinen vorinstallierten Widerstand haben. Ansonsten muss er einfach nur angeschlossen werden (Pin3 ist in diesem Fall dann GND):

![DHT22](/images/dht22.png)

Der DHT22 hat vier Pins.

| Pin DHT22 | Description |
| --------- | ----------- |
| 1         | 3.3 Volt    |
| 2         | Data        |
| 3         | not needed  |
| 4         | GND         |


Es muss ein zusätzlicher 10k Widerstand von der Positiven Ladung zum Kabel des 'Data' Pins gelötet (oder auf dem Breadboard gesteckt) werden.



Features
--------

* Automatisches setup (wenn nötig)
* Sammelt Sensordaten
* Zeigt Daten auf dem Display an (Zeit, Temperatur, Luftfeuchtigkeit)
* Weiterverwendbare Klasse für das Display
