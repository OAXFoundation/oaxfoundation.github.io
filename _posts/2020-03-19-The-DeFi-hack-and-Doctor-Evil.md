---
layout: post
author: OAX Foundation
---

![]({{ site.baseurl }}/img/blog-images/OAX-Defi-Hack.jpeg)

<b>The DeFi ‘hack’ and Doctor Evil</b>

We’ve seen a huge amount of commentary and speculation about the recent DeFi ‘hack’ carried out by anonymous perpetrators using flash loans to net up to $1 million on a fluctuation in the value of ETH traded on-exchange. While we don’t agree that this spells the end of DeFi, it has pointed out a few areas of DeFi that require greater attention from those of us working on developing this promising area of blockchain-enabled financial services.  

But first, what are flash loans?  The idea arrived in 2018 from Marble Protocol who created a zero-risk loan enabled by an atomic contract. Most DeFi products rely on the trader or transactor having a pool of assets – coins or tokens – locked up in a dedicated protocol to be used as collateral.  Normally they can borrow up to three-quarters of the deposit’s value; as the value of the deposit rises, so does the amount they can borrow against it.  

But with flash loans, the loan and its repayment are baked into a single smart contract. Not only does this near-instantaneous process effectively eliminate the risk of the borrower defaulting – if they can’t repay the loan, the whole transaction is reversed to the start-point and no funds have been risked, due to the atomicity of smart contracts.  

The recent controversial ‘hack’ demonstrated one way the borrower could benefit: the attackers took out a flash loan from margin trading protocol bZx and, as part of the same programme, used the funds to buy Ethereum (ETH) quoted on an exchange. Because bZx drew its pricing from a single pricing oracle, the attackers managed to pump the price, take advantage of the inflated market rate, then payout the uncollateralized loan while pocketing the profits. 

All this happened instantaneously in a single transaction, specifically designed to both create and exploit the conditions that would profit the borrowers.  

This is very similar to a controversial trade carried out in the traditional financial markets years ago. In August 2004, Citigroup’s traders executed an infamous programme trade on the European Government Bond trading platform EuroMTS, which they dubbed ‘Doctor Evil’.  The trade took advantage of liquidity differentials between German government bond (Bund) futures and cash bonds traded on EuroMTS. Banks using the system were required to post constant two-way quotes, which they did giving favourable pricing in the hopes of winning lucrative sovereign issuance business. Citigroup sold $11bn cash bonds in less than two minutes and bought back $4bn of the bonds 30 minutes later after prices fell, profiting to the tune of about $17m. 

Leaving aside the regulatory issues Citi encountered (not to mention the condemnation of other banks and governments), this trade shows how far we have come.  With flash loans, there’s no need to commit $11bn of capital to the trade and or to wait half an hour to close it out and net the profits.  In addition, as we’ve just seen, flash loan transactors are anonymous and don’t catch the flak that follows an audacious raid of this kind.  

As with ‘Dr Evil’, this raid isn’t a hack – it leverages the system as it has been designed to work. Using bZx, the scammers took advantage of near-instant execution speeds that come with smart contracts on the blockchain. They found a loophole in a blockchain feature that was designed that way.  Throwing out DeFi on this basis is over-hasty – smart contracts and flash loans are actually still good, but developers and service providers need to figure out how to close the loophole and improve the overall DeFi infrastructure.  

One fix exchanges can introduce that was mentioned at the beginning of this article, could include using more than one pricing oracle. Or perhaps a trigger that flags the system when the difference in exchange rates exceeds a certain percentage.  Again, the experiences of more traditional exchanges provide an example: most conventional electronic order books have ‘circuit-breakers’ which suspend trading if prices move more than a certain percentage or beyond a predetermined threshold.  

The bZx trade also points to another familiar condition on crypto exchanges: low liquidity.  In any low-liquidity situation, a large buy or sell order will take out so many orders that the price will move against the counterparties. Deeper markets can absorb these hits without the price moving too much, so the profits for a ‘Doctor Evil’ trade would be much less – and the instigator would need very deep pockets if they are to trade in enough size to realise a profit.  A 100% payday like the DeFi raiders gained wouldn’t be possible.  

DeFi is still maturing.  With maturity comes liquidity, with all the benefits it brings; such markets are less likely to attract fraudsters and innovations like atomic contracts and flash loans can be used for more beneficial purposes, in line with the original intentions that drove blockchain’s pioneers.  
