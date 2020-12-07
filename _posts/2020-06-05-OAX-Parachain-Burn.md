---
layout: post
author: OAX Foundation
image: /img/blog-images/OAX-Parachain-Burn.jpg
tag: tech-developments
---

![]({{ site.baseurl }}/img/blog-images/OAX-Parachain-Burn.jpg)

<b>A Look at the OAX Parachain: Burn Feature</b>

When we discussed the four features that we were working on when creating our OAX Parachain on the Polkadot network: ERC 20 functionality, Atomic Swap, Fee Delegation, MultiTransfer. In the process of developing the features, we actually added to our list (talk about moving the goal post!) to include an additional function: Burn.

In order to ensure that we are moderating the supply of OAX tokens, the team felt it was necessary to add on a Burn feature that would allow key stakeholders to remain incentivized. The Burn mechanism put in place, ensure that there would be an automatic burning of 20% of gas fees, which are not collected by the OAX Foundation. 

Below is our demo that we’ve put together illustrating the code for the Burn feature. The script will run transfers from Alice to Dave 50 times, simulating a burner pot accumulating funds from fees.

You will see the burner pot increasing as it accumulates funds from fees, then decreasing after every BurnPeriod. You should also see the TotalIssuance of the system reducing whenever a burn happens. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/GNbdXQlpgcc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This is what happens on our side. Making progress by coding one thing at a time. Stay tuned for our next example!
