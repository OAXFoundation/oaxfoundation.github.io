---
layout: post
author: OAX Foundation
image: /img/blog-images/OAX-AI-Race-US-China-Header.png
tag: industry-business
---

![]({{ site.baseurl }}/img/blog-images/OAX-AI-Race-US-China-Header.png)

<br><b>Smartest Isn't Cheapest: What the July AI Releases Tell Us About the East-West Race</b>

Over the past month, four labs released new flagship models: OpenAI's GPT-5.6, SpaceXAI's Grok 4.5, Meta's Muse Spark 1.1, and Anthropic's Fable 5 (back online after a government shutdown). At first glance, this looks like the same story from the past two years: US labs competing on top-level intelligence, prices going up as capability goes up.

![]({{ site.baseurl }}/img/blog-images/OAX-AI-Race-US-China-Growth.png)

But look closer at what actually shipped. A different pattern shows up one that matters more for <b>how most companies should plan their AI spend</b>.

<b>The real cost driver isn't the price tag, it's tokens per task</b>

Every release last week made the same point: the price shown per token is not the number to focus on. What matters is how many tokens a model needs to finish a task. On that measure, the market just shifted.

- <b>OpenAI's GPT-5.6</b> launched in three tiers Sol, Terra, Luna  so users stop defaulting to the most expensive option for simple work. In independent testing, Sol needs about 7,000 tokens to finish an average task, the lowest of the group.
- <b>SpaceXAI's Grok 4.5</b>, trained together with newly-acquired Cursor, is priced at $2/$6 per million tokens. SpaceXAI claims roughly double the token efficiency of comparable models  on one coding benchmark; it used 4.2x fewer output tokens than Claude Opus 4.8. Musk described it as "an Opus-class model, but faster, more token-efficient and lower cost."
- <b>Meta's Muse Spark 1.1</b>  Meta's first paid model API  manages its own 1M-token memory window, keeping only what it needs instead of storing the full conversation. Priced at $1.25/$4.25 per million tokens, about a quarter of OpenAI/Anthropic pricing, and it beats both on several tool-use benchmarks.
- <b>Anthropic's Fable 5</b> sits at the other end: $10/$50 per million tokens, the most expensive model on the market today, and testing shows it also uses more tokens per task than most peers. Anthropic's cheaper Sonnet 5 ($2/$10, introductory) looks like the answer to this  but the real numbers are more complicated. 

A new tokenizer produces about 30% more tokens for the same text, and Sonnet 5's "thinking" mode uses enough extra tokens that independent tests found it can cost more per completed task than Opus 4.8, despite the lower headline price. A cheaper price per token does not always mean a cheaper cost per task.

OpenAI, SpaceXAI, and Meta are each building real engineering around this tiered pricing, memory management, and leaner reasoning. Anthropic is competing on price and raw capability, not yet on this specific efficiency point. Worth watching whether that becomes a gap.

<b>The deeper story is memory, not tokens</b>

Behind the pricing headlines is a hardware story that started in China. 

<b>DeepSeek's</b> Multi-head Latent Attention technique (2024) cut a model's "working memory"  called the KV cache by more than 92%. This is a big reason DeepSeek could price so far below Western labs in the first place. 

<b>Google</b> followed in March 2026 with TurboQuant, which shrinks this same memory use by 6x and speeds up processing by 8x, with almost no loss in accuracy. The market reaction was immediate: memory chip stocks Samsung, SK Hynix, Micron, SanDisk, Western Digital  all fell within a day of the announcement, because AI models that need less memory buy fewer memory chips.

This is the real mechanism behind "low-cost AI"  something pricing alone doesn't explain. Tiered pricing and cheap headline rates are business strategies. Cutting memory use through better architecture is a genuine technical breakthrough that makes AI cheaper to run. And it's one area where a Chinese lab had the first real win, well before Google matched it.

<b>The ROI problem nobody wants to say out loud</b>

Over the past year, companies went all-in on AI agents spending heavily on credits, pilots, and retooling entire teams around AI-first work. The spending has been real. The return on that spending, less so.

The same pattern shows up almost everywhere: more review cycles, more admin work checking the AI's output. In some cases, teams need <b>more people to supervise and check the agents than the agents</b> were meant to replace. One CTO reportedly used up an entire year's AI budget by April, with per-engineer costs on frontier models running into the thousands per month.

This is the tension companies are in right now. 

On one side, models keep getting smarter and pricier model IPOs and rising valuations add more pressure to justify premium pricing. 

On the other side, finance teams are asking hard questions about whether the spend is paying off, and "scale down" and "cut headcount" are back on the table at the same companies that were hiring AI teams a year ago.

<b>The quiet shift: generalists with tools, not specialists with headcount</b>

Alongside the ROI question, a related shift is happening: companies talking less about hiring more specialists, and more about giving generalists AI tools to do specialist-level work.
 
If this trend continues, it confirms the point above: most of the work being automated doesn't need the smartest model. It needs a model that's good enough, cheap enough to run constantly, and efficient enough that the bill doesn't spiral at scale.

![]({{ site.baseurl }}/img/blog-images/OAX-AI-Race-US-China-Growth-China-LLM.png)

This is exactly the gap Grok 4.5 and Muse Spark 1.1 are trying to fill from the US side and China's open-weight models are making the same pitch, from a different direction.

<b>Where China actually stands right now</b>

The "China is catching up" story needs an update; it's no longer catching up. It's genuinely competitive across a growing range of tasks, and the numbers now back this up, independent of any one company's own benchmark chart.

Stanford HAI's 2026 AI Index, the most widely cited annual study of the field, measured the performance <b>gap between the best US and best Chinese model at just 2.7%</b> as of March 2026. 

Two things make this different from the DeepSeek-R1 moment in early 2025. First, these aren't one-time surprises; they're strong specifically at the agentic, multi-step work companies are trying to automate. Second, because the models are open-weight under MIT licenses, running them on a company's own servers is a real option, not just a theory. That matters for companies with data-residency or compliance rules, and it's largely not available from the closed US labs.

![]({{ site.baseurl }}/img/blog-images/OAX-AI-Race-US-China-Growth-China-Competitive.png)

The chance that Chinese models become a lasting part of enterprise AI stacks is not a curiosity, but the default choice for a real share of workloads is rising, not falling. This already shows in usage data: Chinese open-weight models have been taking a growing share of token volume on platforms like OpenRouter since early this year. 

![]({{ site.baseurl }}/img/blog-images/OAX-AI-Race-US-China-iPhone.png)

And this week gave the <a href="https://gmasia.ai/news/apple-gets-approval-for-iphone-ai-in-china-with-alibaba-baidu">clearest signal</a> yet - not a benchmark, but a purchasing decision. Chinese regulators approved Apple Intelligence for iPhones in China, with Alibaba's Qwen handling text and image work inside Apple's operating systems and Baidu covering search. 

Why is this important? Well, Apple's underlying foundation models are built on Google's Gemini. It didn't pick Qwen because Qwen won a leaderboard - it picked Qwen because Qwen can legally operate there and Gemini can't. That's the compliance-restricted case at the largest scale available, and if you have data-residency rules or operate in Asia, you're facing a smaller version of the same decision. 

<b>OAX's read</b>

Step back from the weekly release cycle, and the shape of this competition becomes clearer than any single benchmark chart: this isn't one race. It's two.

The US is running an <b>abundance race</b> - capital, computing power, and top-end intelligence. US private AI investment hit $285.9B in 2025, roughly 23x China's $12.4B. This capital keeps producing the smartest models like Fable 5, GPT-5.6 Sol, Gemini's next generation. It's a real, lasting advantage for the hardest, highest-stakes work.

China is running a <b>constraint race</b> - cost, efficiency, and deployment at scale. Limited chip access made "spend more to scale up" a non-option, so Chinese labs focused on smarter architecture instead: DeepSeek's memory-saving design and V4 pricing, Zhipu training on Huawei chips, efficient model designs across the board. 

The results show up in different numbers: China leads in global AI patent filings, research publications, and industrial robot installations (roughly 9x the US rate) real deployment numbers, not lab test scores.

Neither side is "winning" outright. They're optimizing for different goals. The practical takeaway for a business like ours: this isn't a choice between "US model" or "Chinese model" as one decision. It's about matching the right model to the right task.

High-stakes, judgment-heavy work still favors the well-funded US labs. Cost-sensitive, high-volume, or compliance-restricted work increasingly favors the efficient, open-weight Chinese options.

This plays out clearly in coding - the one area most teams can see up close. We recently <a href="https://x.com/OAX_Foundation/status/2077640438127964565">ranked the best AI tools for coding</a> on current benchmarks, and the two-track pattern is right there in the numbers:

![]({{ site.baseurl }}/img/blog-images/OAX-Best-AI-Coding-Tools.png)

Claude Fable 5 still owns the ceiling at 95.0% on SWE-bench Verified - and charges $10/$50 for it. But look at where the bottom of that list has moved. GLM-5.2 is MIT-licensed, runs on your own servers, and drops straight into Claude Code via the Anthropic API. DeepSeek V4 Pro-Max delivers 80.6% at $0.44/$0.87 - roughly 20x cheaper than the leader, from the same lab whose memory architecture kicked off this whole efficiency race in the first place.

That's the two-track story in one chart. The frontier is still American. The economics are increasingly not. And for the vibe-coding and everyday development work that fills most engineering hours - the work that doesn't need the smartest model, just a good-enough one you can run constantly, the gap has effectively closed.

Which brings it back to the question we opened with: how many tokens does this actually take, and where can it run? Those aren't procurement details anymore. They're the whole strategy.

Working out which model belongs where in your stack is exactly the kind of thing we cover at <a href="https://gmasia.ai/campus">GMAsia Campus</a>: Practical, Asia-focused AI training for learners  trying to build with these tools rather than just read about them. Because the labs will keep shipping. The advantage goes to whoever knows which release actually matters for the work in front of them.


<i>Disclaimer: The above is an opinion piece written by an authorized author, but in no way represents the official standpoint of OAX Foundation Limited, nor should it be meant to serve as investment advice.</i>
