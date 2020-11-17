---
layout: post
author: OAX Foundation
image: /img/blog-images/OAX-Fee-Delegation.jpg
---

![]({{ site.baseurl }}/img/blog-images/OAX-Fee-Delegation.jpg)

<b>A Look at the OAX Parachain: Fee Delegation</b>

Here we have our final feature demo: Fee Delegation!

Fee delegation is an incredibly useful feature that allows others to pay the transaction fees on someone else's behalf. 

We start with a scenario where we have three parties: Bob, Charlie and Alice. Bob wants to send 99 tokens to Charlie, but doesn’t want to pay the fees. He has a conversation with Alice, who agrees to act as “Fee Delegator” and will cover the cost of the fees. 

So Bob prepares a signedDelegatedTransferDetails offline, and shares it with Alice, his fee delegator. Alice takes the offline request and then broadcasts Bob’s transaction for him. Once she broadcasts the transaction, the transfers take place. At the end you’ll see that Bob has spent 99 tokens, Charlie has received 99 tokens, whilst Alice has paid the fees. 

When would this feature be most useful? Potentially for companies that are trying to increase usage on their platforms and are trying to boost the number of transactions that are made. You can almost think of it as a “free shipping” offer when people do online shopping now. 

Check out the video below to see the demo play out! 

<iframe width="560" height="315" src="https://www.youtube.com/embed/6TAisOGy_w0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Link to video <a href="https://www.youtube.com/watch?v=6TAisOGy_w0&feature=youtu.be">here</a>.

