---
layout: page
title: Resources
permalink: /resources/
order: 2
---
<div class="d-flex flex-column resources-hero" style="display: flex; align-items: center; padding-top: 100px; padding-bottom: 100px; justify-content: center;">
    <div class="container">
        <div class="d-flex flex-column flex-lg-row row flex-grow-1 justify-content-center" style="z-index: 1;">
            <h1 class="page-title blue1 col text-center">
                <div class="animate__animated animate__fadeInUp">Resources</div> 
                <p class="page-subheading col" style="font-size: 20px; color: #121212; line-height: 1.5; padding-left: 0; padding-right: 0; padding-top: 15px; font-weight: 400; text-align: center;">The OAX Resources page, curated by the OAX Foundation, empowers the Web3 ecosystem with educational guides, regulatory research, AI-driven tools, and open-source features for scalability. We invite community participation to shape the future of digital finance together.</p>
            </h1>
            <div class="col d-none d-lg-flex flex-row justify-content-center align-items-center mt-5 ml-lg-0" style="text-align: right">
            </div>
        </div>
    </div>
</div>
<div class="bg-white pt-4 pt-lg-5">
    <div class="container">
        <div class="group corner1 box-shadow4" style="border: 2px solid #14345E;">
            <div class="group--title border-bottom pr-5 pb-3 pt-3" style="color: #14345E; font-size: 36px; font-weight: 700; margin-left: 1.5rem; margin-right: 3rem;">OAX Learn</div>
            <div class="pb-3 pt-4 pl-4 pr-5">
                {% assign list = site.resources | where: 'group', 'oax-learn' %}
                {% include elements/accordion.html %}
            </div>
        </div>
        <div class="group corner1 box-shadow4" style="border: 2px solid #14345E;">
            <div class="group--title border-bottom pr-5 pb-3 pt-3" style="color: #14345E; font-size: 36px; font-weight: 700; margin-left: 1.5rem; margin-right: 3rem;">Notifs Mobile App</div>
            <div class="pb-3 pt-4 pl-4 pr-5">
                {% assign list = site.resources | where: 'group', 'portfolio-aggregator' %}
                {% include elements/accordion.html %}
            </div>
        </div>
        <div class="group corner1 box-shadow4" style="border: 2px solid #14345E;">
            <div class="group--title border-bottom pr-5 pb-3 pt-3" style="color: #14345E; font-size: 36px; font-weight: 700; margin-left: 1.5rem; margin-right: 3rem;">Parachain Features</div>
            <div class="pb-3 pt-4 pl-4 pr-5">
                {% assign list = site.resources | where: 'group', 'Parachain Features' %}
                {% include elements/accordion.html %}
            </div>
        </div>
        <div class="group corner1 box-shadow4" style="border: 2px solid #14345E;">
            <div class="group--title border-bottom pr-5 pb-3 pt-3" style="color: #14345E; font-size: 36px; font-weight: 700; margin-left: 1.5rem; margin-right: 3rem;">Layer 2 Protocol</div>
            <div class="pb-3 pt-4 pl-4 pr-5">
                {% assign list = site.resources | where: 'group', 'Layer 2 Protocol' %}
                {% include elements/accordion.html %}
            </div>
        </div>
        <div class="group corner1 box-shadow4" style="border: 2px solid #14345E;">
            <div class="group--title border-bottom pr-5 pb-3 pt-3 d-flex flex-column"  style="color: #14345E; font-size: 36px; font-weight: 700;margin-left: 1.5rem; margin-right: 3rem;">
                <strong>Research Paper</strong>
                <div>Professor Syren Johnstone Papers on Regulating Crypto</div>
            </div>
            <div class="pb-3 pt-4 pl-4 pr-5">
                {% assign list = site.resources | where: 'group', 'Research Paper - Professor Syren Johnstone Papers on Regulating Crypto' %}
                {% include elements/accordion.html %}
            </div>
        </div>
        <div class="group corner1 box-shadow4" style="border: 2px solid #14345E;">
            <div class="group--title border-bottom pr-5 pb-3 pt-3 d-flex flex-column"  style="color: #14345E; font-size: 36px; font-weight: 700; margin-left: 1.5rem; margin-right: 3rem;">
                <strong>Others</strong>
                <div></div>
            </div>
            <div class="pb-3 pt-4 pl-4 pr-5">
                {% assign list = site.resources | where: 'group', 'other' %}
                {% include elements/accordion.html %}
            </div>
        </div>
    </div>
</div>
