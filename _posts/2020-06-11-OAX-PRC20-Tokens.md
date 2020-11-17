---
layout: post
author: OAX Foundation
image: /img/blog-images/OAX_PRC20-feature.png
---

![]({{ site.baseurl }}/img/blog-images/OAX_PRC20-feature.png)

<b>A Look at the OAX Parachain: PRC20 Tokens</b>

We’ve reiterated time and time again that the industry moves quickly, but different teams are working concurrently within the same space, trying to identify features and usability that may overlap with what others are doing as well.

When we began brainstorming for our OAX Parachain, we knew quite early on that we needed to have the atomic swap feature. But what is a swap if we don’t have a token—what would we be trading with? We simplified the ERC20 specifications and adapted it to create PRC20 which would serve as our base.

After nearing completion, we learned that substrate was also working on their own implementation of this feature. But the more the merrier! The key to development during these times is flexibility, and we can adapt to different implementations. 

Our demo shows Alice creating 1000 “Alice tokens” (that are created using the PRC20 module that’s been built), of which 10 are transferred to Bob’s account. Once Bob has 10 tokens in his account, he decides that he wants to grant access to Alice to have control of the 10 tokens in his account—known as the “Approve” function. 

Alice would be then be able to initiate the “transferFrom” function without Bob’s further approval. She then transfers back the 10 tokens from Bob’s wallet to her own using this “transferFrom” function and the balances are updated to reflect the final amounts—Alice with 1000 tokens, Bob with zero.

<iframe width="560" height="315" src="https://www.youtube.com/embed/FbIv2ioKPrQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The possibilities of granting access and in future being able to use these tokens in swaps leads us to the potential of more exciting features. Watch this space!

