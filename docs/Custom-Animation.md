# Creating Custom Animations without CSS Rules

EasyWeb API allows the creation of custom animations by defining animation behaviors programmatically, providing flexibility beyond conventional CSS-defined animations.

## Creating Flame Animation Example

### Step 1: Define the Flame Animation

Create a JSON structure defining the flame animation keyframes and custom properties:

```json
{
  "animations": [
    {
      "name": "flameEffect",
      "customProperties": true,
      "animationDefinition": {
        "keyframes": [
          { "scale": 1, "offset": 0 },
          { "scale": 1.2, "offset": 0.5 },
          { "scale": 1, "offset": 1 }
        ],
        "customProperties": [
          { "property": "scale", "from": 1, "to": 1.2 }
        ]
      }
    }
  ]
}
```

### Step 2: Create the Custom Flame Animation

Load the animation JSON data and apply it using EasyWebEvents:

```javascript
// Load animations from JSON file
EasyWebEvents.loadAnimations('animations.json');

// Apply the created 'flameEffect' animation to an HTML element
const flameElement = document.getElementById('flameElement');
EasyWebEvents.animateWithCustomProperties(flameElement, 'flameEffect', 2000, 'ease');
```

Replace `'flameElement'` with the ID or reference to the HTML element you wish to animate with the flame effect. Adjust the animation duration and timing function according to your preference.

### Step 3: Enjoy the Flame Animation

View your webpage to see the applied custom flame animation on the specified HTML element.

### Note
- Utilize the `loadAnimations` function to load custom animations from a JSON file.
- Adjust the animation properties within the provided API functions to create diverse and engaging visual effects.
- Experiment with various keyframes and animation definitions to achieve unique custom animations tailored to your project.

Now, explore the possibilities and bring dynamic custom animations to your web content with EasyWeb API!
