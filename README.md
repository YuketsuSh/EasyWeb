# EasyWeb - JavaScript Web Development API

EasyWeb is a versatile JavaScript API designed to simplify web development tasks and facilitate event handling, animations, and more. This API offers functionalities for easy integration across various web frameworks and provides flexibility in configuration.

## Features

- **Event Handling:** Simplifies event attachment and removal on HTML elements.
- **Configuration:** Easily load and manage configurations using `loadConfig` method with customizable paths.
- **Animation Support:** Utilize pre-defined CSS-based animations from the provided `animated.json` configuration file.
- **Custom Animation Creation:** Define and create your own animations using JSON configuration.
- **Scroll Control:** Enable or disable page scrolling easily.
- **Element Animation:** Initiate element animations using `animate` and `stopAnimation` methods.
- **Transition Management:** Apply transitions to elements using `transition` and `removeTransition` methods.
- **Utilities:** Includes utilities like `getClickCoordinates`, `delayExecution`, `isAnimationSupported`, `isTransitionSupported`, `getWindowSize`, and more.

## Getting Started

To start using EasyWeb in your project:

1. Include the EasyWeb script in your HTML:
   ```html
   <script src="path/to/EasyWeb.js"></script> or <script src="https://api.quantiumflow.com/EasyWeb.js"></script>
   ```

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
