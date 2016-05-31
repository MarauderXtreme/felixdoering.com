---
layout: project
title: pi_lcd
github_link: h4llow3En/pi_lcd
status: "development"
languages: [Rust]
---
pi_lcd is a Rust Crate to connect a HD44780 LCD to your Raspberry Pi.  
[![Build Status](https://travis-ci.org/h4llow3En/pi_lcd.svg?branch=master)](https://travis-ci.org/h4llow3En/pi_lcd)


## Pinout

#### Raspberry Pi with 26 Pins (A, B)
![pin26](/images/pin26.png)

#### Raspberry Pi with 26 Pins (A+, B+, Pi2 B)
![pin26](/images/pin40.png)

## Example

```rust
use pi_lcd::*;

// create a new lcd
let lcd = HD44780::new(11,10,[6,5,4,1],20,4);

// send a String to the lcd at row 0
lcd.send_string("Hello World".to_string(),0);
```


## Usage & Documentation

An online version of the documentation can be found [here](http://h4llow3en.github.io/pi_lcd/pi_lcd/)
