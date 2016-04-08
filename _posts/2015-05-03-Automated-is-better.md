---
layout: post
title:  "Automatisch ist immer besser!"
date:   2015-05-03 20:03:00
related: AGDSN_traffic_Mac
---
Gestern Abend habe ich in meinem Traffic-Plugin für das Wohnheiminternet einen Bug in der Anzeige des noch verfügbaren Traffics gefunden. Also habe ich mich an die Arbeit gemacht, den auch so schnell wie möglich zu beheben, damit man es wieder zuverlässig nutzen kann.

Ich kenne bis jetzt, abgesehen von mir, nur zwei Leute, die dieses Tool nutzen, [Justus](https://github.com/JustusAdam "Justus Adam auf Github") und [Kilian](https://github.com/kiliankoe "Kilian Költzsch auf Github"). Also habe ich auch beide kontaktiert, dass ich eine neue Version released habe.
Aus Spaß brachte Justus die Idee an, dass in der nächsten Version dann ruhig ein Autoupdater mit drinne sein könnte. Ich muss zugeben, dass auch ich bereits davor schon mit dem Gedanken gespielt habe, weil das so ziemlich die einzige Möglichkeit ist Updates einer vielleicht später auch mal breiteren Masse auszuteilen.

Meine erste Idee war, dass ich ähnlich wie das abrufen des Traffics jede Minute eine Anfrage bei der GitHub-API mache, was der aktuellste Release ist. Das wäre allerdings ein ganz schönes gefrickel geworden. Dank Kilian habe ich dann ein schönes Framework gefunden, [Sparkle](http://sparkle-project.org), welches es relativ einfach ermöglicht, Updates zu verteilen.

Wie eigentlich immer, wenn man nicht weiß wovon geredet wird, war es auch bei dieser Anleitung ziemlich kompliziert, sich dort einzulesen, besonders wenn man wie ich vorher noch nie wirklich mit Frameworks in XCode gearbeitet hat. Letzendlich habe ich es nun doch auf die Reihe bekommen.

Für alle, die dieses Framework auch nutzen wollen hier noch ein kleiner Tipp:
Standartmäßig überprüft Sparke immer __CFBundleVersion__ als Versionsnummer, was in XCode allerdings der __Build__ und *nicht* die Version ist.
