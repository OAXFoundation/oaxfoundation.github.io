---
layout: default
title: Home
---
<div class="page-home">
    <div class="cta1">
        <div class="container d-flex flex-column pb-0 py-lg-5">
            <div class="w-75" style="z-index: 2;">
                <div class="page-title blue1">Developing and promoting a sustainable digital asset ecosystem for the future
                </div>
                <div class="page-subtitle black1 pt-2">OAX Foundation believes that the future is shaped by the work done today. Explore our vision and the work being done within this space.
                </div>
                <div class="py-5">
                    <img src="{{ '/assets/scroll-to-explore.png' }}"/>
                </div>
            </div>
            <div class="d-flex flex-row w-100 justify-content-end" style="position: relative;">
                <div class="animated1 d-flex flex-row" style="mix-blend-mode: screen;">
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

    <div class="our-journey d-none">
        <div class="container py-5">
            <div class="subheading">Our Journey
            </div>
            <div>timeline
            </div>
            <div>timeline content
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
                            <div class="latest-updates--post-group mr-2">Community Update</div>
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
                    <div class="contact-us--connect-with-us mt-5">Connect With Us
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
