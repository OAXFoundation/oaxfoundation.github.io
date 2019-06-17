---
layout: post
author: Lio Lunesu, Cerulean Hu, Tamas and Liam Bussell
---

Continuing on last week’s Dev Update #1, this time we will drill down into the KYC issue. This was a piece of code last week that drove a lot of interest on Social, so I will dive into more detail [here](https://github.com/enumatech/metamask-oauth2).

To be able to integrate effectively with the real world markets (financial services — read — banks) KYC and source of funds are key issues. These days, it is fairly common for Token Sales to do KYC for backers, but the OAX Project did this during our sale, and in fact (I’m checking this) we may have been the 1st sale in the world that did so in line with financial services guidelines and standard policies.

This is one of the reasons we have brought NetKi and TrustedKey into the OAX Working Group, as these guys are experts in the field and are at the cutting edge of where KYC and Blockchain passports. You can learn more about [NetKi](https://netki.com) and [Trusted Key](https://www.trustedkey.com).

To give some context, I’ve outlined much of our thinking below.

Once the platform is up and running, we aim to utilise developments in KYC Passports and eKYC to protect user information. Subsequent to that, we are looking seriously at what we call “KYC interoperability” which is challenging, but would allow participating gateways to share that data with user consent with other gateways as long as the regulatory environment allowed for it. We want to bring usability, but protecting consumers online is a key part of the OAX philosophy.

In essence, users will hold their own KYC details and KYC private keys, and only on user consent will that data be shared with an Asset Gateway. Essentially, if you KYC with one provider, you are in the system, but if you wish to trade with another gateway you will be able to do so securely, ensuring that your data is not stored centrally and is therefore much more secure.

**You hold your own keys.**

If you wish to trade anonymously, you will be able to enter through Asset Gateways that allow anonymous accounts and will be able to trade, however likely you will be dealing with a more restricted set of gateways who focus on that space.

Our development team and our partners have been hard at work shaping policy around this, and it is moving rapidly. This brings us full circle, back to the latest code update by [Enumatech](https://github.com/enumatech/metamask-oauth2).

This is a piece of the of the KYC puzzle. By allowing your blockchain ID to login in common wallet solutions (Like Metamask) we are building out the part of the system that allows for a seamless user experience as you move across the platform and interact with different Asset Gateways. We aim to have a strong “best practice” policy, implemented via the first Gateway in place and operational by early Q2 2018.

Oh, and to those in the community that have been asking, new website goes live by tomorrow!

---

**Got a Question?**

**Want to know the latest from OAX Foundation?**

**More about OAX Foundation**

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

