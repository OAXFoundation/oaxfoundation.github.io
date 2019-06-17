---
layout: post
author: Lio Lunesu, Cerulean Hu, Tamas Herman and Carl Leung
---

![]({{ site.baseurl }}/img/blog-images/code_dev_update_no3.png)

Happy New Year and welcome back everyone!

While you’ve been resting, we’ve been working hard over here. In the past few weeks, the OAX Devteam has been steadily pushing forward to the new code updates on our repositories over at Gitlab.

Check out our activities:[https://gitlab.com/groups/oax/-/activity](https://gitlab.com/groups/oax/-/activity)

The DevTeam illustrated and migrated the basic KYC logic from the old repo [https://github.com/openanx/KycAmlToken](https://github.com/openanx/KycAmlToken)

Since our last working group meeting, our DevTeam has been focused heavily on working with our KYC process and mint/burn, amongst other things. Some of the work has now been outlined in the latest gitlab updates.

“ ‘KYC interoperability’ would allow participating gateways to share data with user consent with other gateways as long as the regulatory environment allowed for it. We want to bring usability, but protecting consumers online is a key part of the OAX philosophy.”

Now, the team have updated the logic cross diagram to outline what that process would look like from a code perspective.

![]({{ site.baseurl }}/img/blog-images/code_dev_update_no3-2.png)

_The updated KYC logic cross diagram_ 

The team have also finished migration from the Truffle framework and started integrating basic KYC constraints and daily operational limits. If you can recall our last technical update outlined some of the thinking, now we can see what this looks like from a code execution standpoint. 

![]({{ site.baseurl }}/img/blog-images/code_dev_update_no3-3.png)

_Current state of Smart Contract tests_ 

The ability to mint/burn new ERC-20 tokens is a crucial part of the OAX Platform, as it allows gateways to issue their own tokens onto the Ethereum blockchain to represent other assets, such as BTC, fiat, or any other digital token. This allows a wide array of assets to move through the OAX ecosystem and order books (building liquidity and volume) and gives us the basis of the credit risk market discussed in detail in the OAX white paper. You can refresh your memory here.

With this [piece](https://drive.google.com/viewerng/viewer?url=https://www.openanx.org/en/assets/whitepaper/openANX_White_Paper_ENU.pdf), it allows the guys to get to work building out a reference implementation of an asset gateway that can support the decentralized exchange platform from Day Zero, which will be a huge difference from other DEX projects when OAX goes live. 

As things are starting to heat up over here, it's likely we will have another Dev Update before the end of the month. Get ready, this is getting exciting! 

Don't forget to keep up to date on what's happening by following us on social media. 

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