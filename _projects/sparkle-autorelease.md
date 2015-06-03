---
layout: project
title: Sparkle-Autorelease
github_link: h4llow3En/sparkle-autorelease
status: "development"
date: 03.05.2015
languages: [Python]
---
Ihr schreibt Anwendungen für OS X und verwendet das [Sparkle-Framework](http://sparkle-project.org) um bei den Nutzern die Anwendungen zu updaten?
Wenn man keine Developer-ID für Mac hat, kann das schon ziemlich umständlich sein, vorallem, wenn man gleichzeitig auch den Release auf Github veröffentlichen möchte.

Sparkle-Autorelease übernimmt das zumindest Teilweise. Alle wichtigen Informationen sind in einer .json-Datei gespeichert und das Script macht dann folgendes:
1. Die neue .zip signieren
2. Auf Github einen neuen Release erstellen und die zip uploaden
3. In den gh-pages-Branch wechseln und die appcast.xml updaten
4. Das ganze pushen und wieder in den master Branch wechseln

__Hinweis:__ Das Script funtioniert __*nur*__, wenn die appcast.xml im selben Repository wie die App nur um gh-pages Branch gehostet ist.
