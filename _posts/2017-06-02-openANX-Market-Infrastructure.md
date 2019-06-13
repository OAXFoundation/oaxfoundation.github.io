---
layout: post
author: Hugh Madden & Liam Bussell 
---

##### Market Infrastructure

The openANX platform will consist of the following market participants:

• Exchange users

• Asset Gateways

• Order book sponsors

• KYC/AML services

• Dispute referees

• Voting members

![]({{ site.baseurl }}/img/blog-images/oax_market_infrastructure-1.png)

_openANX Market_

Exchange users are users who wish to participate in the exchange, using the services for native token trading or for real world asset trading. Exchange users of real world assets will require a relationship with an Asset Gateway. In most jurisdictions Asset Gateways are obliged to perform KYC and AML in order to operate legally and maintain the necessary relationships with financial services suppliers such as banks.

Asset Gateways take into custody real world assets such as EUR or USD fiat and in turn mint ERC20 tokens onto the blockchain. Note that these tokens are not “generic” USD tokens, rather the tokens are specific to the issuing gateway, for example ANX may issue ANXUSD tokens.

Before receipt of funds and issuance of tokens, most Asset Gateways will first request a KYC/AML service to be performed on any user receiving these real-world assets. This is done by the nomination of a KYC service smart contract address as part of the Asset Gateway registration.

When a user establishes a relationship with a gateway, the gateway will first direct them to one or more KYC services. The KYC service will provide a KYC rating, which is registered into the openANX DAO. Note that no physical documents or other materials are stored on the blockchain, merely an Ethereum address. The KYC service will stipulate a KYC level, and validity date range through the KYC API.

Once a user has satisfied the KYC requirements, the gateway can release the token to the user. Gateway tokens generally require one of the following:

• No KYC at all (tokens can be transferred to or from any valid Ethereum address)

• Boundary KYC (tokens are can only be minted to, and redeemed from, KYC’d addresses, however minted tokens can be freely transferred between addresses),

or

• Full KYC (tokens can only be minted to, redeemed from, transferred, and exchanged with addresses that maintain the stated KYC service approval)

Asset Gateways will be afforded varying KYC parameters according to their requirements. Many Asset Gateways are expected to register and supply their own KYC service implementation, as in some jurisdictions it is difficult or undesirable to outsource KYC to a third party.

Where outsourced KYC is possible, significant economies of scale are expected with Asset Gateways sharing KYC/AML service providers.

When Asset Gateways register for service, they will stipulate the KYC smart contract, KYC level, and token operational rules as per above. They will also pledge native Ethereum collateral onto the blockchain, which will be time locked by the openANX DAO. This collateral serves to protect consumers; it can be released as the resolution of dispute resolution, to users of the gateway in the event of a credit event.

In the future, the time locked collateral could generate income for the DAO and asset gateways, through powering state channels or staking; however, this is purely speculative at the current time.

With the availability of transparent, locked collateral, and transparent token issuance, users can form quantifiable views on the creditworthiness of Asset Gateways. Note that the existing best practices are still recommended, i.e. Asset Gateways should hold customer funds in custody, in a non-fractional, audited manner. It does, however, offer a concrete and quantifiable means for users to price the credit risk.

##### Credit Risk Markets and Liquidity Aggregation

Pricing of credit risk is a key activity in any normal financial marketplace. In large institutional trading desks, each deal is broken up into smaller internal constituent deals; which some trading desks focus on pricing the market risk of some assets, whilst other trading desk focus on the credit risk. The profitability of a deal is then attributed to the credit and market risk desks individually.

The ability to trade credit risk is notably missing from current crypto markets. openANX will support “Credit Risk” order books. In this manner, an ANXUSD token can be traded against another gateway’s tokens (say perhaps AcmeUSD). For example, ANX may have a strong public brand, and high levels of collateral locked up in the DAO relative to issue tokens, whilst Acme has an unknown brand and low levels of collateral. The ANXUSD/AcmeUSD order book allows these two tokens to be traded against other, forming the basis for a credit risk trading market within the crypto marketplace. The pricing of these credit risks further provides users with another objective measure of counterparty risk.

Order books are opened by the DAO on the request of a sponsoring user. Often the Asset Gateway itself will sponsor an order book for its tokens, for example the ANX gateway would open an ETH/ANXUSD order book.

With the ability of Asset Gateways to register their tokens and sponsor their own order books, the barriers to entry for gateway operators will be significantly lowered. The introduction of openANX should see many new gateway operators entering the market, with varying levels of credit quality and jurisdictional/asset support.

Credit risk order books, trading gateway tokens against each other, will greatly improve price discovery to the market.

This situation by itself is better than the current landscape of centralized exchanges, as there will be greater competition and choice for users, with more transparent credit risk, and collateral pledged on the blockchain to provide a safety net in the event of a credit risk event or dispute.

It can be argued however that the biggest hurdle to entry for new exchanges is liquidity. Liquidity refers to the amount of traded assets available on the order books of an exchange. A highly liquid exchange could allow a large deal to instantly trade, whilst barely impacting the price. Liquidity has a strong network effect, as soon as one exchange or venue becomes the largest in terms of liquidity, it quickly attracts more liquidity until other exchanges cannot compete. This has arguably resulted in a small group of centralized crypto exchanges dominating the market place for a period of time, until such time as a legal, security, or credit event halts operations.

openANX overcomes this issue through the application of order book aggregation, coupled with credit risk trading books.

To consider the situation where there are three order books:

1. ETH/ANXUSD

2. ETH/ACMEUSD

3. ANXUSD/ACMEUSD

By themselves order books 1 and 2 reflect individual fragmented pools of liquidity. If there is an active credit risk order (i.e. book 3), matching logic call match trades by combining the three order books into a single order book with simple graph.

In this fashion, an active credit risk order book can transform small individual exchange pools of liquidity into a single large order book. This approach may at last bring about the liquidity network effect to turn a decentralized, open exchange into the dominant source of exchange liquidity.

##### The openANX User Journey

Users on openANX who are seeking to on-board fiat currency to the blockchain will initially require the services of an asset gateway. The availability of public credit risk and collateral metrics should assist users selecting an appropriate gateway.

The user can be expected to register through online services specific to each gateway, similar to the current situation with centralized exchanges.

Gateways in most jurisdictions will require some level of KYC and AML; the user will then be directed to such a service, either within the Asset Gateway, or to an external service provider if the Asset Gateway utilizes a third party provider.

Upon KYC/AML approval (if required by the Asset Gateway) the user may use the payment methods supported by the Asset Gateway to deposit funds. The Asset Gateway will then mint it’s own specific (at least partially collateralized) ERC20 tokens.

The user will then have the option of trading through a decentralized user interface provided by openANX (i.e. a Mist or Coinbase Token application) or trading their freshly minted token directly with any of the available ERC20 decentralised exchanges.

It is expected that the user will typically use the openANX trading interface, as the order book aggregation across multiple asset gateway tokens will allow access to a more liquid pool for the conversion of the token into ETH or other major cryptocurrencies available on the platform.

Eventually the asset gateway token holder can be expected to off-board their tokens back to real world assets. This is conducted by redeeming the token to the asset gateway through the openANX user interface, at which point they would be contacted by their asset gateway.

![]({{ site.baseurl }}/img/blog-images/oax_market_infrastructure-2.png)

_User Journey_

##### Technology Platform

The technology platform to be delivered by openANX is as follows:

• A specification of the market operating model as described in the previous section

• Ethereum smart contracts to govern and operate the market as specified

• Integration with one or more exchange channels (notably Swap, Raiden, or 0x) to support matching

• API for each off-chain function integration (gateway, trading, KYC, order book registration, dispute resolution, DAO governance and upgrade)

• A standard, reference implementation user interface to allow account management and trading (it is expected the community will also provide additional user interface implementations as the platform is entirely open)