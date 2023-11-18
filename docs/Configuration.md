## EasyWeb API Configuration

The EasyWeb API offers the capability to configure its settings via JSON files.<br> These files allow defining default parameters, pre-configuring animations, and adding custom animations for easy use in your front-end projects.

### Configuration Files

#### EasyWeb.json

This file allows defining global parameters for the EasyWeb API. Here's an example structure:

```json
{
  "defaultAnimationDuration": 1000,
  "defaultTimingFunction": "ease",
  "scrollBehavior": "smooth",
  "enablePageScrollOnInit": true
}
```

### Description
`defaultAnimationDuration`: Default animation duration (in ms).<br>
`defaultTimingFunction`: Default timing function for animations.<br>
`scrollBehavior`: Default scroll behavior for animations.<br>
`enablePageScrollOnInit`: Enable/disable page scroll behavior on API initialization.<br>

### animated.json

This file contains a list of animations, including pre-defined and user-created animations.

### Here's an example structure:

```json
{
  "animations": [
    {
      "name": "fadeInOut",
      "keyframes": [
        { "opacity": 0, "offset": 0 },
        { "opacity": 1, "offset": 0.5 },
        { "opacity": 0, "offset": 1 }
      ],
      "duration": 1500,
      "timingFunction": "ease-in-out"
    },
    {
      "name": "customAnimation",
      "keyframes": [
        { "opacity": 0, "transform": "translateX(-100%)", "offset": 0 },
        { "opacity": 1, "transform": "translateX(0)", "offset": 0.5 },
        { "opacity": 0, "transform": "translateX(100%)", "offset": 1 }
      ],
      "duration": 2000,
      "timingFunction": "linear"
    },
    {
      "name": "pulseEffect",
      "customProperties": true,
      "animationDefinition": {
        "keyframes": [
          { "scale": 1, "offset": 0 },
          { "scale": 1.5, "offset": 0.5 },
          { "scale": 1, "offset": 1 }
        ],
        "customProperties": [
          {
            "property": "scale",
            "from": 1,
            "to": 1.5
          }
        ]
      }
    }
  ]
}


```

### Description

`animations`: List of animations including pre-defined and user-created animations.
Each animation includes properties such as `name`, `keyframes`, `duration`, and `timingFunction`.
For user-created animations with `customProperties`, the `animationDefinition` allows specifying custom keyframes and properties.

### Internal Use (Inside Your Application)

Internal Configuration:

```html
<!-- Load EasyWeb script internally -->
<script src="path/to/EasyWeb.js"></script>
<script>
  // Load EasyWeb and animated configuration files internally
  EasyWebEvents.init();
</script>
```

Internal Animation Usage:

```html
<!-- Triggering an internal animation -->
<button onclick="animateElement()">Animate Element</button>
<script>
  function animateElement() {
    const element = document.getElementById('targetElement');
    EasyWebEvents.animate(element, 'fadeInOut', 1500, 'ease-in-out');
  }
</script>
```

### External Use (Client-Side Integration)

```html
<!-- Include EasyWeb script externally -->
<script src="https://api.quantiumflow.com/EasyWeb.js"></script>
<script>
  // Load EasyWeb and animated configuration files from external URLs
  EasyWebEvents.loadConfig('assets/EasyWeb/configs/EasyWeb.json');
  EasyWebEvents.loadAnimations('assets/EasyWeb/configs/animated.json');
</script>
```

External Animation Usage:

```html
<!-- Triggering an external animation -->
<button onclick="animateTarget()">Animate Target</button>
<script>
  function animateTarget() {
    const targetElement = document.querySelector('.target-element');
    EasyWebEvents.animate(targetElement, 'fadeInOut', 1500, 'ease-in-out');
  }
</script>
```
