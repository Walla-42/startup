## My Notes
### Table of Contents:
- [Introduction](#introduction)
- [Git](#git)
- [The Internet](#the-internet)

## Introduction
This document houses all of my notes taken during my participation in CS260: Web Programing and houses linkes to important documentation and resources which I used to create this project.

## Git
Instruction 1 talked about how to use Github. I already use github frequently and have no additional notes to put here for this section. I did learn that you can add a [!Note] in a markdown file, which is useful for keeping my documentation clean for the user. 

## The Internet
The internet is what connects independent networks and computing devices together. 

Every device has its own IP address which can be masked by a Domain. This domain can be used to look up the IP and vice versa using the DNS (Domain Name Server). You can view the IP address of a domain using the dig utility. 
```sh
# Example:
dig byu.edu

# Output:
byu.edu.		5755	IN	A	128.187.16.184
```

When you have a connection you can request a connection route to the device. 

To see the connection route you can use Traceroute.
```sh
➜  traceroute byu.edu

traceroute to byu.edu (128.187.16.184), 64 hops max, 52 byte packets
 1  192.168.1.1 (192.168.1.1)  10.942 ms  4.055 ms  4.694 ms
 2  * * *
 3  * * *
 4  192-119-18-212.mci.googlefiber.net (192.119.18.212)  5.369 ms  5.576 ms  6.456 ms
 5  216.21.171.197 (216.21.171.197)  6.283 ms  6.767 ms  5.532 ms
 6  * * *
 7  * * *
 8  * * *
 9  byu.com (128.187.16.184)  7.544 ms !X *  40.231 ms !X
```

The internet is made up of many layers that all work together to process and send data to and from devices. 

### [TCP/IP](https://en.wikipedia.org/wiki/Internet_protocol_suite) layers

| Layer       | Example         | Purpose                               |
| ----------- | --------------- | ------------------------------------- |
| Application | HTTPS           | Functionality like web browsing       |
| Transport   | TCP             | Moving connection information packets |
| Internet    | IP              | Establishing connections              |
| Link        | Fiber, hardware | Physical connections                  |

