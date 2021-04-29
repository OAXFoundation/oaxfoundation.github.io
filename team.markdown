---
layout: page
title: Team
permalink: /team/
order: 4
---
<div class="d-flex flex-column">
    <div class="container d-flex flex-column flex-lg-row flex-grow-1 pb-0 pb-lg-4" style="z-index: 1;">
        <h1 class="page-title blue1 w-75 w-lg-50">
            <div class="animate__animated animate__fadeInUp">Meet the Founders <br/>& Advisors</div>
        </h1>
    </div>
</div>
<div class="bg-white pt-4 pt-lg-5">
    <div class="container">
        <div class="d-flex flex-row mb-4 mt-5">
            <div class="member--group-title mr-3">Founders & Directors
            </div>
            <div class="flex-grow-1 d-flex flex-row align-items-center">
                <div class="line w-25"></div>
            </div>
        </div>
        <div class="teams d-flex flex-row flex-wrap pt-4">
            {% assign founders = site.team_members | where: 'group', 'Founder' | sort: "order" %}
        
            {% for member in founders %}    
                {% capture member %}member{% endcapture %}
                {% include elements/member.html %}
            {% endfor %}
        </div>
        
        <div class="d-flex flex-row mt-5 mb-4">
            <div class="member--group-title mr-3">Advisors
            </div>
            <div class="flex-grow-1 d-flex flex-row align-items-center">
                <div class="line w-25"></div>
            </div>
        </div>
        <div class="teams d-flex flex-row flex-wrap pt-4">
            {% assign advisors = site.team_members | where: 'group', 'Advisors' %}
        
            {% for member in advisors %}    
                {% capture member %}member{% endcapture %}
                {% include elements/member.html %}
            {% endfor %}
        </div>
    </div>
    <div class="section our-partners mt-5 py-3 py-lg-5">
        <div class="container my-5">
            <div class="d-flex flex-row mb-3">
                <div class="section--title mr-3">Working With
                </div>
                <div class="flex-grow-1 d-flex flex-row align-items-center">
                    <div class="line w-25"></div>
                </div>
            </div>
            <div class="d-flex flex-row align-items-center mt-4 mt-lg-5 logos">
                <div class="mr-3 mr-lg-5">
                    <a href="https://www.blockpass.org/">
                        <img src="{{ '/assets/team/oax-partner-logo-blockpass 1.png' }}" alt="logo">
                    </a> 
                </div>
                {% comment %}
                <div class="mr-3 mr-lg-5">
                    <a href="https://enuma.io/">
                        <img src="{{ '/assets/team/oax-partner-logo-enuma-technologies.png' }}" alt="logo">
                    </a>
                </div>
                {% endcomment %}
                <div class="mr-3 mr-lg-5">
                    <a href="https://kyc-chain.com/">
                        <img src="{{ '/assets/team/oax-partner-logo-kyc-chain.png' }}" alt="logo">
                    </a>
                </div>
                <div class="mr-3 mr-lg-5">
                    <a href="https://www.soliduslabs.com/">
                        <img src="{{ '/assets/team/oax-partner-logo-solidus-labs 1.png' }}" alt="logo">
                    </a>
                </div>
                <div>
                    <a href="https://www.openswap.xyz/#/">
                        <img src="{{ '/assets/team/OpenSwap.png' }}" alt="logo" height="38px">
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div class="section mt-5">
        <div class="container py-5">
            <div class="d-flex flex-row mb-3">
                <div class="section--title mr-3">Corporate Support
                </div>
                <div class="flex-grow-1 d-flex flex-row align-items-center">
                    <div class="line w-25"></div>
                </div>
            </div>
            <div class="d-flex flex-row align-items-center mt-4 logos">
                <div class="mr-3 mr-lg-5">
                    <a href="https://www.refinitiv.com/">
                        <img class="w-100" src="{{ '/assets/team/oax-corporate-support-logo-refinitiv.png' }}" alt="logo">
                    </a>
                </div>
                <div class="mr-3 mr-lg-5">
                    <a href="https://www.cognitomedia.com/">
                        <img class="w-100" src="{{ '/assets/team/oax-corporate-support-logo-cognito 1.png' }}" alt="logo">
                    </a>
                </div>
                <div>
                    <a href="https://openminds.hk/">
                        <img class="w-100" style="height: auto" src="{{ '/assets/team/oax-corporate-support-logo-openminds.png' }}" alt="logo">
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>