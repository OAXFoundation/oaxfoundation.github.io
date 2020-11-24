---
layout: default
title: Home
---
<div class="page-home">
    <div class="cta1">
        <div class="container d-flex flex-column pt-5 pt-lg-0 mt-5 mt-lg-0 pb-0 pt-lg-5">
            <div style="z-index: 2;">
                <div class="page-title blue1">Developing and promoting a sustainable digital asset ecosystem for the future
                </div>
                <div class="page-subtitle black1 pt-2">OAX Foundation believes that the future is shaped by the work done today. Explore our vision and the work being done within this space.
                </div>
                <div class="py-5">
                    <img src="{{ '/assets/scroll-to-explore.png' }}"/>
                </div>
            </div>
            <div class="d-flex flex-row w-100 justify-content-end" style="position: relative;">
                <div class="animated1 d-flex flex-row" style="mix-blend-mode: screen; visibility: hidden; right: -100%;">
                </div>
            </div>
        </div>
    </div>

    <div class="quote1 gradient1 d-flex flex-row">
        <div class="quote1--background flex-grow-1 h-100 py-5">
            <div class="container py-0 py-lg-5">
                <div class="quote1--text"><img class="mr-1" src="{{ '/assets/quote-sign.png' | prepend: site.url }}"/><strong>Openness</strong>, <strong>trustlessness</strong> and <strong>strong governance</strong> are the foundations that will enable digital assets to flourish in today’s highly complex and regulated financial world.<img class="ml-1" src="{{ '/assets/quote-sign.png' | prepend: site.url }}" class="rotate-180"/>
                </div>
                <div class="quote1--person pt-5">
                    <div>
                        <strong>- Hugh Madden
                        </strong>
                    </div>
                    <div>
                        <small>Co-Founder OAX Foundation
                        </small>   
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="oax-highlights  box-shadow1 bg-white p-0 py-5 p-lg-5">
        <div class="container py-5">
            
            <div class="subheading">OAX Highlights
            </div>
            <div class="highlights d-flex flex-column flex-lg-row justify-content-between row mt-5">
                <div class="d-flex flex-column text-center align-items-center bg-white col p-4 mr-0 mr-lg-4 mb-4 mb-lg-0">
                    <img src="{{ '/assets/defi-parachain-features.jpg' | prepend: site.url }}" width="64px"/>
                    <div class="highlight-title my-2">OAX DeFi<br/>Parachain Features
                    </div>
                    <div class="highlight-desc">Developed for the Polkadot Network based parachains, explore five features that were developed by OAX
                    </div>
                </div>
                <div class="d-flex flex-column text-center align-items-center bg-white col p-4 mx-0 mx-lg-4 mb-4 mb-lg-0">
                    <img src="{{ '/assets/layer-2-protocol.jpg' | prepend: site.url }}" width="80px"/>
                    <div class="highlight-title my-2">OAX Layer 2<br/>Protocol
                    </div> 
                    <div class="highlight-desc">Released August 2019, the Layer 2 Solution (L2X) focuses on addressing scalability, dispute resolution and more for decentralized exchanges.
                    </div>
                </div>
                <div class="d-flex flex-column text-center align-items-center bg-white col p-4 ml-0 ml-lg-4">
                    <img src="{{ '/assets/community-research.jpg' | prepend: site.url }}" width="74px"/>
                    <div class="highlight-title my-2">OAX Community &amp;<br/>Research
                    </div>
                    <div class="highlight-desc">Beyond development internally, support the industry is key. Explore the work we've done with Professor Syren Johnstone in exploring regulations within this space.
                    </div>
                </div>
            </div>
        </div>
    </div>
    <style>
        .events-content::before{
            left: -500px;
        }
    </style>
    <div class="our-journey">
        <div class="container py-5">
            <div class="subheading">Our Journey
            </div>
            <div class="our-journey--timeline">
                <div class="horizontal-timeline" id="example">
                    <div class="events-content">
                        <ol>
                            <li class="selected" data-horizontal-timeline='{"date": "1/6/2018"}'>
                                <div class="our-journey--content">
                                    <div class="d-flex flex-column align-items-start border p-4 py-5" style="border-color: var(--blue1) !important;">
                                        <div>June 2018</div>
                                        <div class="mt-2">Tech Milestone</div>
                                        <div class="mt-2">DEX Prototype Launch</div>
                                        <div class="mt-2">Launch of a new decentralized platform for the trading
                                            of digital assets and made available for testing.
                                            Refined using Continuous Delivery engineering
                                            approach.</div>
                                        <a href="https://www.oax.org/2018/06/22/OAX-Foundation-Revolutionizes-Digital-Asset-Trading-with-Launch-of-Decentralized-Platform-Prototype.html" class="btn btn-default border-gradient1 mt-3 mt-lg-4 px-4">Learn More</a>
                                    </div>
                                </div>
                            </li>
                            <li data-horizontal-timeline='{"date": "1/7/2018"}'>
                                <div class="our-journey--content">
                                    <div class="d-flex flex-column align-items-start border p-4 py-5" style="border-color: var(--blue1) !important;">
                                        <div>Jul 2018</div>
                                        <div class="mt-2 yellow2">Business Milestone</div>
                                        <div class="mt-2">AMA Session #2</div>
                                        <div class="mt-2">The second AMA was hosted shortly after the launch of
                                            the DEX prototype launch, giving the Telegram
                                            community an opportunity to speak to the team on the
                                            release.</div>
                                        <a href="https://www.oax.org/2018/07/06/OAX-DEVELOPMENT-AMA-2.html" class="btn btn-default border-gradient1 mt-3 mt-lg-4 px-4">Learn More</a>
                                    </div>
                                </div>
                            </li>
                            <li data-horizontal-timeline='{"date": "1/12/2018"}'>
                                <div class="our-journey--content">
                                    <div class="d-flex flex-column align-items-start border p-4 py-5" style="border-color: var(--blue1) !important;">
                                        <div>Dec 2018</div>
                                        <div class="mt-2">Tech Milestone</div>
                                        <div class="mt-2">1,000 Transactions per second</div>
                                        <div class="mt-2">A breakthrough moment for the team in our quest to
                                            address speed on DEX platforms. Over 1,000
                                            transactions per second using only a single node
                                            server!</div>
                                        <a href="https://www.oax.org/2018/12/13/A-Giant-Leap-for-Decentralization.html" class="btn btn-default border-gradient1 mt-3 mt-lg-4 px-4">Learn More</a>
                                    </div>
                                </div>
                            </li>
                            <li data-horizontal-timeline='{"date": "1/1/2019"}'>
                                <div class="our-journey--content">
                                    <div class="d-flex flex-column align-items-start border p-4 py-5" style="border-color: var(--blue1) !important;">
                                        <div>Jan 2019</div>
                                        <div class="mt-2">Tech Milestone</div>
                                        <div class="mt-2">DEX hits testnet</div>
                                        <div class="mt-2">Deployment to the Rinkeby Testnet allowing the OAX
                                            team to evaluate the platform's performance in greater
                                            detail. Don't forget to check out the video.</div>
                                        <a href="https://www.oax.org/2019/01/25/OAX-Reaches-Major-Technology-Milestone;-Now-It's-Time-to-Partner-Up.html" class="btn btn-default border-gradient1 mt-3 mt-lg-4 px-4">Learn More</a>
                                    </div>
                                </div>
                            </li>
                            <li data-horizontal-timeline='{"date": "1/2/2019"}'>
                                <div class="our-journey--content">
                                    <div class="d-flex flex-column align-items-start border p-4 py-5" style="border-color: var(--blue1) !important;">
                                        <div>Feb 2019</div>
                                        <div class="mt-2">Tech Milestone</div>
                                        <div class="mt-2">OAX DEX Software Development Kit Launched</div>
                                        <div class="mt-2">Supplementing the release of our DEX platform on
                                            testnet, we also released our SDK for community
                                            partners, allowing for users to interact with our
                                            platform using its built-in command link interface.</div>
                                        <a href="https://www.oax.org/2019/02/14/OAX-DEX-Software-Development-Kit.html" class="btn btn-default border-gradient1 mt-3 mt-lg-4 px-4">Learn More</a>
                                    </div>
                                </div>
                            </li>
                            <li data-horizontal-timeline='{"date": "1/3/2019"}'>
                                <div class="our-journey--content">
                                    <div class="d-flex flex-column align-items-start border p-4 py-5" style="border-color: var(--blue1) !important;">
                                        <div>Mar 2019</div>
                                        <div class="mt-2">Tech Milestone</div>
                                        <div class="mt-2">AMA Session #3</div>
                                        <div class="mt-2">Our first subReddit AMA. Topics ranging from legal
                                            framework, marketing to BD, and joined by our
                                            long-term partner, Eunma Technologies.</div>
                                        <a href="https://www.oax.org/2019/03/07/OAX-Foundation-AMA-SDK-release-and-partnerships!.html" class="btn btn-default border-gradient1 mt-3 mt-lg-4 px-4">Learn More</a>
                                    </div>
                                </div>
                            </li>
                            <li data-horizontal-timeline='{"date": "14/3/2019"}'>
                                <div class="our-journey--content">
                                    <div class="d-flex flex-column align-items-start border p-4 py-5" style="border-color: var(--blue1) !important;">
                                        <div>Mar 2019</div>
                                        <div class="mt-2">Tech Milestone</div>
                                        <div class="mt-2">OAX Solidus Lab Partnership</div>
                                        <div class="mt-2">Machine-learning powered market surveillance partner,
                                            Solidus Lab, joins OAX's efforts to address market
                                            manipulation across the industry.</div>
                                        <a href="https://www.oax.org/2019/02/14/OAX-DEX-Software-Development-Kit.html" class="btn btn-default border-gradient1 mt-3 mt-lg-4 px-4">Learn More</a>
                                    </div>
                                </div>
                            </li>
                            <li data-horizontal-timeline='{"date": "19/3/2019"}'>
                                <div class="our-journey--content">
                                    <div class="d-flex flex-column align-items-start border p-4 py-5" style="border-color: var(--blue1) !important;">
                                        <div>Mar 2019</div>
                                        <div class="mt-2">Tech Milestone</div>
                                        <div class="mt-2">OAX - KYC-Chain Partnership</div>
                                        <div class="mt-2">Bringing strong governance standards in digital asset
                                            trading is instrumental in creating a foundation of
                                            trust. Welcoming our new partner, KYC-Chain!</div>
                                        <a href="https://www.oax.org/2019/03/19/OAX-Foundation-Announces-Partnership-with-KYC-Chain-to-Bring-Compliance-Controls-to-Digital-Asset-Trading.html" class="btn btn-default border-gradient1 mt-3 mt-lg-4 px-4">Learn More</a>
                                    </div>
                                </div>
                            </li>
                            <li data-horizontal-timeline='{"date": "1/4/2019"}'>
                                <div class="our-journey--content">
                                    <div class="d-flex flex-column align-items-start border p-4 py-5" style="border-color: var(--blue1) !important;">
                                        <div>Apr 2019</div>
                                        <div class="mt-2 yellow2">Business Milestone</div>
                                        <div class="mt-2">OAX - Blockpass Partnership</div>
                                        <div class="mt-2">A digital identity application and service that brings
                                            control back to the user, fundamental to the era of
                                            digital assets and blockchain. Blockpass working
                                            together with us to improve adoption of standards needed
                                            for the industry.</div>
                                        <a href="https://www.oax.org/2019/04/29/OAX-Foundation-and-Blockpass-announce-new-agreement-to-promote-regulatory-compliance.html" class="btn btn-default border-gradient1 mt-3 mt-lg-4 px-4">Learn More</a>
                                    </div>
                                </div>
                            </li>
                            <li data-horizontal-timeline='{"date": "1/6/2019"}'>
                                <div class="our-journey--content">
                                    <div class="d-flex flex-column align-items-start border p-4 py-5" style="border-color: var(--blue1) !important;">
                                        <div>Jun 2019</div>
                                        <div class="mt-2 yellow2">Business Milestone</div>
                                        <div class="mt-2">L2X Protocol Specification</div>
                                        <div class="mt-2">A new paper, a new milestone. Setting out the
                                            technical specifications of the L2X protocol, focusing
                                            on four key interactions: clients, the exchange,
                                            operators and a mediator smart contract.</div>
                                        <a href="https://www.oax.org/2019/06/20/New-Paper,-New-Milestone.html" class="btn btn-default border-gradient1 mt-3 mt-lg-4 px-4">Learn More</a>
                                    </div>
                                </div>
                            </li>
                            <li data-horizontal-timeline='{"date": "1/8/2019"}'>
                                <div class="our-journey--content">
                                    <div class="d-flex flex-column align-items-start border p-4 py-5" style="border-color: var(--blue1) !important;">
                                        <div>August 2019</div>
                                        <div class="mt-2 yellow2">Tech Milestone</div>
                                        <div class="mt-2">L2X Protocol Launch</div>
                                        <div class="mt-2">Long-awaited, the source code is open-source and here
                                            for everyone. Addressing speed, scalability and trust.
                                            By allowing the dispute resolution process to take
                                            place on-chain, platform users can settle disputes
                                            directly without having to use third-party custodians.</div>
                                        <a href="https://www.oax.org/2019/08/12/OAX-Foundation-releases-new-exchange-protocol.html" class="btn btn-default border-gradient1 mt-3 mt-lg-4 px-4">Learn More</a>
                                    </div>
                                </div>
                            </li>
                            <li data-horizontal-timeline='{"date": "1/9/2019"}'>
                                <div class="our-journey--content">
                                    <div class="d-flex flex-column align-items-start border p-4 py-5" style="border-color: var(--blue1) !important;">
                                        <div>Sep 2019</div>
                                        <div class="mt-2 yellow2">Business Milestone</div>
                                        <div class="mt-2">AMA Session #4</div>
                                        <div class="mt-2">Our community keeps growing! They came, they asked and
                                            we answered. 110 questions over 24 hours.</div>
                                        <a href="https://www.oax.org/2019/09/06/OAX-Foundation-AMA-recap.html" class="btn btn-default border-gradient1 mt-3 mt-lg-4 px-4">Learn More</a>
                                    </div>
                                </div>
                            </li>
                            <li data-horizontal-timeline='{"date": "11/2/2020"}'>
                                <div class="our-journey--content">
                                    <div class="d-flex flex-column align-items-start border p-4 py-5" style="border-color: var(--blue1) !important;">
                                        <div>Feb 2020</div>
                                        <div class="mt-2">Business Milestone</div>
                                        <div class="mt-2">OAX-Polkadot Network Strategic Initiative Launched</div>
                                        <div class="mt-2">OAX Foundation announces a strategic initiative to
                                            build on the Polkadot Network, opening opportunities
                                            for the future with DeFi.</div>
                                        <a href="https://www.oax.org/2020/02/11/OAX-Foundation-to-Build-on-Polkadot-Network.html" class="btn btn-default border-gradient1 mt-3 mt-lg-4 px-4">Learn More</a>
                                    </div>
                                </div>
                            </li>
                            <li data-horizontal-timeline='{"date": "17/04/2020"}'>
                                <div class="our-journey--content">
                                    <div class="d-flex flex-column align-items-start border p-4 py-5" style="border-color: var(--blue1) !important;">
                                        <div>April 2020</div>
                                        <div class="mt-2">Tech Milestone</div>
                                        <div class="mt-2">AMA Session #5</div>
                                        <div class="mt-2">Highlights of our AMA session, focusing on our plans
                                            of building a parachain on the Polkadot Network.</div>
                                        <a href="https://www.oax.org/2020/04/16/OAX-AMA-Session-Highlights.html" class="btn btn-default border-gradient1 mt-3 mt-lg-4 px-4">Learn More</a>
                                    </div>
                                </div>
                            </li>
                            <li data-horizontal-timeline='{"date": "6/8/2020"}'>
                                <div class="our-journey--content">
                                    <div class="d-flex flex-column align-items-start border p-4 py-5" style="border-color: var(--blue1) !important;">
                                        <div>August 2020</div>
                                        <div class="mt-2">Tech Milestone</div>
                                        <div class="mt-2">Features Open Source Release</div>
                                        <div class="mt-2">The official release the code for the five features that would benefit parachains on the Polkadot network, open sourced and available on the OAX Github page.</div>
                                        <a href="https://www.oax.org/2020/08/06/Parachain-Features-Open-Source-Code-Released.html" class="btn btn-default border-gradient1 mt-3 mt-lg-4 px-4">Learn More</a>
                                    </div>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="latest-updates gradient1">
        <div class="container">
            <div class="d-flex flex-row">
                <div class="subheading flex-grow-1">Latest Updates</div>
                <div class="next-subheading d-flex flex-row align-items-center">
                    <a class="black10" href="{{ '/blog/' | prepend: site.url }}">View Blog</a>
                </div>
            </div>
            <div>
                <img src="{{ '/assets/line.jpg' | prepend: site.url }}" alt="line" width="100%">
            </div>
            <div class="latest-updates--posts d-flex flex-column flex-lg-row justify-content-between">
                {% for post in site.posts limit:3 %}
                
                <div class="d-flex flex-row-reverse flex-lg-column py-3 py-lg-0">
                    <div class="latest-updates--post-image">
                        <a href="{{ post.url }}">
                            <img src="{% include elements/post_first_image.html %}" alt="arrow">
                        </a>
                    </div>
                    <div class="py-3 pr-3 pl-0 p-lg-3 flex-grow-1">
                        <div class="d-flex flex-row flex-wrap">
                            <div class="latest-updates--post-group mr-2">{%- include elements/tag-label.html -%}</div>
                            <div class="d-flex flex-row align-item-center mr-2"><img src="{{ '/assets/triangle.jpg' | prepend: site.url }}" alt="arrow"></div>
                            <div class="latest-updates--post-date mt-1 mt-lg-0">{{ post.date | date_to_string: "ordinal", "US" }}</div>
                        </div>
                        <div class="latest-updates--post-title mt-2 mt-lg-2"><a class="black5" href="{{ post.url }}">{{ post.title }}</a>
                        </div>
                        <div class="latest-updates--post-author mt-2 mt-lg-0">By OAX Foundation</div>
                    </div>
                </div>
                {% endfor %}
            </div>
        </div>
    </div>
    <div class="contact-us">
        <div class="container">
            <div class="d-flex flex-row row pb-5">
                <div class="col d-none d-lg-block">
                    <div class="contact-us--connect-with-us mt-5 pt-5">Connect With Us
                    </div>
                    <div class="contact-us--email py-3"><a class="black10" href="mailto:info@oax.org">info@oax.org</a></div>
                    <div class="d-flex flex-row">
                        {% include social-media.html %}
                    </div>
                </div>
                <div class="col">
                    {% include elements/contact-form.html %}
                </div>    
            </div>
        </div>
    </div>      
</div>
