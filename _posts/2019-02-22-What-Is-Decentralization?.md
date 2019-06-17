---
layout: post
author: Wayland Chan, Technology Director, OAX Foundation
---

![]({{ site.baseurl }}/img/blog-images/what_is_decentralization.jpeg)

The term “[decentralization](https://medium.com/@VitalikButerin/the-meaning-of-decentralization-a0c92b76a274)” raises the ire of many cryptocurrency enthusiasts.

Blockchain projects that aren’t fully decentralized are treated with contempt by the purist crowd. Yet the term itself is so generic and wide spanning that not many within our community are able to even define what it actually means.

We at the [OAX Foundation recently announced a huge milestone](https://cryptobriefing.com/oax-dex-mass-adoption/) in the [testnet release](https://bitcoinexchangeguide.com/hong-kong-dex-trading-platform-oax-announces-scaling-protocol-to-spur-mass-user-adoption/) of our [DEX platform](https://coinmarketcap.com/currencies/oax/), which was developed [in partnership with Enuma Technologies](https://medium.com/@OAX_Foundation/oax-reaches-major-technology-milestone-now-its-time-to-partner-up-20aaee18ddcd). I’m writing this article because the journey we’ve taken in reaching this milestone has been littered with hurdles. Many obstacles we faced required technical decisions. With every decision we made, it shaped the way our product evolved. And in that evolution of our DEX, we always challenged ourselves with the simple question: “Is it decentralized?” Answering that begs the question of: “What does it mean to be decentralized?”

I’ve always posited that decentralization can come in many shapes and sizes. For the purpose of this article, we’ll only look at decentralization as it pertains to exchange platforms.

![]({{ site.baseurl }}/img/blog-images/its-not-even-decentralised.png)

#### Decentralized custody of assets
The biggest argument for [decentralized exchanges (DEX)](https://hackernoon.com/decentralized-cryptocurrency-exchanges-a-comprehensive-overview-e23b4a45be82) is not requiring users to trust exchange operators to [custodize the users’ assets](https://hackernoon.com/importance-of-digital-asset-custody-bad3f90c3446). The majority of [crypto exchanges run on a centralized model (CEX)](https://hackernoon.com/importance-of-digital-asset-custody-bad3f90c3446) in which users send their funds to the exchange to hold in custody, so the user can trade on their platform. This centralized location for the [custody](https://www.forbes.com/sites/rachelwolfson/2018/11/07/why-centralized-cryptocurrency-exchanges-make-terrible-custodians-for-crypto-assets/#302dd45e2e18) of such large amounts of digital assets has always created a tempting target for attacks. The cry for DEXs comes from the repeated hacks against exchanges in which users have lost in excess of $1 billion.

DEXs have sprung up by allowing users to keep their funds within their own [private wallets](https://bitcoinmagazine.com/articles/op-ed-why-its-unsafe-to-store-private-crypto-keys-in-the-cloud/) but still enable them to [trade](https://www.tradingview.com/symbols/OAXUSD/?exchange=BINANCE) via their platforms.

#### Decentralized order matching
[Order matching](https://www.investopedia.com/terms/m/matchingorders.asp) is when an exchange finds a buyer/seller willing to complete your order. Traders have an expectation that exchanges will fill their orders with the best [price](https://www.coingecko.com/en/coins/openanx), quickly and in a fair manner (first come, first served). With centralized exchanges, we have no guarantee that this actually happens.

Here’s an example of what _could_ happen on a CEX:

Let’s assume the price of Bitcoin was trading at $3,600 USD. Jerry wants to buy 10 BTC at $3,600 USD. Newman wishes to sell 10 BTC at $3,500 USD (wants a quick sale). Ideally, Jerry’s buy order would be filled at Newman’s price of $3,500 USD. But there’s a non-zero chance that a greedy exchange decides to buy Newman’s 10 BTC at $3,500 USD then turns around and sells them to Jerry at $3,600 USD each, thus profiting $1,000 USD. If this happened, Jerry and Newman would be none the wiser.

[Decentralized order matching](https://www.econinfosec.org/archive/weis2014/papers/Clark-WEIS2014.pdf) provides full [transparency](https://www.bti.live) of the order book, allowing all participants an equal chance of filling orders. That transparency enables true peer-to-peer (P2P) trading.

[In the summer of 2018](https://www.youtube.com/watch?v=EIfhsTBzkaM&feature=youtu.be), [OAX released a prototype DEX that had such a decentralized order book](https://medium.com/@OAX_Foundation/oax-platform-prototype-demo-video-1161b8aa5af0). The sharing (or broadcasting) of orders was done using [Ethereum](https://www.ethereum.org)’s Whisper protocol. As a Proof-of-Concept (PoC), this was a great achievement towards “decentralization”. However, we quickly discovered that Whisper was unsuitable for a trading platform due to its high latency. We also debated the [privacy issues](https://news.bitcoin.com/the-crucible-of-privacy-why-decentralized-exchange-is-the-only-way/) of a fully open order book such as the one we prototyped. It was at this point that we decided to re-prioritize our goals. Rather than coming up with a faster and decentralized way of broadcasting orders (for the sake of openness), we decided that faster settlement was more important at this stage.

#### Decentralized settlement
[Settlement](https://www.bis.org/publ/arpdf/ar2018e5.pdf) is the delivery of assets upon payment. When does settlement happen in a CEX? It depends. Your trade might have executed and your exchange wallet will show an updated balance but that information is only within the realm of the CEX. The transfer of ownership as recorded on the actual blockchain doesn’t occur until you withdraw your assets from the CEX. So, on the surface, it may seem that your trade was settled because you’re able to turn around and trade them from your exchange wallet. The truth is, until you successfully withdraw from the CEX, those coins aren’t truly yours as there’s no record of it on the blockchain.

DEXs can provide decentralized settlement by enabling P2P trading where both sides of a trade is settled (written to each respective blockchain) immediately via an [atomic swap](https://blockgeeks.com/guides/atomic-swaps/).

OAX’s DEX implements decentralized settlement in a different way. Our Layer 2 (L2) solution has the concept of a hub which maintains a network of state channels, enabling multiple parties to transact with one another. Each transaction is authorized by signed messages. Until the user decides to withdraw their assets from the hub, the final state isn’t truly written to the blockchain (Layer 1).

This sounds eerily familiar to what I just described for CEX settlement, doesn’t it? It is, but there’s a very big difference: with our DEX, the user is in full control. Each transaction results in a [signed message](https://blockgeeks.com/guides/atomic-swaps/) that the user is able to present as proof in the event of a dispute (we’ll cover our revolutionary dispute resolution process in an upcoming article).

With a CEX, imagine if the CEX had a data outage and lost all record of the trades you made? You would have no recourse to recover all the trades you’d performed. In our L2 model, having signed messages as proof of each trade removes that operational risk. With OAX’s DEX, the user is able to withdraw at their choosing, without the need to wait for approval from an exchange. Although the final settlement isn’t immediate, it’s still guaranteed and fully within the user’s control. The delayed settlement is a characteristic of all off-chain Layer 2 solutions and is what enables us to perform significantly more transactions per second than Ethereum.

These three areas of Custody, Order Matching, and Settlement are only scratching the surface of what can be “decentralized” in an exchange trading platform. It’s possible that in the future, we will also be able to wave the magical “Wand of Decentralization” over other elements of digital asset trading, such as token listings, transaction monitoring, AML, KYC, etc. Maybe then, we could realize [Vitalik’s vision](https://blog.ethereum.org/2014/05/06/daos-dacs-das-and-more-an-incomplete-terminology-guide/) of a [Decentralized Autonomous Organization (DAO)](https://blockchainhub.net/dao-decentralized-autonomous-organization/). But until then, if someone tells you they’re decentralized, ask them exactly what they’re decentralizing.

---

**Got a Question?**

Want to know the latest from OAX Foundation?

More about OAX Foundation

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