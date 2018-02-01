---
layout: post
title:  "Bring me a time machine"
date:   2018-01-22 17:45:00+02:00
related:
---

I really like the idea of Apples TimeMachine Backups. Plug in an external storage or even use some of your internal storage.  
The more convenient way is to create backups with a TimeCapsule or a TimeMachine network volume. If you are connected to your WiFi every hour a new backup is made.

What if you a) already have a good router and b) you have a local server and want to perform backups on this one?

The solution is to configure your server and macOS, in my example an Ubuntu 17.04.

The communication runs via Netatalk. Unfortunately, the version provided by the latest version of Debian or Ubuntu is not compatible anymore so you have to build it from source.

#### Preparing the build
First you have to install some build dependencies:
```bash
sudo apt install build-essential devscripts debhelper      \
                 cdbs autotools-dev dh-buildinfo libdb-dev \
                 libwrap0-dev libpam0g-dev libcups2-dev    \
                 libkrb5-dev libltdl3-dev libgcrypt11-dev  \
                 libcrack2-dev libavahi-client-dev         \
                 libldap2-dev libacl1-dev libevent-dev     \
                 d-shlibs dh-systemd
```

#### Build from source
Clone the Repository of the updates Netatalk version
```bash
git clone https://github.com/adiknoth/netatalk-debian
```

Change into the source directory and build it with
 ```bash
 debuild -b -uc -us
 ```

#### Install Netatalk and Avahi Daemon
The `debuild` command builds the packages and places them one directory above.
Two of the three packages are needed. Install them with
```bash
sudo dpkg -i libatalk18-dev_3.1.10-1_amd64.deb
sudo dpkg -i netatalk_3.1.10-1_amd64.deb
```

To be able to comunicate with TimeMachine the Avahi Daemon is needed.

```bash
sudo apt install avahi-daemon libc6-dev libnss-mdns
```

#### Configure everything
Prepare a place where the backups are saved, e.g. `/Backup/TimeMachine` and chown it recursivly to the user who is used for those Backups.

Now there have to be made some changes at `/etc/netatalk/afp.conf`.

First of all to mimic a TimeCapsule add to the [GLOBAL] Section at the top
```bash
mimicmodel = TimeCapsule6,106
```

And at the bottom of the file the configuration itself:
```bash
[TimeCapsule]
; should it be used as a time machine?
time machine = yes
; path to the backup folder
path = /Backup/TimeMachine
; Size in Megabyte
vol size limit = 1000000
; which users are allowed to access
; use the user who ownes the directory
valid users = timemachine
```

#### Start the services and tell macOS to look for it
The last thing we have to configure on the server is to start the services by default
```bash
sudo systemctl enable netatalk.service
sudo systemctl start netatalk.service
sudo systemctl enable avahi-daemon.service
sudo systemctl start avahi-daemon.service
```

The fake TimeCapsule is now up and running! Lets move on to the configuration of macOS.
There is on thing we have to enable via the commandline
```bash
defaults write com.apple.systempreferences TMShowUnsupportedNetworkVolumes 1
```
This allows not official Apple devices to get discovered as TimeMachine network volumes.

Your Server should be shown now in TimeMachine preferences.

This tutorial is mostly for myself in case I have to use it again but the last post was nearly one and a half years ago. This is the reason I decided to publish this as well.
