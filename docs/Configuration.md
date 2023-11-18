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

### Example structure:

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
    }
    // Add other animations here
  ]
}

```

### Description

`animations`: List of pre-configured animations.
Each animation includes properties such as `name`, `keyframes`, `duration`, and `timingFunction`.
