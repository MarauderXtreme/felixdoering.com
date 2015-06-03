---
layout: post
title:  "momendlos, bitte sofort"
date:   2015-06-03 17:00:00
categories: GitHub momendlos Desktop Wallpaper
---
Ein neues kleines Projekt bahnt sich den Weg in meinen Kopf: Es ist eine Kombination aus meinem Photoblog und Programmierung.

Ich habe die Idee, den Leuten, die gerne die Bilder von [momendlos](http://momendlos.de) sehen und auch haben möchten, diese ganz einfach als Hintergrundbild zur Verfügung zu stellen. Wenn zumindest der erste Teil ([momendlos_Desktop](http://felixdoering.com/projects/momendlos_Desktop.html)) fertig ist, dann ist es vorerst leider nur Mac Nutzern möglich, immer das aktuellste Photo von momendlos direkt als Hintergrundbild zu haben, oder eine Slideshow aller verfügbaren Bilder.

Ich habe mich auch schon hingesetzt und eine kleine API geschrieben. Je nach dem, welche Parameter im GET-Request mitgegeben werden, wird ein JSON-File mit entweder [allen](http://download.momendlos.de/getImage.php), [einem zufälligen](http://download.momendlos.de/getImage.php?method=random) oder [dem aktuellsten](http://download.momendlos.de/getImage.php?method=last) Photo und seinen Daten zurück gegeben.

Mein Wunsch ist es, ähnliche Software, sobald ich mit dieser hier fertig bin, auch für Windows und am liebsten auch für iOS und Android zu schreiben. Also alle nicht Mac Nutzer, die dies hier lesen: Vielleicht bekommt ihr auch bald eine Version für euch. Wer mir helfen möchte, zum Beispiel mit der Anwendung für Windows, der kann auch einfach eine Mail an [mich](mailto:mail@felixdoering.com) schreiben.
