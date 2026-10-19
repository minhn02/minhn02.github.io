---
layout: page
permalink: /cv/
title: cv
nav: true
nav_order: 2
---

{% assign cv_url = "/assets/pdf/MinhNguyenCV.pdf" | absolute_url %}

<iframe
  title="CV"
  src="https://drive.google.com/viewerng/viewer?embedded=true&url={{ cv_url }}"
  style="width: 100%; height: 80vh; border: none;"
></iframe>

<p class="text-center mt-2">
  <a href="{{ cv_url }}" target="_blank" rel="noopener noreferrer">Open the PDF in a new tab</a>
</p>
