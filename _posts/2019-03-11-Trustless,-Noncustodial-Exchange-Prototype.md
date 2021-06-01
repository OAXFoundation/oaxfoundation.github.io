---
layout: post
author: OAX Foundation
image: /img/blog-images/trustless_noncustodial_exchange_prototype.jpeg
tag: tech-developments
---
![]({{ site.baseurl }}/img/blog-images/trustless_noncustodial_exchange_prototype.jpeg)

_The OAX platform has been in [testnet environment](https://www.oax.org/en/testnet-announcement) for about a month now and our technology team [has been busy putting it through its paces](https://medium.com/@OAX_Foundation/oax-dex-software-development-kit-8faba46981d1). The purpose of this blog post is to help the community understand more about the technology behind it, and explain how we’ve gone about solving the challenges associated with [decentralization](https://medium.com/@OAX_Foundation/what-is-decentralization-85a0fc993b5b). It outlines the evolution our thinking has taken as we’ve experimented to find the best solution to create a [fast, scalable and efficient exchange platform](https://bitcoinexchangeguide.com/hong-kong-dex-trading-platform-oax-announces-scaling-protocol-to-spur-mass-user-adoption/). And it describes what we think is the answer, detailing the different aspects of the model currently undergoing testing._

About a month ago the [OAX Foundation](https://www.oax.org/en) and Enuma released a [prototype SDK](https://github.com/OAXFoundation/oax-client) of our trustless exchange prototype. In this post we would like to provide an accessible overview of the technology behind it.

<b> Introduction </b><br> 
Life is full of trade-offs. Blockchains are (or should be) decentralized and trustless. But these qualities come at a cost: blockchains with proof of work are slow and “inefficient” and require large amounts of compute and storage resources to operate.

The increased popularity of blockchain backed cryptocurrencies over the last decade has given rise to many crypto exchanges where clients exchange different cryptocurrencies and fiat money. The vast majority of these exchanges are centralized and custodian. Meaning they store the private cryptographic keys on the users’ behalf giving the exchange complete control over all the assets the users holds on the exchange. The users thus find themselves at the mercy of the exchange’s behavior and security measures; flying straight in the face off what blockchains were made for.

Over the last few years a few decentralized exchanges have been launched to mitigate these problems of trust and custody. Decentralization itself however comes with its own cost. When we set out to build an exchange we initially hoped to build upon payment channel solutions[1](https://blog.enuma.io/update/2019/03/08/trustless-noncustodial-exchange.html#fn:1). Payment channels however typically have high collateral requirements which makes them “expensive” to operate for exchanges if exchanges need to open one or more separate channels with each user.

In turns out however that if we relax the decentralization restriction we can build non-custodial and trustless intermediaries that scale well and have no collateral requirements such as the NOCUST payment hub[2](https://blog.enuma.io/update/2019/03/08/trustless-noncustodial-exchange.html#fn:2) and what’s described here.

<b> Trustless Exchange </b><br>  
On a very high level such a trustless exchange stacks up as follows against traditional centralized exchanges and decentralized exchanges with blockchain settlement.

![]({{ site.baseurl }}/img/blog-images/table_compare_different_solutions.png)

This design allows us to achieve secure and scalable financial intermediary at the expense of decentralization and some convenience. To remain trustless the clients need to come online about once per day to verify their balances and file a dispute if necessary. This periodic verification process could however be outsourced in a trustless fashion (see the PISA paper[3](https://blog.enuma.io/update/2019/03/08/trustless-noncustodial-exchange.html#fn:3)). The OAX Foundation has previously written a [blog post](https://medium.com/@OAX_Foundation/what-is-decentralization-85a0fc993b5b) about the decentralization aspects.

One can think of this kind of system as a single asymmetric payment channel. The operator and all the users participate in the same channel but have different capabilities and obligations.

The timeline is divided into rounds. The operator maintains a ledger with the clients’ balances. Once per round a commitment that reflects the clients’ balances must be published to the blockchain.

The clients must ask the operator for a proof of their balance and verify its correctness. If the operator is cheating, they can file a dispute via a smart contract which — if successful — shuts down the system, reverts the balances to the last known good state and opens the balances up for withdrawal by the clients.

<b> Architecture</b><br>
![]({{ site.baseurl }}/img/blog-images/diagram_of_offchain_and_blockchain.png)

The basic building blocks of such a systems are


1. Mediator Smart Contract

    1. Accepts and stores the roots of the Merkle tree built from a snapshot of the balances. This is referred to as a “commit”.

    2. Mediates disputes between clients and the operator.

2. Operator

    1. A service run by the exchange or payment provider.

    2. Manages the balances of users or orders according to certain rules (that need to be verifiable by the mediator smart contract).

3. Clients

    1. Interact with the operator in good times.

    2. Interact with the Mediator to verify information and lodge disputes if necessary.

<b> Merkle Trees</b><br>
To enforce the protocol, the smart contract requires knowledge of the clients balances but storing those balances on the blockchain would be expensive and scale poorly. This problem is solved with the help of a cryptographic data structure called the [Merkle tree](https://en.wikipedia.org/wiki/Merkle_tree).

A Merkle tree has the interesting property where changing any part of it will result in a completely different Merkle tree root. In the beginning of a round the Operator commits the root of the balance Merkle tree (where each leaf contains the balance of one client) to the blockchain. This aggregates the result of the activities (trading, payments, …) in the previous round.
![]({{ site.baseurl }}/img/blog-images/merkle_tree_diagram.png)

Users in turn can ask the operator for their Merkle proof to verify that their balance is correct and file a dispute with the Mediator smart contract if necessary.

Thanks to the _collision resistant hash functions_ used to build the Merkle tree, committing the root of the tree to the blockchain forces all participants (including the operator) to use this _exact_ tree (and therefore balances) whenever they interact with the mediator smart contract. If the tree was changed in any way, the root would change and the check against the committed value would fail. Each smart contract interaction that requires the balance of a user takes a Merkle proof as function argument to ensure that the provided balance is the same as the one used to built the committed Merkle tree.

This way the balances need not be stored on the blockchain (which would not scale) but the smart contract is nevertheless able to carry out operations that require knowledge of the balance such as dispute and withdrawal handling.

<b> Protocol Outline</b><br> 
1. Operation

    1. Clients deposit assets into the mediator 

    2. The operator manages the balances of he clients according to rules of the application (payments,trading,...) 

2. Security of funds 

    1. Every round the operator commits a root of the Merkle tree, freezing the initial balances for the round.

    2. Clients query the operator for their Merkle proof and use that to verify their balance in the mediator.

    3. If a balance is incorrect, the client opens a dispute via the mediator.

         1. If the operator was honest, they can close the dispute.

         2. If the operator cheated, they’re unable to close the dispute. The system comes to a halt and the balances are rolled back to the last known good state. Users can then withdraw their assets to their wallets.

<b> Trading</b><br>
Inspired by the payment hub from NOCUST we set out to build a trading application. Two desirable requirements for an exchange are
• Funds should not be moved unless an order signed by the client authorizes it.

• If clients go offline their orders remain live.

To implement this we needed to enable the operator to prove via the smart contract that all the swaps they performed on behalf of a user were authorized swaps. In practice this also means we need to prevent a form of offline double spending by the exchange.

On a high level, users sign authorization messages to swap asset quantities and send them to the exchange. The exchange creates “fills” whenever a trade execution takes place. In case of a dispute the client and exchange may send authorization messages and fills, together with Merkle proofs to the mediator smart contract who takes care of arbitrating the dispute.

<b> Integration with existing exchanges</b><br>
Our layer 2 solution can be integrated with existing exchanges. It mainly requires

• Deploying the mediator smart contract.

• Creating the necessary objects and signatures to communicate with the smart contracts 

• Running the operator service 

• Exposing a few API endpoints (such as current balance) to the operator service.

Through this integration any centralized exchange can offer a trustless version of their service while keeping most other aspects of their business (UI, UX, order books, order matching engines, …) unchanged. It’s also worth noting that our solution is orthogonal to the existing exchange technology and won’t significantly affect metrics such as latency or throughput of the order matching engine.

Non-custodial exchanges require less trust among the users than the traditional centralized exchanges. _You hold your keys!_ While our solution doesn’t prevent an exchange from front-running it does provide users with more security in case of security breaches, bugs or malicious behavior on the exchange side. Notably if you don’t have any open orders, your balances cannot be modified at all.

<b> Acknowledgement</b><br> 
Thanks David Leung, Lionello Lunesu, Philippe Camacho and Sunny Cheung for valuable feedback and questions.

<b> Author</b><br>  
[Mathis Antony](https://github.com/sveitser/), Software Design Engineer, Enuma Technologies

<b>Reference</b><br>
1. Miller, Andrew, et al. “Sprites: Payment channels that go faster than lightning.” arXiv preprint arXiv:1702.05812 (2017). [https://arxiv.org/pdf/1702.05812](https://arxiv.org/pdf/1702.05812)
2. Khalil, Rami, and Arthur Gervais. Nocust–a non-custodial 2 nd-layer financial intermediary. Cryptology ePrint Archive, Report 2018/642. [https://eprint.iacr.org/2018/642](https://eprint.iacr.org/2018/642), 2018. 
3. McCorry, Patrick, et al. “Pisa: Arbitration Outsourcing for State Channels.” IACR Cryptology ePrint Archive 2018 (2018): 582. [https://eprint.iacr.org/2018/582](https://eprint.iacr.org/2018/582) 
