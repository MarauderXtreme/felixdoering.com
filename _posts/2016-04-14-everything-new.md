---
layout: post
title:  "Everything new"
date:   2016-04-14 10:54:40+02:00
related: IAmTalkingToYouBot
---
**Everything is new.**
Well, at least almost. I am still the same, but my Page got a new design and I decided to make my posts in English.  

Why?  
There are a some reasons, first of all I wanted to have a more serious design the old one was just the standard Jekyll Theme with some minor changes.
It just was unready. The colors didn't match and all in all there was no personal style at all.  
And why in English?  
I write my programs (almost) in English and I think it is a much cleaner look if I just do everything in the same language. Maybe I will translate my old posts, but I am not sure jet. I started and tried to translate the first ones, but then I thought it might be not a problem to see the beginnings of my blog (well, the second attempt).

That is everything to this new page. I will continue to enhance it piece by piece. For example the ‘About’ page is empty yet. This has to be changed soon.

But I want to write a bit about my recent projects, too, not just the redesign of felixdoering.com:

If you know the messenger Telegram you probably know that you can use bots as well. [Felix](https://dummyco.de) and I have written the IAmTalkingToYou bot. But what does it do? If anyone mentions a person the bot will recognize this an send a mention to this person as well.  
A new, yesterday implemented feature is if you write ’+1’ the bot will reply to this as well with ’\<username from sender\> gefällt das.’ or in case of ’-1’ ’\<username from sender\> gefällt das nicht.’ Yes this bot replies in German but hopefully sometime we will offer an English version as well.  
While testing the new feature Felix has written a ‘+2’.  
Why not let people like this just more than one? I updated the feature an from now on you can write ‘+\<x\>’ and you will get ‘\<username from sender\> gefällt das \<x\>-fach.’ replied.

There is another, much bigger project, Felix and I worked on. It is called ‘tdo’. Felix wanted a simple tool for the command line to manage TODO’s and we started coding. At this point we have many features implemented an published a release on [pypi](https://pypi.python.org/pypi/tdo). It was even finished. Yes, it **was**… ;-)

While working as a tutor on my university I showed this tool to one of my co-tutors and he asked if he will get a notification if a TODO is open for a long time. This gave Felix and me the idea to make it even better. Because of this we made plans for a new project: _tdo-server_

When it is finished, this should be an online version of the command line tool with syncing features. But it is in really early dev and we haven’t completely decided if we really want to use Python as our language of choice or if we try some new e.g. rust.
