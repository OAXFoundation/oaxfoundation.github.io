---
layout: post
author: Liam Bussell, Head of Marketing; Tamas Herman, Core Developer; Geoffrey Tipton, Core Developer; Lio Lunesu, Technology Advisory; Sawyer Zhang, Development
---
### OAX Dev AMA #1 — Project Discussion “Roadmap and Development”

##### Liam Bussell, Head of Marketing

##### Tamas Herman, Core Developer

##### Geoffrey Tipton, Core Developer

##### Lio Lunesu, Technology Advisory

##### Sawyer Zhang, Development
---

###### How how do you plan on getting kyc tokens across different regions?

**Liam:**

So, the key part is as it was discussed in the roadmap that Hugh wrote. We have 3 streams, one of those is legal. The key part is to recruit members with some Asset Gateways from those regions to start (so we have good geographical coverage)

And second is to engage with legal teams in those areas (prioritized based on users and interest from users)

For example, we have been speaking to potential members of the Working Group. One of the key areas they are interested in is the Foundation supporting them to provide legal support in a particular area (region) to understand how they would deploy a USD token for their exchange

###### Like if only America agrees your coin is kyc compliant what will you do?

**Lio:**

Our plan was that tokenized fiat is specific to a particular asset gateway, which itself is tied to one region.

###### So like a USD region a Yen region and a euro dollar region?

**Lio:**

It’s the asset gateway that tokenizes your fiat.

So exchange ABC will have a token for USD, for EUR, for AUD, and they will either do their own KYC or use a provider. They will isssue those tokens for the markets they are compliant for. It’s the asset gateway that tokenizes your fiat.

Then exchanges in other regions (different from the asset gateway) get to check the token’s KYC and decide whether it’s OK to trade in the exchange region

**Tamas:**

So the region of the asset gateway would determine the set of KYC providers

And the fiat would be represented as USD-form-gateway-A

###### I see so far, if I am correct we only got like 3 developers, It kinda makes me worry tbh. Will you guys expand the Crew?

**Liam:**

This ties back to the roadmap again. Hugh covered this in detail. If we brought on 50 ppl at the same time, the confusion would be pretty extreme. Tamas can probably give some input on what he is doing no, but the first part is to map out all the overarching pieces that need to be done and then we can break those do and work on them into parallel

**Tamas:**

That was my experience too with even smaller teams. In this particular case we are even more constrained by the pool of available experts, so we have to choose carefully
We definitely want to launch early, BUT that’s a balancing act against releasing something secure and extensible.
I think this [article](https://blog.zeppelin.solutions/introducing-zeppelinos-the-operating-system-for-smart-contract-applications-82b042514aa8) summarizes the challenges very well.

**Lio:**

We are already expanding the team. We’ll have one more dev in 1 week (already picked)

**Liam:**

Please do check out our roadmap, once we have the components scoped out, we will be ramping up. We have a few guys (Franco, Cerulean, Henry) at ANX who could potentially jump over to do some work, but not yet

“The real trouble with using a lot of mediocre programmers instead of a couple of good ones is that no matter how long they work, they never produce something as good as what the great programmers can produce. Five Antonio Salieris won’t produce Mozart’s Requiem. Ever. Not if they work for 100 years.”

[https://www.joelonsoftware.com/2005/07/25/hitting-the-high-notes/](https://www.joelonsoftware.com/2005/07/25/hitting-the-high-notes/)

###### Oh another one, I know you guys have talked about it but wanna be sure, is there any refund due to the Regulation of China?

**Tamas:**

We are waiting for the follow-up from China and we aim to be compliant with them

**Liam:**

As Tamas said, we are keeping an eye on the regulations as they develop not only in China but also in Korea and other markets. At this stage we don’t believe we are required to do a refund, so we are focused on delivering value to the project

###### Hi does your organization plan to profit off of your future Dex or is your profitability based on your ICO raise only?

There will certainly be some fees associated with the use of the platform.

In the case of centralized exchanges, Hugh could tell you from experience that in general the onboarding cost of a single client is between $30-$50 USD, we think we can do it significantly cheaper than that

We think when someone comes onboard as an “Anchor client” Asset Gateway they will likely provide access to their members for free

So, all these fees, and listing fees for new tokens (ICO or otherwise) will be paid in OAX

###### What types of cryptos do you plan on hosting on the OAX platform?

**Liam:**

So, we want to be pretty diverse. But we also want to not list dodgy coins, or bad actors. Fees to list will be paid in OAX and we will also do a background check dodgy. The priority for us is to open with Asset Gateways and payment channels in place. Usability from day 1.

**Lio:**

Offering a transparent way to get fiat in and out of crypto is the highest priority

###### Have you been in the talks with any coin leaders about using their coin on their platform in the future? (You don’t have to list names) how will you plan on reaching out?For example, if you wanted ant shares on your platform how would you reach out and advertise yourself to the antshare community? Not a lot of people know about OAX.

**Liam:**

That’s a good question. At the moment, we are all systems go on 3 things:
1) Dev
2) Recruiting members for the Working Group (who will be the first round of asset gateways)
3) expanding info about the project into new markets (Brazil, Vietnam, Russia, Argentina)

We will definitely get to approaching coins, but we have not done so at this stage formally. When we launched the sale, we simply didnt have good partners in Latin America, Vietnam, and other makrets, we are now actively doing some promotion there to increase interest in the project. Also, trying to understand what are the specific challenges for users in each market we are in is key

**Tamas:**

I’m not sure about the other coins but a lot of the work is being invested into talking to KYC providers and current exchanges

###### What types of ways do you plan on getting fiat in your coins? Direct deposit, bank wires, credit cards etc…

**Liam:**

Actually, for us, cash/fiat is much of the ballgame.

We are looking at having close to 50% of our Working Group and early gateways as payment providers, and we also want to try to get some good geographical coverage. 

As an example, I can reveal on of the Working Group members is a company that allows bill payment with crypto in one market, we’d like to help him expand that option across a few markets.

We are also talking to some KYC providers, who are keen to get involved, and a couple of payments providers, from small multi-market payments guys to bigger, E-Commerce guys

We think robustness and redundancy is key. SO, not just one method.

###### Can you tell us where you are in development?

**Tamas:**

We are establishing the project structure at the moment
We are keeping a detailed journal about the areas we are looking into:
[https://www.notion.so/oax/Journals-a1c1a14d8aa84fceb648a33ad8211791](https://www.notion.so/oax/Journals-a1c1a14d8aa84fceb648a33ad8211791)

You can expect to see a sequence of functionality starting with very simple scenarios

**Geoffrey:**

We have also Identified Tangibles from the white paper.

**Tamas:**

My plan for today and friday specifically to get some truffle tests for the various DAO contracts on the [https://ethereum.org/dao](https://ethereum.org/dao) page

**Lio:**

Tamas, you can link to your PR? (edited)

**Tamas Herman:**

[https://github.com/ethereum/ethereum-org/pull/693](https://github.com/ethereum/ethereum-org/pull/693)

I just got this PR accepted a few days ago and talked to the guy on gitter a few hours ago too how to go about integrating some tests

This should be the basis for future conversations around the governance of the platform

Primarily how OAX token holders can agree on contract upgrades (be it a security fix or a new features)

but it will also be used to vote for adding / removing KYC providers and dispute referees

also here is the [link](https://gitter.im/ethereum/tutorials?at=59d3c6cff7299e8f53a3490e) to the conversation about the automated tests for the dao examples.

###### And what are you guys working on recently? working Group?

**Sawyer:**

We are particularly working on KYC which will be a transparent legal framework and needs a solid foundation in terms of Business Process, Nature of Relationships, so we need to work out that part first

Then the code is just a reflection of real word process, which will be faster only when we get KYC part done.

###### What will you do with the unsold tokens from the 2nd ICO

**Liam:**

Honestly, nothing has been confirmed yet. The reason for this is that the tokens are locked in the smart contract until the time period of the second sale anyway (Q2 2018)

We won’t be keeping them. There’s 3 options basically:

burn, airdrop or push second sale until 2019 when the platform is live

We thought a lot about how it would look if we announced any of these things while price was fluctuating, and we weren’t sure it would look good for the project, so as we were unsure, we waited. (edited)

We don’t like reacting to the market, we prefer to focus on the project

When will be the next scheduled Github update?

**Lio:**

@onetom’s PR to ethereum.org got merged.

Just to show that it’s not just the “openANX” repo we’re active in

But we’ll be expanding on our PoC KYC contracts soon

**Liam:**

Can you expand on that maybe a little Lio?

In terms of the PoC, what it is and how your aiming to expand it?

**Tamas:**

by creating some example scenarios which anyone can run for themselves at home on a temporary chain

but to specifically answer the *schedule* part in your question:

we are going to release code as we develop, but first we are making experiments regarding how to structure it the best

as part of the rebranding exercise we have also reserved [this GitLAB project name](https://gitlab.com/oax).

you can see the current [https://oax.org/en](https://oax.org/en) website source code there (done by @sawyerzhang) — oax.org

worth mentioning the PR and the related chat here too:

[https://github.com/ethereum/ethereum-org/pull/693](https://github.com/ethereum/ethereum-org/pull/693)

[https://gitter.im/ethereum/tutorials?at=59d3c6cff7299e8f53a3490e](https://gitter.im/ethereum/tutorials?at=59d3c6cff7299e8f53a3490e)

###### Is the blockchain code that runs the decentralized exchange to do asset gateways and fiatswap separate from the oax block chain?**

**Lio:**

Initially we’ll develop everything on Ethereum

We do plan to look into other ways for trading. The whitepaper mentions state channels, and it’s a very active domain in blockchain land.

###### How do you plan on marketing this coin/regaining confidence in oax? After the price dump a lot of people fled fled from your platform how do you plan on getting people interested? I know you plan on doing that with a working product but will oax be undermarketed for the next 8 months?

**Liam:**

Ooh, tough one for me to finish.

Basically, I think that in retrospect, Binance listing as it did didn’t do us any favors. The inflated rise and the China market stuff afterward impact how people felt about the token, but not really how they felt about the project.

The first round of backers in a new space are always speculators, with the value investors coming later. We think that by working hard on the project, hitting the milestones and showing that we are serious and not just some vapourware is the first step. We are also rebranding!

That’s the first part

Second part is that to show that we are not just some project of ANX’s, we have removed their name from the project. We are now just OAX

We will be doing a lot in the next few months

The dev’s are in Devcon next month, the project team will be in Moscow, we will be promoting in Latin America and other markets

###### Will you support different chains. such as eth, waves, bitcoin, neo..

**Tamas:**

I don’t think we will look into it until we have substantial functionality implemented on Ethereum first

But we most likely join efforts with many other prominent projects via the [https://blog.zeppelin.solutions/zeppelinos/home](https://blog.zeppelin.solutions/zeppelinos/home)initiative which does have cross-chain support on their roadmap too

###### Is it possible to operate in mainland China in 2018?

**Tamas:**

That’s a definite maybe at the moment as me, a software developer understands it, but I might be corrected :)

**Geoffrey:**

I believe this will be determined by a local Gateway, as the platform its self doesn't care about location.

###### Can you explain your relationship with 0x?

**Tamas:**

`0x` will be one of the pieces of the architecture

**Lio:**

They are advising and we continue to talk to them. We plan on supporting exchanges that use the 0x protocol to trade assets.

###### Any plans on coin listing, bittrex polo?

**Liam:**

Hi. We have a pretty strict policy of not commenting on secondary markets, we prefer to stay focused on the project. But as we talk to exchanges about the Working Group, if listing comes up, then we will discuss it

**Tamas:**

just like the primary purpose of Ether was to fuel smart contract execution, not to be traded as a currency (hence being considered as a security at the end), the primary purpose of the OAX token is to represent voting weight in the network of asset gateways using the OAX platform

**Finish**

**Liam:**

I will just expand on that last point I made above to finish

You may have noticed that on CoinMarketCap, on most of our social media and on the new version of the website that will go up Friday that we have rebranded ourselves as O-A-X, not openANX

This is because we have received some feedback from potential partners and the community that if we aim to be open, transparent and open source, having the name of an existing exchange may not be the wisest course.

So, going forward, the ticker and coin name is OAX (pronounced either as O-A-X, or like the tree…Oak, but with an “X” same coin, better name

I’d like to thank everyone for coming and asking questions, we really appreciate the support and hope the info provided cleared up any questions. We will likely do AMA #2 in a more public forum, like r/cryptocurrency on reddit in a week or two when Hugh is back

Also, we want to reach out to the community and ask that if there are any DEVELOPERS who wish to get involved in the project either in advisory or working capacity, reach out to @onetom @maverik or @hugh or @lio

Thanks EVERYONE!

Liam Bussell — [https://www.linkedin.com/in/liam-bussell-a9160618/](https://www.linkedin.com/in/liam-bussell-a9160618/)

Tamas Herman — [https://www.linkedin.com/in/onetom/](https://www.linkedin.com/in/onetom/)

Lio Lunesu — [https://www.linkedin.com/in/lionellolunesu/](https://www.linkedin.com/in/lionellolunesu/)

Sawyer Zhang — [https://twitter.com/sawyerzhang](https://twitter.com/sawyerzhang)

Geoffrey Tipton —

Приглашение на Slack:
[https://join.slack.com/t/openanx/shared_invite/enQtMjQyMTYzNTU0MjE0LTI3ODc1YzlhZTM1MWFmZDA0MzMxOGI5ODg4NjRmY2RmNjAwMmUwYTA4YzExZGU0NWFjYjU0MTEzYTI0N2YwMmE](https://join.slack.com/t/openanx/shared_invite/enQtMjQyMTYzNTU0MjE0LTI3ODc1YzlhZTM1MWFmZDA0MzMxOGI5ODg4NjRmY2RmNjAwMmUwYTA4YzExZGU0NWFjYjU0MTEzYTI0N2YwMmE)