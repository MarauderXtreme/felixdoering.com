---
layout: post
title:  "Wenn man alle Probleme so einfach lösen könnte"
date:   2015-05-11 11:00:00
categories: GitHub release sparkle issue AGDSN traffic
---
Vor etwa zwei Tagen kam Justus auf die Idee, dass es bei meinem Traffic-Plugin doch eine gute Idee wäre, wenn es anzeigen würde, dass man gar keinen Traffic mehr hat, wenn dieser überschritten ist.

Leider ist das ganze hier im Wohnheim bei der AG DSN nicht ganz so einfach, da bei Überschreitung des Traffics die komplette Verbindung gekappt wird, sprich auch die zum Abfragen des Traffics. Ich habe ihm gesagt, er soll auf Github einen Issue aufmachen, damit ich nicht vergesse, mich darum zu kümmern.
Nun hat er auch gleich noch einen Vorschlag mit dazu geliefert, den ich ziemlich gut nutzen konnte. Ich setze einfach, wenn der Traffic nach einem refresh fast aufgebraucht ist, ein Flag. Dieses ist so lange auf True, bis wieder mehr Traffic zur Verfügung steht. Falls mit gesetztem Flag dann keine Rückmeldung vom Server kommt, wird dies jetzt "Traffic überschritten" gewertet. Auch hier wird dann bei gesetztem Häkchen noch mal eine Benachrichtigung an den Benutzer gesendet und in der Statusleiste statt "No Connection" "No Traffic Left" angezeigt.

Ich freue mich immer, wenn ich einen Issue schließen kann und ich dachte, dass die neue Funktion eine Erwähnung wert sei.
