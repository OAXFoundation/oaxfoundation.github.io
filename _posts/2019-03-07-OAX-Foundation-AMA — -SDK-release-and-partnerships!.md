---
layout: post
author: OAX Foundation
image: /img/blog-images/oax_ama_sdk_release_and_partnerships.jpeg
tag: tech-developments
---

![]({{ site.baseurl }}/img/blog-images/oax_ama_sdk_release_and_partnerships.jpeg)

[OAX Foundation](https://www.oax.org/en) held a [2-day-Ask-Me-Anything (AMA)](https://www.reddit.com/r/OpenANX/comments/ax3prs/this_is_the_official_qa_thread_for_the_oax/) session between the 4th and 6th of March, 2019.

Our recent launch of the [testnet](https://www.oax.org/en/testnet-announcement) and [SDK](https://medium.com/@OAX_Foundation/oax-dex-software-development-kit-8faba46981d1) leading to our [decentralized](https://medium.com/@OAX_Foundation/what-is-decentralization-85a0fc993b5b) exchange (DEX) platform were the main focus of the AMA; however, other questions pertaining to various aspects of OAX Foundation were also raised, including the [legal framework](https://medium.com/@OAX_Foundation/oax-regulatory-breakfast-bridging-the-knowledge-gap-in-a-decentralized-ecosystem-3939790c41cf), [finance](https://medium.com/@OAX_Foundation/quick-views-from-oax-foundation-experts-our-take-on-the-jpm-coin-4c1007be859b), [business development](https://medium.com/@OAX_Foundation/the-year-of-milestones-and-partnerships-4868e1a3db9b), and [marketing](https://medium.com/@OAX_Foundation/oax-foundation-featured-in-hong-kong-mainstream-newspaper-sandbox-and-wider-bitcoin-adoption-to-c6623cc0ad01).

This resulted in a [full-team](https://www.linkedin.com/authwall?trk=gf&trkInfo=AQGbgoOnXB6U4gAAAWr8Z_64PGlpnuGDNQ8e3fBps3lLxrq6iRlY1_-clDknMnDbqOnw5KJEegtBFs50cePAQubDuCX8SiQ0OP9512XCvPsHX8LNTWKsJPJ_q4NsXB2t1pf5kAU=&originalReferer=https://medium.com/@OAX_Foundation/oax-foundation-ama-sdk-release-and-partnerships-28ea1379a546&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Foax-foundation) effort, including those from Enuma Technologies, our technology development partner, to answer all the questions. We would like to convey a heart-felt “Thank You” to all those who participated in our AMA that was held on [our subReddit](https://www.reddit.com/r/OpenANX/).

Below is a summary of the AMA:
## Technology  
##### Testnet/SDK  
**Q 1. 1,000+ TPS as shown in the demo is certainly talking about off-chain speed. When and how is the settlement on blockchain done? Are these scheduled to execute in the underlying blockchain regularly?**  
A 1. Yes, those transactions are committed to the actual blockchain on a schedule. The Enuma team will be writing up a description of the working details of the Layer 2 stuff, keep an eye out for that!

**Q 2. Since the testing is done on a Proof-of-Authority (POA) testnet, what is the implication in terms of speed when it is launched on the real mainnet? I am asking this because it seems the approach avoid settling on blockchain AT ALL in order to maximise speed, so how and when is the settlement really done on-chain?**  
A 2. From a user’s point of view, the blockchain is only used during deposits and withdrawal. All trading happens using the Layer 2 protocol, and not affected by the blockchain performance. Settlement happens on the Layer 2: the exchange operator manages the off-chain ledger and all fund movements on that ledger happen via signed messages, or messages that are understood by the on-chain smart contract in case the user wants to dispute the actions taken by the exchange operator. After trading, funds can be immediately used for a new trade without the need to wait for any mining of settlement. Withdrawal does happen on-chain and requires a blockchain transaction.

**Q 3. The approach seems to avoid settling on-chain altogether in order to maximise speed. What happens when a user withdraw tokens after he/she just traded in the tokens? Does the user get paid in the blockchain by the exchange, or by its counter-party trader? Is it still “atomic swap” based?**  
A 3. The on-chain transaction will be a transfer from the smart contract to the user’s wallet. Note that even though there’s a deposit to the exchange operator, users have final control over their funds through the dispute process in the smart contract. A hacked or malicious exchange operator cannot steal your funds.  
The atomic swap happens on the off-chain ledger, not on-chain.

**Q 4. So is OAX still based on 0x? In its latest version? What is the rationale behind the decision to move away from an open protocol when 0x also supports L2 scaling?**  
A 4. No, it is not. Last year’s PoC DEX (Proof-of-Concept decentralized exchange) was using 0x (a Whisper order book). This showed decentralization but also the downside of using an on-chain protocol like 0x, limiting performance to little over ten transactions per second. Hence the decision.

**Q 5. What is it based on now? Sprites? Or some custom closed technology?**  
A 5. When we started the OAX decentralized exchange (DEX) project, Sprites was the most promising Layer 2 tech we heard about, and we actually got quite far with a prototype DEX using atomic swaps by utilizing Sprites, and with great performance, too. Unfortunately, Sprites (like other state channels) had collateral requirements which made the application very impractical. Since the end of last year, the dev team has been creating a custom Layer 2 that supports both non-collateralized and non-custodial swaps! This is the tech features in our current [testnet release](https://www.oax.org/en/testnet-announcement).

**Q 6. Could you elaborate more on “non-collateralized”? That sounds like someone can place an order to trade COIN_A for COIN_B while he/she doesn’t need to prove he/she has enough COIN_A and to lock the amount?**  
A 6. By “non-collateralized” it’s meant that the exchange operator does not need collateral. The users must still deposit their funds into the smart contract before they can be traded.

**Q 7. Will there be any instruction video to explain the software development kit (SDK)? I don’t see how it is valuable to non-tech token holders like me.**  
A 7. The SDK isn’t intended for the “end user” audience. It’s a software development kit release that was intended for developers or other exchange operators who have interest in utilizing the decentralized exchange (DEX) technology we developed with Enuma.

##### DEX/Platform launch  
**Q 1. So to my understanding, in the latest approach by OAX, the order-matching layer is not decentralized. It has to be done off-chain in a centralized way. Is the order-matching algorithm up to the exchange operator? How would OAX increase the transparency in this part? How to prove the exchange does operate fairly?**  
A 1. Our decentralized exchange (DEX) has been designed in a way that [operators can plug in their own matching engines](https://medium.com/@OAX_Foundation/oax-reaches-major-technology-milestone-now-its-time-to-partner-up-20aaee18ddcd). This was a conscious design decision by us because companies have heavily invested in highly performant matching engines. We weren’t going to reinvent the wheel, and even if we could, it didn’t seem worthwhile as those operators may still not be willing to give up their previous investments for ours.  
[We had to dial down the openness of the order matching in order to “settle” trades quicker.](https://medium.com/@OAX_Foundation/what-is-decentralization-85a0fc993b5b) You could say that any Layer 2 solution makes a similar compromise.  
How could OAX increase the transparency of that part? It’s something we still need to work out. An exchange has many parts, any decision affects the other parts. You could create a side-chain or entirely separate mainnet using Proof-of-Authority to get better performance and keep everything open, but then you are sacrificing the decentralization of your network.  
How to prove the exchange does operate fairly? This is a loaded question because “fairly” can mean many things. Is it fair when an exchange refuses to process your withdrawals? No, of course not; and our DEX solves that. Is it fair that an exchange is operated by someone without experience in securing their servers and then gets hacked of all your coins? — No. And by not forcing you to put your coins in the exchange’s custody, a DEX protects you from that. Is it fair if an exchange front-runs its own users for profit? No, but this one is harder to solve. Everything on-chain for full transparency is one way, but we’re not going to disrupt that industry with current blockchain speeds. So, we do what we can for now and keep looking for the ultimate solution.

**Q 2. Yea and why is the decentralized exchange (DEX) development taking so long? 2 years is too long, it should take a year max to develop a digital asset platform…**  
A 2. That’s quite a loaded question there, as **how long** usually depends on **what**? When you say that it “should take a year max to develop a digital asset platform”; how do you make such a bold statement without listing what features the platform provides?  
Our first prototype based on 0x that was shown to the world in June 2018 was done very quickly. So you’re right that a “digital asset trading platform” shouldn’t take **that** long. But have you considered how long it takes to build a DEX that overcomes the performance limitations of the blockchain? We chose to not simply put out another 1.0 generation DEX because we felt the reason why DEX uptake by the public hasn’t boomed was partially to do with performance. So we have built a Layer 2-based solution (for speed and lower fees) that also circumvents the need for collateral (as other state channel proposals require).  
So to answer your question: It’s not taking **that** long. Go take a look at projects attempting the same thing, such as Raiden or Bitcoin Lightning, and compare the size of the teams and the progress.

**Q 3. When will the platform launch? Will there be any delay?**  
A 3. “Platform launch” implies that someone has approached us and wishes to use our technology. When that happens, we’ll make all the standard press releases and announcements across our social media channels when the agreements are formally signed. Then we’ll do the same for when it actually goes live, as it’s in our interest to help that client promote the platform and technology. We’re open to working with other companies who would want to use our technology. For example, maybe a traditional cryptocurrency exchange wants to offer their customers the additional security of a decentralized exchange (DEX), but they don’t have the resources or time to develop one themselves. They can work with us and we’d provide them the technology to run a DEX.  
That’s just one example. Cryptocurrency wallets, Anti-Money Laundering/Know Your Customer (AML/KYC) providers, transaction monitoring, and trade surveillance are some examples of the types of business that could become “potential partners”.

**Q 4. Given the increasing number of decentralized exchanges (DEXs) both being developed and released at the moment, what will make OAX stand out compared to the competition?**  
A 4. Many DEXs are plagued with performance problems because they’re writing every transaction on-chain, which requires block confirmations. Some DEXs have sidestepped that problem by using private side chains.  
Our DEX features a trustless Layer 2 (off-chain using smart contracts) solution. The benefit of this is that we can handle over 1,000 transactions per second and the user is secure because all transactions are signed and presentable to the blockchain for finality. In addition to providing the above, our DEX operator doesn’t need to put up a lot of collateral to facilitate these transactions. Enuma will be publishing a detailed paper on the Layer 2 stuff in the near future.

##### Integration with other DApps and platforms  
**Q 1. Theoretically, OAX users will be trading p2p via their wallet addresses, in this case, what about cold wallets like Trezor or Ledger…?**  
A 1. This current testnet release doesn’t support those hardware wallets but it’s possible, and definitely something we can do in the future. Wallet integration wasn’t a very high priority for this release. The bulk work of this release was in building a trustless Layer 2 solution that didn’t require an absurd amount of collateral from the operator.

**Q 2. Will the team consider switching to EOS/NEO/ICX platforms due to their better functionality over ETH, well, I mean technically.**  
A 2. This is a difficult question to answer in detail without you providing us more details about what you mean by “better functionality”. Which features of EOS/NEO/ICX do you feel are better than ETH that are applicable to OAX? We’d be happy to hear your thoughts on this and then let you know whether they fit into our plans. Without any more detail, we can only say that currently, we have no plans to move to those blockchains.

**Q 3. Nah I was just curious because I heard some other people discussing the possibility to switch the project to other platforms for better scalability, hodl (hold on for dear life) motivation (since NEO has GAS), and the team collaboration experience they had.**  
A 3. Consolidation makes sense when the community has so many projects working on similar goals. I don’t recall anyone from OAX Foundation actually discussing this “possibility” in the past, but if we see a real benefit in doing so, it could definitely be discussed.

##### Roadmap/Changes since the Whitepaper was published  
**Q 1. Do you have a 5-year roadmap? I am interested to know what your long-term goals are apart from this year’s platform exchange launch etc.**  
A 1. 5-year plans may not be very realistic for startups, let alone cryptocurrency startups. 5 years ago, Ethereum didn’t exist, Bitcoin was under $300 USD, the mere possibility of Donald Trump as POTUS (President of the US) was so remote that I’d have bet on flying cars and a cure for world hunger instead.  
Our current plans are enough to keep us busy for a couple of years and management will intermittently review those plans every few months to ensure our goals are still viable for current market conditions.

**Q 2. Hi, is OAX going to release an updated Whitepaper and roadmap as the plans seem to have changed a lot from the original?**  
A 2. Great question. This has been a topic of internal discussion but it hasn’t been very high on our priority list (compared to actual development).  
Curious to hear from you on what you feel has changed in our plans v.s. the Whitepaper. Would you care to elaborate?

## Legal  
###### Regulatory environment  
**Q 1. I live in Hong Kong and I read news about the dentralized exchange (DEX) sandbox, how would OAX respond to that? Any plans on the regulation standpoint with the government?**  
A 1. The use of the regulatory sandbox by the Securities and Futures Commission (SFC) is not being made available to DEXs at this stage. Instead, the SFC is focusing its attention on whether regulation of centralized exchanges (CEXs) is appropriate. We support improved regulation in the digital asset market more generally as we believe it will help to improve standards. We are tracking discussions about DEX regulation, but at this stage the discussions haven’t developed as quickly as for CEXs.

###### Other types of digital assets  
**Q 1. Does OAX have any plan to do with Security Token Offering (STO) as it is a rising topic of conversation in the blockchain scene?**  
A 1. We’re waiting for clear regulatory guidance in this space. If/when it becomes a reality, an STO is just another digital asset that will be traded as any other digital currency and should fit well into a digital asset trading platform.

## Finance  
###### Utility and liquidity of OAX tokens  
**Q 1. So OAX is now assisting exchange partners to develop the decentralized exchange (DEX) and what’s the use-case of OAX token?**  
A 1. The DEXs utilise OAX gas for the off-chain transactions.

**Q 2. Okay thanks and I wonder if OAX will have Initial Exchange Offering (IEO) like Binance is utilizing its BNB token currently.**  
A 2. It is not something we’ve considered yet. But more importantly, it’s our partner exchanges who would make such decisions on what to offer.

**Q 3. Good day! Tell me, how do I understand other projects that could use your/our innovative technology? Is it expected that this cooperation will influence the rise in the price of the OAX token?**  
A 3. We have released a [Software Development Kit (SDK)](https://www.oax.org/en/testnet-announcement) and are [inviting potential partners](https://medium.com/@OAX_Foundation/oax-dex-software-development-kit-8faba46981d1) to test it. Our innovative Layer 2 technology is being considered by our potential partners as a key building-block to launch a highly efficient and trustless exchange at limited cost. The decentralized exchanges (DEXs) will use OAX tokens to pay gas related to the off-chain transactions. We are considering additional utility for [OAX tokens](https://coinmarketcap.com/currencies/oax/), which we would communicate on as we get closer to our main release. In addition, our partners will list OAX tokens on their platforms, providing even more liquidity.

**Q 4. Has OAX any plans to be listed on more exchanges?**  
A 4. We’re currently listed on [4 main exchanges](https://coinmarketcap.com/currencies/oax/). Every week we get requests from new exchanges to list our token. If we see a legitimate need to list on more, we will do so.  
FYI, exchanges charge a listing fee to have your coin listed. Until the trading volumes across the market pick up, there’s little incentive (or need) for us to list on an exchange when/if the volume is low.

**Q 5. What are your thoughts on 2019 and the overall trend of cryptocurrency markets? What do you think will be the major focus, changes, or advancements of the industry at large?**  
A 5. Carlota Perez describes [the phases that many technological revolutions](https://en.wikipedia.org/wiki/Technological_Revolutions_and_Financial_Capital) go through (it bears resemblance to the [Hype Cycle](https://en.wikipedia.org/wiki/Hype_cycle)). I believe we are in the “Synergy” and/or “Trough of Disillusionment” phase where the market players are utilizing the investment capital can poured into the market from the earlier phases, to build out the infrastructure required for Blockchain technology to really take off.  
Infrastructure players will build on blockchains to put the necessary pieces in place before you see unicorns arise in this space. It’s very similar to what the Internet went through during the dot com era, and then, it wasn’t until years later that we had FANG (i.e. Facebook, Amazon, Netflix, Google) taking their place among the largest companies (in market cap) in the world.

##### Financial health  
**Q 1. As a non-profit organization, how does OAX’s team intend to sustain itself in the long-term future? Do you have a revenue model?**  
A 1. The non-profit nature of the OAX Foundation doesn’t stop us from pursuing revenue-producing projects. Instead, it helps us to demonstrate our intentions to the community and that our focus is on promoting and developing greater decentralization in the digital asset market.

**Q 2. Hi, are you able to give us any reassurance on the financial position of the company?**  
A 2. Our financial position remains solid and we have been cautious in spending since last year. We will continue to deploy our funding wisely on product development.

**Q 3. The largest decentralized exchange (DEX) is IDEX so far and I don’t see any other DEXs coming anytime soon. Does OAX have enough funding to promote DEX in this bear market?**   
A 3. Our financial position remains solid and we have been cautious in spending since last year. We will continue to deploy our funding wisely on product development.

**Q 4. Hi, I’m a long-time supporter of OAX and I think you guys are doing very well! I just have a question related to the financial situation: Considering the bear market that has now lasted for some time, and the fact it might continue to be so for even longer; how is the company doing in terms of funding to be able to keep up the development of the product and introduce new partnerships for years to come?**  
A 4. Our financial position remains solid and we have been cautious in spending since last year. We will continue to deploy our funding wisely on product development.

## Business Development  
###### Competitors  
**Q 1. Now that Binance has a decentralized exchange (DEX) platform, is the OAX project threatened?**  
A 1. Of course not. The market can sustain more than one platform; more choices are better for the consumer. Binance has a central exchange, it hasn’t threatened all the other exchanges out there.  
Our DEX provides breakthrough performance without having to use a privately owned, centralized chain.

###### Partnerships  
**Q 1. Has there been any early feedback from potential partners?**  
A 1. We are currently in discussion with a large number of potential partners, mainly exchanges and digital asset wallet providers, but also DApps (e.g. gaming/gambling) and other service providers. Although these discussions are under NDAs, we can mention that many potential partners contacted so far are interested in our high-performance Layer 2 solution and its revolutionary design as it doesn’t have the same collateral requirements than existing solutions, hence reducing their operating costs significantly. The current focus is on testing our Layer 2 and defining future requirements. We are currently building long-term strategic partnerships and early feedbacks received so far are encouraging.

**Q 2. I’ve been following the communities and it would seem the project has evolved and changed quite a lot from the Whitepaper during the Initial Token Offering (ITO), the biggest being the shift to have a partner run the exchange instead — are there more concrete plans from the team on obtaining more exchange partnerships?**  
A 2. Change is necessary for survival for everything in life. The market has changed (from bull to bear) and as regulators take more notice to this space, regulations are also changing. The Foundation feels that, given the circumstances, it was better to focus on the technology for the time being.

**Q 3. Any tentative projects that would list on OAX’s future platform with your partners so far? Do you have a list?**  
A 3. As OAX is a tech provider, we are looking for partners to operate a decentralized exchange (DEX) based on our innovative Layer 2 solution. We are currently in discussion with a large number of potential partners, mainly exchanges and digital asset wallet providers but also DApps (e.g. gaming / gambling) and other service providers. As these discussions are under NDAs, we cannot share a list at this stage but we have good traction. We will unveil strategic partnerships as we get closer to our main release and beyond.

**Q 4. “As mentioned when we announced the testnet deployment, we’re now working to find potential industry partners to operate the finished platform. At the same time, we’re still very much committed to our end-goal, which is to bring digital asset trading to the mainstream!” What do you mean by “find potential industry partners?” Can you guys explain more on that?**  
A 4. It means that we’re open to working with other companies who would want to use our technology. For example, maybe a traditional cryptocurrency exchange wants to offer their customers the additional security of a decentralized exchange (DEX) but they don’t have the resources or time to develop one themselves. They can work with us and we’d provide them the technology to run a DEX.  
That’s just one example. Cryptocurrency wallets, Anti-Money Laundering/Know Your Customer (AML/KYC) providers, transaction monitoring, trade surveillance are examples of the types of business can become “potential partners”.

**Q 5. I feel like most decentralized exchanges (DEXs) in general are a mess, are you planning to team up with other DEXs for marketing and to educate the token holders? And which country does the team prioritize for now since I saw the team went to JP, KA, HK, and CH as well.**  
A 5. Interesting question. Teaming up with other DEXs would do the market good, but it’s difficult when each project has competing product/interests. If you see our recent article ([What is Decentralization?](https://medium.com/@OAX_Foundation/what-is-decentralization-85a0fc993b5b)), it becomes apparent that every project can approach it in a different manner. How do you market that collectively?  
Decentralization sees no borders. We visited those countries because of conferences or business meetings. We have no agenda for which countries we’re targeting (minus sanctioned countries of course). Having said that, we do have to use discretion and be financially responsible by taking costs into account.

## Marketing  
###### Strategy  
**Q 1. What are your plans for marketing OAX when it goes live?**  
A 1. Going live implies that someone has approached us and wishes to use our technology. When that happens, we’ll make all the standard press releases and announcements across our social media channels when the agreements are formally signed. Then we’ll do the same for when it actually goes live as it’s in our interest to help that client promote the platform and technology.

**Q 2. Hi, is there any plan for your marketing plans and budget for this year? Are there any changes in your marketing push and directives after the exchange platform is completed? Hope there are more people knowing about OAX.**  
A 2. At the moment our marketing and branding initiative focuses on two fronts: one is helping our business development team draw potential partners, and the other is promoting decentralization and bringing digital asset trading to the mainstream. We will work with future exchange and other partners to come up with the appropriate strategy after the platform is launched.  
As with our other expenses, we manage our marketing budget prudently and in accordance with the overall direction and strategy of the Foundation.

##### Events  
**Q 1. I see the team traveling a fair bit for conferences and talks — is this the best use of the Initial Token Offering (ITO) funds and are there any specific reasons why OAX is focusing so much on events and conferences from your team’s standpoint? I don’t feel it is the best investment of our contribution to the ITO.**  
A 1. Conferences give us an opportunity to put OAX in the spotlight in order to generate attention for the project in hopes of finding partners. It also provides us with a great opportunity to network with other people within the industry. Networking is crucial for finding partners, learning about new innovations and just building contacts for future possibilities. We love all of you here on Reddit but sometimes face to face interactions are helpful, too!

**Q 2. OAX is based in Hong Kong (HK), right? I see a lot of events that are based in HK. Are there any plans to host your own conference or something like “Blockchain DEX Week”? I think it will raise awareness about decentralized exchange (DEX), most HK-ers do not understand the concept of DEX at all lol**  
A 2. Yes, we are based in Hong Kong. No, we do not have any plans to host our own conference. There are plenty of other conferences that we can leverage on to spread the awareness of decentralized platforms.  
For the local Hong Kong audience, we have already hosted several smaller events. For example, see our [Medium articles](https://medium.com/@OAX_Foundation), we had one just [last week](https://medium.com/@OAX_Foundation/oax-regulatory-breakfast-bridging-the-knowledge-gap-in-a-decentralized-ecosystem-3939790c41cf) with our General Counsel, Paul Li, and the University of Hong Kong (HKU). We have just committed to working with the Hong Kong Federation of Trade Unions (HKFTU) on their upcoming Blockchain Foundation course. Enuma are also very active in the local [Meetup.com](https://www.meetup.com) events.

## Airdrops and bounties  
**Q 1. Are you planning more airdrops in the future?**  
A 1. The intention of the airdrop was to reward token “hodlers” (Hold on for Dear Lifers) for their commitment to the project. We thank you for your support as always but at this time, we do not have any tentative plans to do another airdrop.  

**Q 2. The project ran almost 1 year bounty after successful Initial Token Offering (ITO). Is there any chance/possibility that there will be a continued bounty program? The first bounty was to popularize the project as it is. Maybe it’s time to get one more for people to focus on the decentralized exchange (DEX) platform.**  
A 2. There is definitely a greater than zero chance that we have another bounty program in the future. If we did, it’d probably be in the form of a bug bounty to encourage developers and partners to find bugs in our DEX.

## Team  
**Q 1. How many people are currently working in your company? Are you planning to increase numbers?**  
A 1. We currently employ approximately 14 people. At the moment, there are no plans to increase beyond that, but it could change if we started working with clients/partners to integrate our technology with theirs.

**Q 2. What kind of hair product does Paul use? 😍**  
A 2. Paul likes to support local businesses and uses pomade from the HK-based company Cheung Leung Kee — [https://www.cheungleungkee.com/]( https://www.cheungleungkee.com/)  
That concludes our AMA. Thank you so much again for everyone who participated! For the original announcement regarding the AMA and the participation rules, please read [here](https://medium.com/@OAX_Foundation/oax-foundation-and-enuma-technologies-to-host-ama-on-reddit-8bafa0dd5b10).

---

**Got a Question?**  
**Want to know the latest from OAX Foundation?**  

**More about OAX Foundation**  
[www.oax.org](https://www.oax.org)  
[Medium](https://medium.com/@OAX_Foundation)  

**Reach out to OAX Foundation via e-mail:**  
Collaboration Proposals: [ProjectStallman@oax.org](mailto:ProjectStallman@oax.org)  
Other Inquiries: [Info@oax.org](mailto:Info@oax.org)  

**Social Media:**  
[Discord](https://discordapp.com/invite/ZH5YHkb)  
[Youtube](https://bit.ly/2Bvsk73)  
[Twitter](https://twitter.com/OAX_Foundation)  
[LinkedIn](https://www.linkedin.com/company/oax-foundation/)  
[BitcoinTalk](http://bitcointalk.org/index.php?topic=1943946)  
[Reddit](https://www.reddit.com/r/OpenANX/)  
[Telegram English](https://t.me/openanxteam)  
[Telegram Chinese](https://t.me/oax_cn)  
