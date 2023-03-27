---
layout: page
title: Contact
permalink: /contactus/
---
<div>
    <div class="d-flex flex-column resources-hero">
        <div class="container d-flex flex-column flex-lg-row flex-grow-1 pb-0 pb-lg-4" style="z-index: 1; justify-content: center; align-items: center;">
            <h1 class="page-title blue1 w-100 w-lg-50">
                <div class="animate__animated animate__fadeInUp" style="text-align: center; color: #14345E; font-size: 56; font-weight: bold;">Contact Us</div>
            </h1>
        </div>
    </div>
    <div class="container contact-us" style="margin-bottom: 90px;">
        <div class="row">
            <div class="col-12 col-lg-6 pr-0 pr-lg-5">
                {% include elements/contact-form.html %}
            </div>
            <div class="col-12 col-lg-6 pt-0 pl-0 pt-lg-3 pl-lg-5 contact-social-container">
                <div class="d-flex flex-column contact-social">
                    <div class="social-media--label" style="color: #14345E; font-weight: bold; font-size: 16px;">OUR SOCIALS</div>
                    <div class="d-flex flex-row" style="padding-top: 8px; padding-bottom: 16px;">
                    {% include social-media.html %}
                    </div>
                    <div class="social-media--label" style="color: #14345E; font-weight: bold; font-size: 16px; padding-top: 20px;">OUR EMAIL</div>
                    <a href="mailto:info@oax.org" style="color: #14345E; font-weight: bold; font-size: 16px;">info@oax.org</a>
                </div>
            </div>
        </div>                
    </div>
</div>