---
layout: page
title: Home Server
description: Small media server
img: assets/img/proj_homeserver/homeserver_cover.jpg
importance: 1
category: fun
---

I was motivated to make a media server to watch [One Pace](https://onepace.net/), an edited version of One Piece that makes the 1000+ episodes go by quicker. Luckily, JPL has a Slack channel dedicated to giving away *free* stuff and I was lucky enough to snag some old computer parts. Although the parts were from 2014, they proved fast enough to download media and do video decoding (sometimes really slow so looking to upgrade soon).

I'm not too certain on the actual specs as I got the parts second hand, but from what I can gather they are

| Component         | Model | Year Released | Notes |
|--------------|-----------|------------| ------ |
| CPU | [Intel i5-4460](https://ark.intel.com/content/www/us/en/ark/products/80817/intel-core-i54460-processor-6m-cache-up-to-3-40-ghz.html) | 2014 | Free :D (looking to upgrade because slow)
| Motherboard | [ASRock H81M-ITX](https://www.asrock.com/mb/Intel/H81M-ITX/) | ~2014 | Free:D (looking to upgrade because limited IO)|
| Storage | 1TB Samsung SSD | 2020's | Bought

I also had to buy a WiFi card and a power supply to make it fully functional.

At first it was sitting on my floor, but I had just bought a 3D printer so I made a minimal case just to keep everything together.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/proj_homeserver/homeserver_cad.jpg" title="homeserver_cad" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/proj_homeserver/homeserver_sideview.JPG" title="homeserver_sideview" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    CAD and Side View of 3D printed server mount
</div>

In terms of the actual server setup, I installed Ubuntu Server and used Docker Compose to setup the software.

Here's the current docker compose file in .txt format: [Current docker compose file](https://minh02.com/assets/img/proj_homeserver/docker-compose.txt)

Sonarr and Radarr enable easy library management which automatically sends media to be downloaded through qBittorent. These files can then be viewed through Jellyfin which is accessed through the browser (on the local network) or an app.


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/proj_homeserver/homeserver_diagram.jpeg" title="homeserver_diagram" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Diagram of software in Docker containers
</div>
