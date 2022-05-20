---
layout: post
author: OAX Foundation
image: /img/blog-images/OAX-IJS-Review.png
tag: community-updates
---

![]({{ site.baseurl }}/img/blog-images/OAX-IJS-Review.png)

<b>OAX Foundation x IJS Technologies: A look back on the past year</b><br>

<b><i>It's been a year since we last heard from the IJS team about their experience from receiving the grant to helping develop the OpenSwap - a next-generation DEX, offering innovative swapping and liquidity solutions that enables DeFi users to efficiently and effectively swap and provide liquidity in the growing multi-chain landscape.

<b><i>We asked them to come back and reflect on the last year, the progress, the stumbling blocks, and the learnings that have come their way.<br><br>

*****


<b>Germination</b>

The first technology we helped OpenSwap roll out to mainnet was the DEX aggregator, while it is not the sexiest piece of technology out there (and pretty much every other project would also have their version of a DEX aggregator), this helped create the solid foundation to which OpenSwap’s other core technologies are built on. As of date, OpenSwap’s DEX aggregator is currently integrated with top-notch decentralized exchanges such as PancakeSwap V2, Biswap, SushiSwap, IF Swap, and more.

<b>The Launch</b> 🚀

Following the introduction of the DEX aggregator, OpenSwap had a successful TGE held on Impossible Finance Launchpad. The strategic round was supported by top-tier VCs such as NGC Ventures, Coin98 Ventures, BR Capital, Legos Capital, Double Peak, Prime Block, Illusionist Group, as well as other notable angels including Julien Bouteloup (aka. Godfather of flash loans) who heads up StakeDAO and Curve Finance, Leo Cheng, founder of CREAM Finance, and Ravindra Kumar, CEO at Frontier Wallet, just to name a few.

<b>Liquidity Queue & Hybrid Smart Router</b>

Shortly after the TGE, OpenSwap released two of three key technologies that make up the core pillars of the DApp’s unique-to-DeFi offerings, and they are Liquidity Queues and Hybrid Smart Router. The former was introduced as a revolutionary approach to on-chain liquidity that offers traders and market makers a novel and efficient mechanism for carrying out on-chain trades. As most of us are aware, the core of all DEX swaps is the pricing mechanism, where conventionally AMM DEX’s base pricing off of predefined constant product formulas that are x*y=k, and arbitrage traders are incentivized to trade off the pool to keep it pegged to market prices. While this mechanism reflects market pricing, it only works for smaller volume trades due to the inherent slippage that tags along. So rather than simply refining the AMM formulas for modest improvements, IJS Technologies provided the OpenSwap team with the liquidity queue technology that helped removed the “one-size-fits-all” approach that is adopted by conventional DEXs. Instead of a single pricing mechanism, OpenSwap’s pricing was based on individual use-cases, as such, the liquidity queue base layer technologies can be shaped to create different queue types, and each queue type is based on a unique pricing mechanism.

As a complement to the Liquidity Queue technology, we also provided the Hybrid Smart Router smart contracts to OpenSwap as part of their initial mainnet rollout following the TGE. With the introduction of Liquidity Queue technology, market makers and market takers have a mechanism to carry out efficient spot market transactions. OpenSwap’s Hybrid Smart Router can help take the liquidity queues to the next level, by enabling the coupling of swap trades from AMM pools with liquidity queues, which can provide a clear advantage over ‘AMM-only’ approaches.

<b>The Expansion</b>

The key to success in DeFi is to achieve steady growth of new partnerships and friends. And in #buidlers language, this meant that OpenSwap had to proactively seek new integrations with other DApps. Their first major breakthrough on the growth front was their integrations with IJS Technologies’ wallet partners, including the likes of Trust Wallet, Wallet Connect, Binance Chain Wallet, Coin98 Wallet, and ONTO Wallet. Along with Metamask, OpenSwap now supports over 40+ wallets, giving millions of DeFi users a buffet of choices and easy access points to OpenSwap’s core technologies.

While integrating with additional wallets provided OpenSwap’s users with additional access points, streamlining the user journey was merely a one-sided remedy to this multi-dimensional challenge that is OpenSwap’s expansion. The next step to successful user acquisition was to help OpenSwap bring its core technologies to different blockchains. IJS Technologies contributed the tech power and resources necessary to successfully helped OpenSwap bring their DEX Aggregator offering to Ethereum, Binance Smart Chain, Avalanche, Polygon, and Fantom. As OpenSwap continues to develop and mature, IJS Technologies will continuously contribute to their extension by helping bring the rest of their technologies to other EVM compatible chains.

<b>Keeping Things #SAFU</b>

OpenSwap establishes trust with the community through 3rd party audited smart contracts and has protocol parameters transparently managed through their governance portal since the project launched. 

So even though OpenSwap is still in beta, we advised them to have their contracts aimed to be as bulletproof as possible. This is why the OpenSwap core contracts are audited by CertiK, Beosin, and Peckshield, leading blockchain security audit firms that combine manual testing, static analysis, and formal verification for the most robust smart contract security in the industry.

Furthermore, on top of lining them up with Immunefi where they now host their bug-bounty program, IJS Technologies also introduced OpenSwap to Tidal Finance, a DeFi protocol of the insurance niche, to cover users' funds. In case of payout, the coverage amount will be paid directly to the OpenSwap team and will be subsequently distributed to affected users. Currently, the coverage includes contract vulnerabilities for core technologies deployed on Binance Smart Chain, and as additional core technologies such as the OpenSwap Bridge get deployed on the mainnet, we will continue to be on the lookout for other DeFi insurance options so as to safeguard OpenSwap and their users’ funds.

<b>What’s Next?</b>

IJS Technologies provided OpenSwap with the codes to Open Interchain Protocol, the backbone of the soon-to-release OpenSwap Bridge, an ANY-to-ANY single asset #crosschain bridge that offers more efficient crosschain swapping of chain-native digital assets through the use of single-asset vaults in a decentralized manner. With the incorporation of other OpenSwap technologies like Liquidity Queue and Hybrid Smart Router, Open Interchain Protocol will help OpenSwap Bridge form a fully transparent and capital-efficient end-to-end crosschain swapping solution.

At the core of OpenSwap Bridge, is the concept of Bridge Trolls. Bridge Trolls are essentially node validators who perform the tasks of monitoring the protocol for transaction requests, verifying, and signing transactions to carry out the withdrawal of funds on different blockchains. In order to ensure that Bridge Trolls behave appropriately, they need to stake bonds in the form of the native $OSWAP tokens which are put at risk if they carry out inappropriate actions. In return, Bridge Trolls will be compensated a portion of the bridge fees (transaction fees) for helping to carry out the crosschain activities.
