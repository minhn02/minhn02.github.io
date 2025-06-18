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
| CPU | [Intel i5-4460](https://ark.intel.com/content/www/us/en/ark/products/80817/intel-core-i54460-processor-6m-cache-up-to-3-40-ghz.html) | 2014 | Free 😁 (looking to upgrade because slow)
| Motherboard | [ASRock H81M-ITX](https://www.asrock.com/mb/Intel/H81M-ITX/) | ~2014 | Free 😁 (looking to upgrade because limited IO)|
| Storage | [Samsung 870 SSD](https://www.samsung.com/us/computing/memory-storage/solid-state-drives/870-evo-sata-2-5-ssd-1tb-mz-77e1t0b-am/) | 2020's | Bought
| Power Supply | [SX500-LG](https://www.silverstonetek.com/en/product/info/power-supplies/SX500-LG/) | 2016 | Bought
| Other | [TP-Link WiFi Card](https://www.tp-link.com/us/home-networking/pci-adapter/archer-t4e/) | 2020's | Motherboard doesn't have onboard WiFi

At first it was sitting on my floor, but I had just bought a 3D printer so I made a minimal case just to keep everything together.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/proj_homeserver/homeserver_cad.jpg" title="homeserver_cad" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/proj_homeserver/homeserver_sideview.JPG" title="homeserver_sideview" class="img-fluid rounded z-depth-1" %}
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
        {% include figure.liquid path="assets/img/proj_homeserver/homeserver_diagram.jpeg" title="homeserver_diagram" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Diagram of software in Docker containers
</div>
