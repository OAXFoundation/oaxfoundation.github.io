---
layout: post
author: Lio Lunesu, Cerulean Hu, Tamas and Liam Bussell
---
![]({{ site.baseurl }}/img/blog-images/code_dev_overview_no1.png)

In the past few months, the OAX Devteam has been slowly and steadily pushing out new code updates on our repositories over at Gitlab.

[https://github.com/openanx/OpenANXToken](https://github.com/openanx/OpenANXToken)

[https://gitlab.com/oax](https://gitlab.com/oax)

We have now officially moved over to Gitlab for the codebase, the reason for the move was due to the name change (openANX to OAX) as we could not secure OAX at Github as it was in use. Check out the [activity](https://gitlab.com/groups/oax/-/activity) over here.

![]({{ site.baseurl }}/img/blog-images/code_dev_overview_no1-1.png)

_The Code Monkeys have been busy_

![]({{ site.baseurl }}/img/blog-images/code_dev_overview_no1-2.png)

_very busy_

![]({{ site.baseurl }}/img/blog-images/code_dev_overview_no1-3.png)

_very very busy_

![]({{ site.baseurl }}/img/blog-images/code_dev_overview_no1-4.png)

_WOW!_

In addition, for small, discrete pieces of work, it may be posted under [Enumatech](https://github.com/enumatech) (Enuma Technologies — our technology provider). Enuma Technologies has a significant codebase and not all pieces relate to OAX, but it may be of interest to some of our backers, so I have provided the link here.

First, let’s go back to the White Paper

_“Key to this concept is the deployment of a new decentralized exchange platform that allows transparency for end users, holds collateral for participating gateways and provides a predetermined channel for dispute resolution.”_

At the very heart of the OAX Project is the idea of transparency for users, a dispute resolution and collateral backed asset gateways.

Again from the white paper
The key deliverables of openANX are to:
1. Migrate existing exchanges to the role of collateralized Asset Gateways, bridging fiat to tokens in a collateralized, transparent manner

2. Complement the wave of “token only” decentralized matching engine projects which otherwise would not have fiat support, and hence further increase liquidity, and accessibility for the general public

From Day #1 of the deployment of the decentralised exchange, we plan to have Asset Gateways in place. For the wider market, the first asset gateway will act as a reference model in terms of policy and process for subsequent asset gateways to follow.

Asset Gateways will be able to mint/burn new native Ethereum ERC-20 tokens that represent any number of things, BTC, Litecoin, gold or fiat and then introduce them for movement across the DEX platform.

We believe the ability to get fiat in and out consistently will be a very powerful tool in helping existing users move easily between different tokens and gateways, and also to cash in/out. Therefore, our first piece of work on the development front was to design out the Mint/Burn process and key parts of the [Asset Gateway](https://gitlab.com/oax/asset-gateway-poc) integration. You can see the code and thinking behind that here.

You may have seen the diagram below, although I’d suggest you have a second look as it is updated regularly. In essence, this outlines all the steps in the journey for the minting of Fiat Tokens by an Asset Gateway and the control mechanism required by the Asset Gateway to do so, this code is well under way and is likely to be delivered EARLY.

![]({{ site.baseurl }}/img/blog-images/code_dev_overview_no1-5.png)

We’ll post more of these code updates in the lead up to Christmas and New Year.

---

**Got a Question?**

**Want to know the latest from OAX Foundation?**

**More about OAX Foundation**

[www.oax.org](https://www.oax.org)

[Medium](https://medium.com/@OAX_Foundation)  
  

**Reach out to OAX Foundation via e-mail:**

Collaboration Proposals: [ProjectStallman@oax.org](ProjectStallman@oax.org)

Other Inquiries: [Info@oax.org](Info@oax.org)

**Social Media:**

[Discord](https://discordapp.com/invite/ZH5YHkb)

[Youtube](https://bit.ly/2Bvsk73)

[Twitter](https://twitter.com/OAX_Foundation)

[LinkedIn](https://www.linkedin.com/company/oax-foundation/)

[BitcoinTalk](http://bitcointalk.org/index.php?topic=1943946)

[Reddit](https://www.reddit.com/r/OpenANX/)

[Telegram English](https://t.me/openanxteam)

[Telegram Chinese](https://t.me/oax_cn)


