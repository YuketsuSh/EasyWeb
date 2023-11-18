# EasyWeb

EasyWeb is a JavaScript API designed to simplify front-end development by providing tools for handling events, managing CSS animations, transitions, and configuring web parameters effortlessly.

## Features

- **Event Handling:** Simplified event listeners and removal.
- **Animation Management:** Easily handle CSS animations and transitions.
- **Configuration:** Load configuration via JSON for easy setup.
- **Page Scroll Control:** Enable/disable page scrolling.
- **Utility Functions:** Includes window size retrieval and more.

## Usage

1. Include the `EasyWeb.js` script in your project.
2. Initialize EasyWebEvents using `EasyWebEvents.init()` to load configurations and set up animations.

## Example

```javascript
// Sample code snippet demonstrating EasyWebEvents usage
const element = document.getElementById('myElement');

// Registering an event
EasyWebEvents.on(element, 'click', (event) => {
  // Perform actions on click
});

// Configuring and triggering an animation
EasyWebEvents.animate(element, 'fadeInOut', 1500, 'ease-in-out');
```

## Documentation

Find the API documentation [here](https://github.com/YuketsuSh/EasyWeb/blob/main/docs/Configuration.md).
