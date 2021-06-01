---
layout: post
author: OAX Foundation
image: /img/blog-images/cancel_order_in_trustless_setting.jpeg
tag: tech-developments
---
![]({{ site.baseurl }}/img/blog-images/cancel_order_in_trustless_setting.jpeg)

As promised in our last community update, we will be providing technology development updates about our project more frequently over the next few weeks while the team works on readying our Layer 2 Settlement protocol for general public release. Today, our partner Enuma Technologies published a [blog](https://blog.enuma.io/update/2019/07/02/order-cancellation.html) discussing a both critical and challenging issue — order cancellation in a trustless setting.

As pointed out in the blog, to properly implement an order cancellation, a third party needs to acknowledge the order and publish a message to confirm it. And because using the blockchain as third party is both costly and slow, our current mechanism has the exchange operator to fill that role. This however may also be problematic as a malicious exchange can potentially profit from ignoring or delaying cancellation orders.

The blog then goes on to elaborate the possible fixes to the problem, which includes having the exchange provide a signed cancellation note with information about how much of the cancelled order has already been filled. It also explains the dispute mechanism which uses a smart contract to address disagreement between clients and the exchange operator by considering evidence submitted by both sides. Finally, the blog talks about how a trustless order cancellation can be implemented “fully” by combining both off-chain and on-chain cancellation mechanism.

Click here to check out what else the Enuma team have been talking about on their [official blog](https://blog.enuma.io/).