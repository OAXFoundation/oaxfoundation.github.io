---
layout: post
author: Wayland Chan, Director of Technology, OAX Foundation
image: /img/blog-images/polkadot_meetup_01.png
tag: community-updates
---
![]({{ site.baseurl }}/img/blog-images/polkadot_meetup_01.png)

Dr Gavin Wood, co-founder of Ethereum and now the architect behind the Polkadot Network, and Dr Alistair Stewart from the Web3 foundation have been touring a number of cities in China to talk about the current state of the Polkadot Network.

Last week, OAX Foundation’s General Manager, Amanda Liu, and I went to Chengdu, China to listen to one of these talks as we wanted to hear first hand some of the new developments within the Polkadot project as well as get some insight into the crypto startup scene within China.

The turnout was pretty impressive with around 100 people coming to hear Gavin give a very good intro to the Polkadot project and details about the upcoming Kusama network.

The Polkadot team are calling Kusama a ‘canary’ network, meaning it’s real and live but with the understanding that the code it’s built on is bound to have defects and very likely security issues too. If it’s so ‘beta’, why not just call it a testnet, you ask? Well the issue with testnets is that there’s no financial incentives, no risk/reward at stake and so they tend to be underused.

But by being a canary network, Kusama is different. Its token aims to have about 1/10 the value of DOT tokens, thus giving it a lower financial footprint but still real enough that participants will (hopefully) put more effort into it. The canary network will enable the Polkadot team to test many of the concepts that they’ve been developing, as well as test out governance frameworks and trial run staking and validating.

One topic that Gavin touched on that I’d not previously read about in regards to scaling was the ability for relay chains to be nested. It was quite eye opening when he mentioned it and while it sounds great in theory, it’ll be even cooler to see it done in practice.

Another big announcement from Gavin was the introduction of Parathreads. Parathreads work just like Parachains do but don’t have the semi-permanent role of Parachains. Parathread collators can produce blocks but there’s no guarantee that validators will validate those blocks and add them to the relay chain. Instead, Parathread blocks are validated via an auctioning process in which they pay validators to validate their blocks.

Parathreads were introduced because the Polkadot team realized they will have technical limitations on how many parachains can be supported by the network, which may have the unfortunate consequence of inflating the price of parachains. Parathreads allow players who don’t need a full-time parachain to be operational, to still participate in the Polkadot network, with a lower entry cost.

![]({{ site.baseurl }}/img/blog-images/polkadot_meetup_02.png)  
_Amanda Liu, Gavin Wood, Wayland Chan_

Alistair’s talk was titled “How to validate a Parachain with only 10 validators”. While most truly decentralized blockchains require hundreds or even thousands of nodes to validate their blocks,Polkadot can get by with as little as 10. It does this through a mixture of staking and a second layer of actors called Fishermen.

Fishermen are responsible for validating the validators. Kind of like bounty hunters, they seek to identify malicious validators and get rewarded for identifying such bad behaviour. Fishermen also have to stake DOT to the network so they cannot perform a Sybil attack on honourable validators. If a validator or fisherman is caught being malicious, their stake is “slashed”; thus removing any incentive for them to act nefariously on the network.

![]({{ site.baseurl }}/img/blog-images/polkadot_meetup_03.png)  
_Alistair Stewart and Wayland Chan_

The evening finished up with a talk from Mike Tang about Web Assembly and Rust. There seems to be a thriving Rust community within China so if you’re looking to join them, get help or even hire, seek out Mike and he should be able to help you.

The event was very good and I wish there had been more time for Q&A (we’d run well over time) but kudos to the local organizers and of course to Gavin and Alistair presenting.