---
layout: post
author: ByungWoo Sohn
---

![]({{ site.baseurl }}/img/blog-images/credit_risk_and_liquidity-1.jpeg)

In the last post, we looked at the example of a user trying to buy a Bitcoin for a certain amount of money and figuring out which Asset Gateway to use. The gist was that one Asset Gateway could offer low credit risk (high collateral levels) for a higher price, while another Asset Gateway could offer high credit risk (low collateral levels) for a lower price, and the user could choose between the two based on their needs and preferences.

In this post, we will be looking at how this credit risk dynamic could impact other parts of the openANX platform, specifically liquidity. openANX will support “Credit Risk” order books, so that a token can be traded against another gateway’s tokens. Similar to the example above, Gateway A could specialize in trading Token A, with high levels of collateral. Gateway B could trade Token B, with low levels of collateral. The Token A / Token B order book would allow the two tokens to be traded against the other, forming the basis for a credit risk trading market, which is something that is notably missing from current crypto markets.

Since Asset Gateways in openANX have the ability to register their tokens and sponsor their own order books, it will much easier for gateway operators to join. Even someone with a relatively small amount of assets can become a gateway operator if the person wants to get into that side of the business. As more and more Asset Gateways appear, the market competition will increase, providing better options for users.

![]({{ site.baseurl }}/img/blog-images/credit_risk_and_liquidity-2.png)

A positive side effect of more Asset Gateways is higher levels of liquidity. Acquiring sufficient levels of liquidity is arguably the toughest challenge for new exchanges. An exchange with high liquidity allows large deals to be traded instantly, whilst barely impacting the price. Without this, large-scale traders won’t be attracted to the new exchange. openANX solves this problem by aggregating its order books, along with credit risk trading books.

Consider a situation in which there are three order books:

1.	_Token A / Token B_
2.	_Token A / Token C_
3.	_Token B / Token C_

By themselves, order books 1 and 2 are individual fragmented pools of liquidity. If there is an active credit risk order (i.e. Book 3), matching logic calls match trades by combining the three order books into a single order book with a simple graph. This way, an active credit risk order book can transform small individual exchange pools of liquidity into a single large order book. Order books can be cross currency, allowing the pooling together of liquidity across different sovereign fiat currencies. This approach may finally bring about the liquidity network effect to turn a decentralized, open exchange into the dominant source of exchange liquidity.

Just as with credit risk and liquidity, many of openANX’s functions are linked. Like gears on a bike, the platform is designed so that when one section works well, it causes a chain reaction and the whole platform runs smoothly.

For more details, go to our [website](www.openanx.org)

You can now download the following documentation
1. openANX White Paper
2. openANX Technical White Paper
3. Sale Summary Sheet
4. OpenANX Project Deck