---
layout: page
title: Resources
permalink: /resources/
order: 2
---
<div class="d-flex flex-column">
    <div class="container d-flex flex-column flex-lg-row flex-grow-1 pb-0 pb-lg-4" style="z-index: 1;">
        <h1 class="page-title blue1 w-100 w-lg-50">
            <div class="animate__animated animate__fadeInUp">Resources</div>
        </h1>
    </div>
</div>
<div class="bg-white pt-4 pt-lg-5 mb-5 pb-5">
    <div class="container mb-5 pb-5">
        <div class="group corner1 box-shadow4 mb-4">
            <div class="group--title border-bottom px-5 py-2">Parachain Features</div>
            <div class="py-3 px-5">
                {% assign list = site.resources | where: 'group', 'Parachain Features' %}
                {% include elements/accordion.html %}
            </div>
        </div>
        <div class="group corner1 box-shadow4 mt-5  mb-4">
            <div class="group--title border-bottom px-5 py-2">Layer 2 Protocol</div>
            <div class="py-3 px-5">
                {% assign list = site.resources | where: 'group', 'Layer 2 Protocol' %}
                {% include elements/accordion.html %}
            </div>
        </div>
        <div class="group corner1 box-shadow4 mt-5 mb-4">
            <div class="group--title border-bottom px-5 py-2 d-flex flex-column">
                <strong>Research Paper</strong>
                <div>Professor Syren Johnstone Papers on Regulating Crypto</div>
            </div>
            <div class="py-3 px-5">
                {% assign list = site.resources | where: 'group', 'Research Paper - Professor Syren Johnstone Papers on Regulating Crypto' %}
                {% include elements/accordion.html %}
            </div>
        </div>
    </div>
</div>
