---
layout: page
title: Hybrid Robotics Lab
description: Cooperative multi-agent reinforcement learning
img: assets/img/proj_hybrid/hybrid_cover.jpg
importance: 3
category: research
---

At the [Hybrid Robotics Lab](https://hybrid-robotics.berkeley.edu/), I work on a research project with multiple quadraped robots (Unitree [A1](https://www.unitree.com/a1/) and [GO1](https://www.unitree.com/go1)s). The goal is to use a reinforcement learning policy to enable the robots to cooperatively pull a load to a goal position. My main work has been in translating prior simulation work to real life experimetns. A central policy takes in observations from each robot and then distributes the next action for each robot to take.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/proj_hybrid/2robot.png" title="2robot" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/proj_hybrid/3robot.png" title="3robot" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Experiments with quadrapeds.
</div>