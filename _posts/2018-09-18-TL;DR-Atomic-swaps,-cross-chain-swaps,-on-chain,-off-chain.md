---
layout: post
author: Wayland Chan, Technology Director, OAX Foundation
---
![]({{ site.baseurl }}/img/blog-images/tech_terms_swaps_chains.jpeg)

Like any specialized industry, the world of cryptocurrency trading is full of jargon and acronyms. At OAX, while we try to make our communications as easy to understand as possible, there are times when you just can’t avoid technical terms. That’s particularly the case when we’re giving technology updates. As we’ve entered a new phase for the project, I thought it would be helpful to define a few of the terms most relevant to the project and give some examples of how they’re used.

##### Atomic Swap AKA Cross Chain Swaps
The exchange of one cryptocurrency for another without the need for a trusted third party (such as an exchange). This is facilitated by a hash time locked smart contract (HLTC). The hash time lock puts an expiration on the transaction so that both obligations are met fully or the swap doesn’t happen at all. Both coins must support the same hashing algorithm and HLTC.

ELI5 — I agree to trade you my 1 BTC for your 24 ETH. We agree to send our coins to the contract by a certain time. If either of us doesn’t send our coins to the contract within the specified time frame, the coins get returned to the original owner. If both of us successfully sent our coins (before the spec. time), the contract will send you my BTC and I’ll receive your ETH.

Notice there’s no mention of on/off chain. That’s because this is the catch-all term for swaps. On and Off chain are simply different implementations of an atomic swap.

##### On Chain Swap
This is an atomic swap transaction that happens directly on the respective blockchains of each coin. These transactions will be slower because it requires blocks to be mined on each chain. Not suitable for most users exchanging coins. More suitable for larger OTC type transactions.

ELI5 — I agree to trade you my 1 BTC for your 24ETH. As before, we both send our coins the contract. The contract writes the corresponding transactions to each respective blockchain and waits, and waits, and waits for confirmations until both transactions are confirmed. Once both sides are confirmed, the swap is complete.

##### Payment Channels
[Wait Wayland, payment channels weren’t in the title or on the agenda!] I know, but we need to understand what payment channels are in order to make sense of “off chain transactions”.

Payment channels allow for multiple, faster, cheaper transactions between parties because each transaction doesn’t need to be written to the blockchain; only the net result of multiple transactions.

ELI5 — You and I agree to create a payment channel between us to settle our wager; whoever cusses, pays the other person $5. We each send $200 to a smart contract. Each time someone cusses, $5 is subtracted from their balance and added to the other. Once we’ve both decided to end this silly game, we tell the contract to stop and then the resulting balance is settled by writing one final transaction to the blockchain. The advantage being that if we cussed back and forth for 100 times, we didn’t need to write 100 transactions to the ledger and pay 100x fees.

##### Off Chain Swap
Off chain swaps are simply atomic swaps that use payment channels.

##### OAX
As you know, at OAX, we’re working on building a decentralized exchange platform (DEX). The DEX marketplace is highly competitive and the biggest hurdle to true decentralization of exchanges is performance. Many initiatives are currently being worked on to increase the performance of blockchains. One area that we’re presently working on are off chain atomic swaps using payment channels. Being able to reliably and efficiently perform off chain atomic swaps will be a huge breakthrough to allow users to trade in a decentralized manner.

To learn more about OAX Foundation and our decentralized exchange platform (DEX), and how it can help you and your project, please get in touch with us at [info@oax.org](mailto:info@oax.org) or follow us on any of our social media channels.

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