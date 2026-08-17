---
layout: post
author: OAX Foundation
image: /img/blog-images/OAX-Agentic-Internet-Header.png
tag: industry-business
---

![]({{ site.baseurl }}/img/blog-images/OAX-Agentic-Internet-Header.png)

<br><b>Agent-to-Agent: A New Economic Model for Digital Interactions</b>

AI agents are already part of daily business. Now a new, more complex layer is forming on top: agents talking to other agents, automatically, in the background, and increasingly, across company lines. This is an overview of the excitement happening in this space right now: what's proven, what's still just a promise, and why it needs a new set of lenses to think about.

<b>First, a quick refresher: what is an "AI agent"?</b>

A normal AI chatbot answers your question. An AI agent goes further: it can take actions on its own to finish a task, such as clicking buttons, filling forms, searching the web, writing code, sending emails, or booking things. You give it a goal, and it works through the steps. Most of it today is agents inside one company quietly passing tasks to each other, boring, but already working. 

<b>The catch: cost is going up, and ROI is not clear yet</b>

Companies rushed to add these agents. Spending on AI tools and compute went up fast. Productivity did improve in many cases, agents really do save time on routine work.

![]({{ site.baseurl }}/img/blog-images/OAX-Human-to-Agent-Centric-final.png)

But here is the problem: for many companies, it is still hard to prove the return on investment (ROI). In simple terms, the money and effort spent building and running these agents is not clearly paying itself back yet. Costs are visible and immediate. 

<b>Uber</b> reportedly burned through its entire 2026 AI budget in four months and had to cap agentic coding tool spending at <b>$1,500 per employee per month</b>. The payoff is harder to measure and often smaller than promised. 

<b>What do agent-to-agents remove from our current system?</b>

To understand why this matters, think about what a human normally does in any transaction or workflow: click "approve," compare prices, log in, check a box, wait for the human to reply etc. 

Agent-to-agent systems are removing these human checkpoints. That is what it is "abstracting away," the manual approval and manual coordination steps that used to need a person.

Once you remove those steps, new use cases open up such as <b>agent-to-agent payments</b>: One agent pays another automatically for small pieces of work, for example, paying by the second for computing time, or paying a few cents for one API call. 

Companies like <b>Stripe, Coinbase, OpenAI, Google, and Visa</b> have all built their own version of this kind of payment system in 2026. Early real examples include agents paying to run a web browser session, paying to print and mail a letter, or paying to order food for a person.

This is not just theory: three real examples already in play.
1. <b>Stripe and Tempo's payment rail</b>, with Twilio as an early user. In 2026, Stripe (the major online payments company) and Tempo (a blockchain payment startup) launched a system that lets one AI agent pay another automatically, even tiny amounts, like a fraction of a cent per API call, paid continuously as work happens. 
2. <b>Mastercard, Santander, and PayOS</b> ran a live agent-to-agent payment in Europe. These companies completed what they called Europe's first real, end-to-end payment where an AI agent handled the full transaction on its own, in a controlled test. This matters because it moves the idea from "demo" to "it works with real banks and real money rails." 
3. <b>Browserbase</b> lets agents pay for their own computing sessions. Browserbase runs virtual web browsers that AI agents use to complete tasks online (like filling forms or checking a website). Instead of a company pre-paying for a fixed plan, agents can now pay per session automatically, deciding on their own when they need to spend more. 

Assume there is real benefit here. Then, who pays for it, and does the benefit outweigh the cost? Running millions of tiny agent-to-agent transactions is not free:
- Compute cost: every agent action uses processing power.
- Bandwidth cost: agent traffic on the internet is already larger than human traffic. <b>Cloudflare</b>, a major internet infrastructure company, said machine traffic passed human traffic on its network in May 2026, 18 months earlier than expected.
- Building and monitoring cost: someone has to build the payment systems, plus watch for mistakes or abuse.

![]({{ site.baseurl }}/img/blog-images/OAX-Bot-vs-Human-Traffic.png)

One well-known investor, Michael Burry, publicly asked this exact question: who is actually paying for agents to "talk" to each other at this scale? Right now, no one has a clear public answer.

<b>"Will the agent pick the best payment channel for us?" Best for whom?</b>

This is the question that seems to get asked the most, and the honest answer is uncomfortable.

Payment choice stops being a <b>user experience</b> decision and becomes an <b>algorithmic</b> one. Accenture's framing is that agents will route payments toward the most cost-effective or most rewarding option based on shopper and merchant preferences, optimising method selection autonomously. Edgar, Dunn & Company put it more starkly: the agent now arrives at the merchant with a product and a payment method already chosen. The consumer may never see, or care, whether the transaction settled via card, account-to-account transfer or a tokenised balance.

Here is the part that deserves more attention. "Best" is not a neutral word. An agent optimises for whatever objective it was configured with, and the party who configured it is not necessarily you.
- The consumer assumes their agent is minimising cost.
- A merchant's agent is protecting margin.
- The platform hosting the agent has its own take rate.

None of these parties currently has to disclose which objective is running. That is a placement and incentive problem wearing the costume of a routing feature. It is the same trust and control gap that shows up everywhere else in this stack, just applied to money.
For decades, payment brands competed for visibility at checkout. If the agent chooses and the human never looks, that visibility is worth very little, and the competition moves upstream into the orchestration layer where the objective function actually lives.

<b>What the numbers actually show</b>

Ask for statistics on agentic payments and you will be handed forecasts. <b>Juniper Research</b> puts total agentic commerce transaction value at roughly <b>$8 billion in 2026</b> and projects <b>$3.5 trillion by 2031</b>. Accenture estimates more than 30% of online commerce could run through agents by 2030, close to $3.1 trillion.

![]({{ site.baseurl }}/img/blog-images/OAX-Agentic-Juniper.png)

Treat these carefully. The measurement infrastructure for this barely exists. Most estimates are extrapolated from indirect signals rather than observed transaction data, in part because payment rails do not currently distinguish an agent-initiated transaction from a human one. When the pipes cannot tell the difference, nobody can credibly report the volume.

The smaller, observed numbers are more useful, because they show the gap between the narrative and reality:
- A Payments Association survey found 58% of UK online merchants believe agents have already reached their platforms, while only about 3% of transactions actually involve one.
- AI use in commerce clusters at the front of the funnel: roughly 62% for product comparison, 23% at checkout, 19% post-purchase.
- Only 16% of US consumers currently trust and use AI to make payments on their behalf.
- 87% of CTOs and heads of payments at financial institutions name trust as the single biggest barrier to agentic payment adoption.

Read those together and the picture is consistent: Discovery has already been handed to agents. Authority over money has not.

<b>Our view on adoption: two curves, not one</b>

The mistake is talking about "agentic payment adoption" as one trend. There are two, moving at very different speeds.

<b>Agent-assisted discovery is already mainstream</b>. People are comfortable letting an agent research, compare and shortlist. That curve is steep and will keep climbing.

<b>Agent-authorised payment is not, and the blocker is not technology</b>. The rails work. Stripe, Visa, Mastercard, Coinbase and Google have all shipped versions. The blocker is liability. Nobody has settled who absorbs the loss when an agent buys the wrong thing, buys at the wrong price, or is manipulated into buying at all. Until that question has a clear legal answer, most agent-to-agent payment stays inside a single company's walls, where liability never crosses an organisational boundary. Which is exactly the boring, already-working internal case we started with.

Our expectation for the next two years: rapid growth in agent-initiated transactions where a company is paying itself or paying a known vendor under a pre-agreed contract, and much slower growth in open, cross-company agent commerce. The bottleneck is legal, not technical.

<b>Would this take off faster in the US or in Asia?</b>

Most commentary on agentic payments is written from the US, and it assumes the hard part is building the rails. From where we sit, that assumption looks backwards.

<b>Asia largely already has the rails</b>. <b>Digital wallets</b> accounted for around <b>77%</b> of regional e-commerce value and <b>63%</b> of point-of-sale value in 2025. Real-time, low-cost domestic settlement is normal, not aspirational: Bank Negara Malaysia reported 18.4 billion e-payment transactions in 2025, up 25%, with DuitNow QR volumes doubling to 3 billion. Cross-border linkages between PayNow, DuitNow, PromptPay and others are being consolidated under Nexus Global Payments, incorporated in Singapore by five central banks, with Indonesia joining in 2026 and go-live targeted for 2027.

There is a behavioural argument too, and it is underrated. A stored wallet credential is far easier to delegate to an agent than a card number is. In markets where consumers already tap once and pay from a wallet inside a superapp, the step to letting an agent do it is small. In card-first markets, it is a bigger leap.

![]({{ site.baseurl }}/img/blog-images/OAX-Agentic-Payments-APAC-vs-US-Final.png)

The rollouts reflect this. DBS and UOB processed authenticated agent transactions through <b>Mastercard Agent Pay</b> in March 2026, and Mastercard went live with authenticated agentic transactions in <b>Singapore and Malaysia in April 2026</b> as the first stage of a planned ASEAN rollout. Ant International has partnered with Google on the Agent Payments Protocol and with Visa on Visa Intelligent Commerce. Payments industry stakeholders across Southeast Asia are already describing agentic commerce as the next inflection point after QR.

So our answer is: the US will likely lead on agent-driven retail commerce, because that is where the large AI platforms and their consumer distribution sit. Asia is the more interesting market for agent-driven settlement, because the plumbing problem is closer to solved and the remaining work is the permission layer on top. If our thesis is right, and control matters more than speed, then Asia is a proving ground rather than a follower.

<b>Which use case do we think will win the race?</b>

![]({{ site.baseurl }}/img/blog-images/OAX-Agent-to-Agent-Use-Cases.png)

Several groups are competing to become the standard "rail," the basic infrastructure everyone uses, for agent-to-agent activity:
1. <b>Payments and settlement (Stripe, Coinbase, Visa, and others)</b>: letting agents pay each other automatically.
2. <b>Orchestration:</b> the "control tower" software that manages many agents, decides what they can and cannot do, and coordinates them.
3. <b>Industry-specific agents:</b> agents built deeply for one field, like finance, law, or healthcare.

<b>From OAX Foundation’s view:</b> the orchestration and control layer, the part that decides which agent can do what, and keeps a record of it, is likely to matter most in the next two years. Reason: right now, most companies cannot answer a basic question: <b>"which of our agents is allowed to do what, right now?"</b> That gap is a serious risk. 

A few incidents already show this: one company's security agent rewrote a safety rule on its own without permission. Inside Meta, an agent's actions accidentally exposed internal data for two hours. Until there is a reliable way to control and audit agents, large-scale agent-to-agent commerce is risky to trust.

Payment rails will keep growing. But the winner will be whoever also solves trust and control, not whoever settles fastest. A payment rail with no reliable answer to "was this agent allowed to do that" is a liability engine.

<b>What this means for regular users</b>

More of your work may be done by agents without you seeing each step. That is already true for support, admin and research tasks. It cuts both ways: the same agents saving you time are the ones quietly absorbing the tasks that used to be yours.

The more immediate change is subtler. You will stop choosing how you pay. Someone else's optimisation will choose for you, and the interesting question is whether you ever find out what it was optimising for.

<b>In short</b>

Agents doing tasks is now normal, but proving it pays for itself is still hard. Agents talking to agents is the next, more complex stage: real examples already exist with major players like Stripe, Twilio, Mastercard, and Browserbase, but the cost, the winners, and the guardrails are still being worked out. 

If those hurdles are crossed, the upside is real: cheaper services, more time back for people, and a more level playing field for smaller businesses. The company that solves the trust and control problem first, not just the fastest technology, is likely to set the terms for everyone else. 

Payments is only one piece. How agents find each other, decide who to trust, and negotiate across company lines are all unproven parts of the same new economic model. The company that solves trust and control first, rather than the one with the fastest technology, is likely to set the terms for everyone else.

<i>Disclaimer: The above is an opinion piece written by an authorized author, but in no way represents the official standpoint of OAX Foundation Limited, nor should it be meant to serve as investment advice.</i>