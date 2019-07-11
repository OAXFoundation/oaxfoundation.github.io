---
layout: post
author: ByungWoo Sohn
---

As most of you already know, the prototype of the openANX platform isn’t set to be released until Q2 (April — June) of 2018. Still, we’d like to give our users an idea of how to navigate through the platform and what to expect once the platform comes out.

![]({{ site.baseurl }}/img/blog-images/using_oax_platform.png)

We’ll go through the process step-by-step:

1. **Find Asset Gateways:**

    Users will first need to use an asset gateway to on-board fiat currency onto the blockchain. Unlike in Centralized Exchange Models, the openANX platform will utilize multiple Asset Gateways; we will discuss the benefits of this later on. Another key difference in openANX is that gateways will never hold both of the user’s keys. For example, with a fiat gateway, the gateway will only hold onto the fiat currency in a transaction, and the user will retain crypto custody. The vice versa applies for crypto gateways. This significantly reduces user risk, which brings us to our next step.

2. **Assess Risk:**

    This step links back to step 1, as users can assess the risk that an Asset Gateway poses and then choose a gateway accordingly. Each gateway will show the amount of collateral it has locked up along with trading prices. A more in-depth look at this process can be seen in a previous post. With transparent information provided for all gateways, users can make decisions based on their own needs, preferences, and appetite for risk.

3. **Register on Chosen Gateway, File KYC/AML:**

    Similar to the situation in centralized exchanges, the user will need to register through online services specific to each gateway. The KYC procedure can be divided into three types: No KYC requirement, Boundary KYC requirement, and Full KYC requirement. More detailed information is provided in this post. Asset Gateways can determine their own KYC parameters according to their requirements, but will usually require some level of KYC and AML, especially if you are dealing in fiat (cash). To complete the registration, the user will be directed to a KYC/AML service either within the Asset Gateway, or to an external service provider if the Asset Gateway utilizes a third party.

4. **Onboard Fiat to Crypto:**
    
    After KYC/AML approval (if required by the Asset Gateway), the user will use the payment methods supported by the Asset Gateway to deposit funds. After the Asset Gateway takes into custody real world assets such as EUR or USD fiat, it will then mint its own specific (at least partially collateralized) ERC20 tokens onto the blockchain. These tokens are not “generic” USD or EUR tokens. Instead, the tokens will be specific to the issuing gateway; for example, ANX may issue ANXUSD tokens. If you are trading crypto0crypto, you may not have to complete this step.

5. **Trade on openANX Platform:**
    
    The user has the option of trading through a decentralized user interface provided by openANX or trading their freshly minted token directly with any of the available ERC20 decentralized exchanges. The openANX platform is expected to have high liquidity through gateway “Credit Risk” order book aggregation, addressing the liquidity problem of other Decentralized Exchanges. As explained earlier, openANX will use numerous Asset Gateways. It is expected that many new Asset Gateway operators will appear in the market as they have the ability to register their tokens and sponsor their own order books. Aggregating gateway order books will provide significant liquidity into the platform. These “Credit Risk” order books also allow tokens to be traded against each other. For example, Gateway A could specialize in trading Token A, with high levels of collateral. Gateway B could trade Token B, with low levels of collateral. The Token A / Token B order book would allow the two tokens to be traded against the other and form the basis of a credit risk trading market, something that is notably missing from current crypto markets. A detailed explanation of this process can be seen in this post.

6. **Off-board Fiat:**
    
    To off-board tokens back into real world assets, the gateway token holder must redeem the tokens to the Asset Gateway through the openANX user interface. The Asset Gateway will contact the user during the process.

7. **Dispute Resolution:**
    
    A collateralized deposit system is in place to protect users. This collateral can be released as the result of a dispute resolution. A detailed dispute resolution process has not been released yet, but it is expected that a rotating board of dispute referees will monitor disputes and oversee collateral release to plaintiffs. This board of dispute referees do not entail the entire dispute resolution process, and is instead a mechanism through which dispute resolutions can be enacted through the release of collateral on the blockchain.

Hopefully, this step-by-step process has provided an idea of what to expect from a user’s perspective once the openANX platform arrives.

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