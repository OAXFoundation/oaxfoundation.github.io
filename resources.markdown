---
layout: page
title: Resources
permalink: /resources/
order: 2
---
<div class="d-flex flex-column resources-hero">
    <div class="container d-flex flex-column flex-lg-row flex-grow-1 pb-0 pb-lg-4" style="z-index: 1; justify-content: center; align-items: center;">
        <h1 class="page-title blue1 w-100 w-lg-50">
            <div class="animate__animated animate__fadeInUp" style="text-align: center; color: #14345E; font-size: 56; font-weight: bold;">Resources</div>
        </h1>
    </div>
</div>
<div class="bg-white pt-4 pt-lg-5">
    <div class="container">
        <div class="group corner1 box-shadow4" style="border: 2px solid #14345E;">
            <div class="group--title border-bottom pr-5 pb-3 pt-3" style="color: #14345E; font-size: 36px; font-weight: 700; margin-left: 1.5rem; margin-right: 3rem;">Portfolio Aggregator</div>
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
