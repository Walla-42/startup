## My Notes
### Table of Contents:
- [Introduction](#introduction)
- [Git](#git)
- [The Internet](#the-internet)
- [Amazon Web Services](#amazon-web-services)
- [Domain Names](#domain-names)


## Introduction
This document houses all of my notes taken during my participation in CS260: Web Programing and houses links to important documentation and resources which I used to create this project.

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

## Amazon Web Sercies

### Creating an AWS Server Instance
When creating an instance, be sure to select EC2 service then launch instance to open up a create instance window. 

> [!Note]  
> Use naming conventions like `[owner]-[purpose]-[version]` when naming your instance

Be sure to generate a secure shell key and store it in a safe place where you wont accidently commit it and wont share it with anyone else. 

When you have set up the server, you can view it by going to `http://[your-server-ip]`

### SSH into your server
When your server is setup you can ssh (Secure shell) into your server by doing the following:
```sh 
➜  ssh -i [key pair file] ubuntu@[ip address]
```

to limit permissions for your generated key file, do the following:
```sh
chmod 600 youkeypairfile.pem
```

**Notes about server content:** 
*Caddyfile* : This file contains the configuration for your web service gateway.  
*public_html* : is a directory that contains all of the static files that you are serving up directly through Caddy when using it as a web service.


### Establishing an Elastic IP Address
To ensure that your server IP address does not change, you can create an elastic IP address and associate it with your server instance. This will ensure that your server is always accessible at the same IP address. 

>[!Note]  
> Assigning an eleastic IP address will change the IP address for the server, but will not change again until it is released. If you terminate your server and make a new one, this address can be reused. That means if it is not being used and you do not release it, you will be charged for it. 


## Common Problems

| Symptom | Reason |
|---------|--------|
| You can SSH into the server, but you can't use HTTP | Check that your security group exposes SSH, HTTP, and HTTPS. |
| Using the browser to hit my server using my IP was working but now it doesn't | Check that your IP address hasn't changed. Perhaps due to assigning an elastic IP address or stopping your server. |
| My server doesn't come up in the browser | Check that you are not trying to use https before you configure Caddy to use https. |


## Domain Names

Domain names are strings of a certain format stored in the DNR (Domain Name Registry)

They are broken into a root domain and one or more subdomain prefixes. 
For example, in the domain name `www.example.com` the root domain is `example.com` and the subdomain prefix is `www`.

The root domain is represented by a secondary level domain and a top level domain (TLD). TLD are things like com, edu, gov or click. TLD's are controlled by ICANN, a govorning board of the internet.

![domain image](https://github.com/webprogramming260/.github/blob/main/profile/webServers/domainNames/domainNameParts.jpg?raw=true)

Root domains can have any number of subdomains with their own IP addresses. 

You can get info on the domain name from the DNR using the `whois` utility:
```sh
➜  whois byu.edu

Domain Name: BYU.EDU

Registrant:
	Brigham Young University
	3009 ITB
	2027 ITB
	Provo, UT 84602
	USA

Administrative Contact:
	Mark Longhurst
	Brigham Young University
	Office of Information Technology
	1208 ITB
	Provo, UT 84602
	USA
	+1.8014220488
	markl@byu.edu

Technical Contact:
	Brent Goodman
	Brigham Young University
	Office of Information Technology
	1203J ITB
	Provo, UT 84602
	USA
	+1.8014227782
	dnsmaster@byu.edu

Domain record activated:    19-Jan-1987
Domain record last updated: 11-Jul-2022
Domain expires:             31-Jul-2025
```

### DNS
DNS, or Domain Name Service is a server that associates IP addresses with a unique web address called a domain name. 

`A` name: aka address are straight mappings from a domain name IP address
`CNAME` or cannonical name: are record maps from one domain name to another domain name (alias)
> [!EXAMPLE]
>
> BYU.edu and BYU.com map to the same IP.

When you put a domain name into a browser, the broswer checks if the name already exists in the cache. If not, it contacts a DNS server and gets the IP. If the name is not in the DNS cache, then the DNS server will request it from the authoritative name server. If its not there, an unknown domain name error will be thrown. 

TTL (time to live): a setting that sets a time for which different caching layers must clear their cache. 


## Leasing a domain name

### Amazon Web Services - Route 53:
Route 53 on AWS handles everything DNS related including buying a domain name, hosting your domain on thier DNS servers, and creating DNS record. 

I leased the following domain that will renew yearly starting Sep 8 2025:
biomatchgames.click

### Manage DNS records
After you create a domain name, you must create a type A record to direct traffic to the correct IP using your established domain name. 

> [!NOTE]

> *SOA*: Start of Authority record provides contact information about the owner of the domain.

> *NS*: Name Server record provides the names of the servers that are hosting the DNS records for this domain.


