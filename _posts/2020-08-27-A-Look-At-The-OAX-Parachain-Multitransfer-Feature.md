---
layout: post
author: OAX Foundation
---

![]({{ site.baseurl }}/img/blog-images/OAX-Multitransfer-Feature.png)

<b>A Look at the OAX Parachain: MultiTransfer</b>In the latest demo video, we highlight the functionality of MultiTransfer within OAX Parachain.

<iframe width="560" height="315" src="https://www.youtube.com/embed/odmloyNhPJ0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>By allowing users to batch multiple transactions into one by avoiding repeated fields, batched transactions will be smaller, hence resulting in a lower gas cost. With the MultiTransfer feature, fields such as the “From:” address (which would be identical for each inner transaction) would only need to be filled out once.In the demo, we first demonstrate Bob sending five normal transfers to Dave. The initial balance of the Bob the Sender is registered as 1180591.62072. After a series of five separate transactions, Bob the Sender pays a total of 0.00735 in transaction fees after all five transfers.The demo then goes on to show the equivalent of those five transfers being combined into a MultiTransfer transaction.  The Sender’s initial balance before any of the transactions is registered as: 1180096.61337. After the single MultiTransfer is complete, Bob the Sender pays fees of 0.00347.For the same amount that was transferred back and forth in the normal transfer, Bob the Sender paid approximately double the amount in fees, compared to if he did one single MultiTransfer to Dave!Coming up next – a very useful feature that we believe the community would benefit from: Fee Delegation.