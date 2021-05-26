---
layout: post
author: OAX Foundation
---

#OAX Development Prototype FAQ

OAX would like to thank everyone for taking the time to test the prototype and give feedback. These will be important in helping us improve during the development of our platform. Here are some common questions we have identified. 

And don’t forget our feedback and bug bounty campaign! You can find the form [here](https://docs.google.com/forms/d/e/1FAIpQLSfoWIWjY8ELpM_0vbX6fJUDhwg6-JzlKIYzoLnUfBNP8AznYA/viewform?usp=send_form).

<b> Q: Is there plan to make a mobile version? </b>

A: It is being considered as part of our roadmap. Our main focus now is on building our OAX DEX Platform, by combining improved technological developments (eg. Sprites) with a strong governance framework (for example, including dispute resolution and KYC).

<b> Q: Will the login to the exchange be possible only through Metamask? </b>

A: Apart from Metamask, we are working on supporting Trezor and Ledger. We use Metamask only for our POC, but our final product will definitely offer other options for connecting your account.

<b> Q: OAX establishes connection with the exchange with the help of the signatures SHA-1 but similar exchange uses Sha384 in the chain. What’s the difference? </b>

A: We support a suite of ciphers to communicate between the exchange demo and the end user. SHA-1 is one of the ciphers we support, mainly for compatibility reason, which is fine for a demo. You can verify the quality of the security certificate together with the suite of ciphers used [here](https://www.ssllabs.com/ssltest/analyze.html?d=dex.demo.oax.org&hideResults=on&latest). The servers serving the demo will use a stronger cipher if the user’s browser supports that. Users are always encouraged to upgrade to the latest version of their browser and to ensure their browser supports stronger ciphers.

<b> Q: Will there be a possibility to choose different colour themes? </b>

A: The source code is open, anyone can modify the colour theme for themselves.

<b> Q: Due to the tokenization of the fiat, exchanges will become more competitive. Will OAX adopt a fiat deposit and withdrawal system? </b>

A: Establishing fiat gateways remains a key part of the OAX ecosystem. We are progressing well on multiple options and will make an important announcement very soon. Please keep following our news.

<b> Q: When the ETH network occupancy happens, what will help OAX deal with transactions and solution?</b>

A: The Sprite payment channel will help with that, so you only have to talk to the chain when there is a dispute. Also when opening/closing the channel, a single sprites state channel will allow unlimited number of trades.

<b> Q: Which kind of latest technology will OAX adopt?</b>

A: OAX is using Sprites and 0x. Sprites enables on-chain scaling up the Ethereum blockchain to accommodate increasing user demands to an unlimited amount. For state channels, the speed depends on how fast the clients involved in a settlement can communicate. It should be possible to perform a trade within a second.

<b> Q: How many transactions per second can OAX handle? Currently the POC is limited by the Ethereum blockchain tx limit. </b>

A: For our next milestone we will be using state channels to do off chain settlements. Since these settlements can be done between peers without blockchain transactions the number of transactions the DEX can perform per second will increase with the number of clients.
