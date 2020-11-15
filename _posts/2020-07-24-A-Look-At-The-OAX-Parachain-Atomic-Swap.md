---
layout: post
author: OAX Foundation
---

![]({{ site.baseurl }}/img/blog-images/OAX-Parachain-Atomic-Swap.jpg)

<b>A Look at the OAX Parachain: Atomic Swap</b>

This week we start getting into some interesting features that was highlighted in our Polkadot summary—Atomic Swap.

What does Atomic Swap do? In simplified terms, it allows the swapping of two different tokens to be done in one single transaction through the use of a smart contract.

In our scenario, Alice and Bob both start out with their own respective tokens. Bob wants to make a swap with Alice so that both of them can have some AliceTokens and BobTokens in their wallet. Without Atomic Swap, this would have to be two separate transactions—Bob would have to do a single transaction giving 100 BobTokens to Alice, and trust that Alice after receiving the tokens would honor her end of the bargain and send 200 AliceTokens (or vice versa).

But with Atomic Swap, this agreement can be done in one transaction. Bob and Alice no longer need to worry about trusting the other party to hold up their end of the bargain. The process also speeds up, since users are only waiting for one transaction to go through versus two.

Bob makes an offer to Alice with the terms that he will give 100 BobTokens in exchange for 200 AliceTokens, and signs this offer. He then sends this offline to Alice. As Alice reviews this offer and if she's willing to accept the terms, she broadcasts it to the blockchain. When she does so, the swap occurs in a single transaction, and both Bob's and Alice's balances are updated.

<iframe width="560" height="315" src="https://www.youtube.com/embed/CnDJlnioNkU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The team is working hard on pulling together for our next feature functionality — MultiTransfer. Can’t wait to show everyone soon!
