---
layout: page
title: NASA Jet Propulsion Laboratory
description: Power Distribution Systems and Optimal Control
img: assets/img/proj_jpl/jpl_cover.jpg
importance: 2
category: research
---

I had an 8 month long internship at the NASA Jet Propulsion Laboratory robotics division working with the Steep Terrain Mobility team. There, I took ownership of the electrical system for an in-development rover and researched gait transition algorithms.

### Gait Transition Algorithms

The Steep Terrian Mobility Team was interested in a multi-modal robot concept which had multiple modes of locomotion. Said robots can be seen below.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/proj_jpl/asterix_obelix.jpg" title="asterix_obelix" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Asterix (left) and Obelix (right).
</div>

 I thought that the transitions between these locomotion modes would be of interest so I began a side-project looking into them. I landed on a couple trajectory optimization methods which I compared with experiments. The full results can be seen in [Trajectory Optimization Methods for Energy Efficient Gait Transitions on Multi-Modal Robots](https://www.minh02.com/assets/pdf/NguyenTrajectoryOptimization.pdf). The idea was to mantain joint and workspace continuity + minimize energy consumption during gait transitions.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/proj_jpl/joint_cont.png" title="joint_cont" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/proj_jpl/cartesian_cont.png" title="cartesian_cont" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Sketches for demonstrating joint and workspace continuity during gait transitions.
</div>

### Power Distribution Boards

I was also in charge of creating the electrical system for the new rover. I used my prior experience with PCBs to create Power Distribution Boards. One was responsible for taking in battery voltage and distributing it to motors and step-down converters. For safety, it included overcurrent protection and power monitoring. The second board was full of step-down converters for the different voltages needed by the robot's components. It also included overcurrent protection and power monitoring. After designing the boards, I assembled and tested them.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/proj_jpl/batteryboardaltium.png" title="battery_altium" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/proj_jpl/batteryboardtop.png" title="battery_top" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Battery Distribution Board Design
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/proj_jpl/stepdownboardaltium.png" title="stepdowntop" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/proj_jpl/stepdownboardtop.png" title="stepdowntop" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Step Down Board Design
</div>

I had a lot of fun with these boards and actually hand-soldered my smallest component yet (with a lot of trouble)! An 0102 capacitor which is below the IC in the bottom picture.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/proj_jpl/small_cap.jpeg" title="small_cap" class="img-fluid rounded z-depth-1" %}
    </div>
</div>