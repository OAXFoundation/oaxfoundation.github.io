---
layout: post
author: OAX Foundation
image: /img/blog-images/oax_ama-no2.jpeg
---
## OAX Dev AMA #2 — Project Discussion “Roadmap and Development”

![]({{ site.baseurl }}/img/blog-images/oax_ama-no2.jpeg)

**Lio Lunesu, Technology Advisory**

**Tamas Herman, Core Developer**

**David Leung, Core Developer**

**Mathis Antony, Core Developer** 

**Kirsten Ambrens Barnes, Project Management** 

**Moderator: Kelvin Wong, Head of Marketing & Communications**

OAX Foundation would like to thank everyone who joined our AMA on Thursday, July 5. Over the one-hour session our team answered questions on related to different aspects of our projects, from transaction speed to the SPRITES technology to security to wallets and PoC certificates.

Participants who’ve submitted the google form for our token award program will be notified by email shortly.

Here is the transcript of the Q&A.

###### Q: I would like to ask if you guys are aware of the community dynamics that has developed under the OAX project? the commitment and pleasure we see on this community reminds me about a social experiment. This community is growing and developing naturally, what is rare these days…I’m not a tech guy, but from what i’ve seen this spirit has been transfered to the OAX platform dynamics… what do you think about this?

**Kirsten:** Our community is very important to OAX and we appreciate support and engagement over the coming months as we prepare our platform for market.

**Lio:** I can only comment on the development of the platform: we’ve chosen to be very open with all development efforts since the start. Our Gitlab repo is open too, and our POC doesn’t use any backend!

###### Q: Will OAX platform only work with erc20 tokens?

**Kirsten:** At this stage we are only compatible with ERC20.

###### Q: Is it a near or distant future in which you’ll be able to incorporate coins with own blockchain? this would be a huge revolution (the present platform is already a revolution, but this would be explosive) these last few days the ethereum network has been clogged and gas fees are high… is there a countermeasure within OAX to prevent these situations?

**Lio:** We know. That’s why we talk about this issue in the white paper. Going forward we are focusing on implementing the Sprites state channels so we are no longer limited by the Ethereum tx speed/fees.

###### Q: Will you do global marketing? including translations of the main documents in several key languages? (and the website)

**Kelvin:** We will definitely consider doing more languages going forward when the needs arises (e.g. our whitepaper was done in five different languages) In the meantime, if you have any specific request, please get in touch with our community managers and they’ll do their best to help.

###### Q: Why you want to build a DEX? DEX seems difficult to trade?

**Kirsten:** Both the traditional centralised exchange and existing decentralised exchange models have inherent weaknesses limiting their potential to service the rapidly developing digital asset market. These weaknesses are also a hindrance to widespread acceptance of tokens as an asset class. The OAX platform addresses these shortcomings whilst combining the best elements of both trading systems.

We launched our prototype on 22 June and you are welcome to test trading on it. Please visit [https://dex.demo.oax.org/](https://dex.demo.oax.org/)

###### Q: I use binance since long time. i m new with oax. how is your platform different?

**Kirsten:** The OAX project creates a new decentralised platform combining the best aspects of traditional centralised and existing decentralised exchanges. OAX is using a distributed order book so that each order you see is received directly from the source and cannot be spoofed.

In addition to current on-chain technologies like 0x, OAX is adopting Sprites Payment Channels to deliver high-volume low-latency low-fee off-chain settlements.

As such, we’re creating the decentralised ecosystem of the future.

**Lio:** When you trade on binance you have to trust that they don’t get hacked! While you’re trading, they get control of your tokens.

###### Q: Oax will have own blockchain soon?

**David:** No. One of the core objectives of the OAX project is to solve the liquidity problem of decentralized exchanges. Having a separate blockchain does not contribute to that goal.

###### Q: when will next token sale happen? I am waiting.

**Kirsten:** As stated in our announcement this week, at the moment we have sufficient resources in place to fund our development, hence we are not planning any token sale this year. We will update the community on our airdrop plan soon and also on our plans next year.

###### Q: In my country China, Oax community not active. Why you don’t do more promotion in China?

**Kirsten:** We appreciate the continuous support from the Chinese Community. We will consider holding events to communicate the progress of our project in China whenever is appropriate and as permitted by regulations. Please keep following our social media channels and subscribing to our newsletter for the latest updates.

###### Q: Hello Kelvin, have OAX platform any security solution for hacking? This is a common problem for crypto community.

**Lio:** We plan to have NO backend that can be hacked! You will trade directly from your wallet to the counterpart’s wallet.

###### Q: Will be OAX listing on new exchanges and how can I use OAX coins in the future (in Binance we can use his coins for voting)?

**Kirsten:** OAX tokens can currently be traded with any ERC20 token.

###### Q: What are the transaction fees?

**Mathis:** For the current prototype the transaction fees are ethereum network transaction fees. We will announce our plans for future transaction fees soon.

###### Q: Does OAX support Fiat to crypto trades too ?

**Kirsten:** Establishing fiat gateways remains a key part of the OAX ecosystem. We are progressing well on multiple options and will make an important announcement very soon. Please keep following our news.

###### Q: Veronica: I heard that decentralized network cannot be hacked. Is that true?

**Lio:** It’s true that there’s no centralized exchange that can be hacked, since we don’t plan to have a backend. But when trading with people you don’t know there’s many ways they can be tricked. You might think you’re using the OAX platform, but instead are using malicious fork on a different URL. Users have to always double check HTTPS/Wallet/destination/.. before transferring tokens.

###### Q: Want to ask why deploying the prototype with 0x but not Sprites?

**Lio:** 0x is one of the most popular solutions for atomic swap on Ethereum, making it the ideal technology to test the prototype. However, Sprites will allow us to achieve a decentralised solution which has speed, volume and cost benefits that exceed even centralized exchange models.

It will be fully implemented in 2019 — but as an exciting new technology being developed by Enuma, OAX technology partner, which recently received two grants from the Ethereum Foundation, it forms a key part of the next stage of our project.

###### Q: Sprites will provide the fastest speed???

**Mathis:** For state channels the speed depends on how fast the clients involved in a settlement can communicate. It should be possible to perform a trade within a second.

###### Q: Is your founding father ANX bank committed to use the OAX platform in the future?

**Kirsten:** We are in advanced negotiation with a number of industry partners and can announce the outcomes of these at a future date.

###### Q: Two questions to OAX team about prototype:
###### 1) Will prototype work only with metamask wallet? Will it be possible to work on plaform using private key from myetherwallet?
###### 2) Design of prototype — will it be only black theme, like it is in demo?

**Tamas:** 2) The source code is open, anyone can modify the color theme for themselves.

**Lio:** 1) Apart from Metamask, we are working on supporting Trezor and Ledger

2) The plan of the POC was to test out the distributed order book architecture. The UI was kept to the bare minimum for this POC. We have only now started the planning process for the next phase.

###### Q: So far we have a working prototype demo. Will there be a mobile app in future? (if yes, it will definitely supports iOS and Android, or just one?)

**Kirsten:** It is in consideration as part of our roadmap. Our main focus now is on building our OAX DEX Platform, by combining improved technological developments (eg. Sprites) with a strong governance framework (for example, including dispute resolution and KYC).

###### Q: Why the project decided to make Airdrop? In my experiance, projects do Airdrops before ICO, in order to get more people and interest involved. Right now already a lot of people are familiar with OAX. What does OAX wants to achieve with that airdrop? Get more users involved in prototype test?

**Kirsten:** The aim of the airdrop is to reward our current token holders and it reflects our appreciation of the ongoing support and commitment from the community.

###### Q: If the team is focused on working on prototype and exchange, when will the project update its homepage? Redesign wanter

**Kirsten:** Totally agree, we are working with our website team on this.

###### Q: Will it be possible in future to import my MEW account instead of using MetaMask? as for example it organized forkdelta. Many of my friends do not use MetaMask as they were attacked by hackers.

**Kirsten:** We use metamask only for our POC, but our final product will definately offer other options for connecting your account.

###### Q: Why the certificate is expired? and why SHA-1 was used in it?

**David:** If you are referring to the PoC certificate, it is not expired! You can check for the security of our PoC certificate with [https://www.ssllabs.com/ssltest/analyze.html?d=dex.demo.oax.org&hideResults=on](https://www.ssllabs.com/ssltest/analyze.html?d=dex.demo.oax.org&hideResults=on).

###### Q: Also, how many transactions per second can OAX handle? Currently the POC is limited by the Ethereum blockchain tx limit.

**Mathis:** For our next milestone we will be using state channels to do off chain settlements. Since these settlements can done between peers without blockchain transactions the number of transactions the DEX can perform per second will increase with the number of clients.

###### Q: Also, what will assist OAX deal with transactions and solution to when ETH network occupancy?

**Tamas:** The Sprite payment channel will help with that, so you only have to talk to the chain when there is a dispute.

**Lio:** Also when opening/closing the channel. But a single sprites state channel will allow unlimited number of trades

###### Q: Also the airdrop open dates between this month and January next year? This is very longest airdrop date range ever hahha? Will you narrow it down or do it in stages?

**Tamas:** Still better than not giving any range

**Kirsten:** I have no further details on the Air Drop. We need to wait for the formal communication of the airdrop conditions, coming shortly.

###### Q: How to swap OAX coins to other ERC coins?

**Kirsten:** OAX tokens can be traded via any exchange which hosts OAX tokens.

###### Q: Since the start of the OAX project in 2017, a lot of happened in the crypto-currency world (new laws, new exchanges, etc.). Do you think that the ideas laid in the OAX DEX platform are still actual?

**Tamas:** A lot of things happened indeed, but the fundamental issues of blockchain scaling hasn’t been solved yet. We have seen some DEXs popping up, but they are not open source. There are small, independent fiat-crypto gateways and there are big centralized exchanges offering fiat-crypto conversion. They are still disconnected liquidity pools though…

###### Q: What’s the interest like from Europe in this project? Have you many supporters based there, I’m in Ireland, will there be more promotion work done in the future?

**OAX:** Yes, there are a lot of real OAX supporters all over the world, and of course, in Europe too. People like the idea of the decentralized ecosystem, its future features and openness of the project. Yes, definitely. The OAX marketing team is working on this and this kind of activity will grow with the time. If you have any ideas regarding this matter let’s talk in PM.

Thanks Everyone.
