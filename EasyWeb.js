const EasyWebEvents = {

    animations: {},

    on: (element, eventType, callback) => {
      element.addEventListener(eventType, callback);
    },
  
    off: (element, eventType, callback) => {
      element.removeEventListener(eventType, callback);
    },

    loadConfig: async (configPath) => {
        try {
          const response = await fetch(configPath);
          const config = await response.json();
          return config;
        } catch (error) {
          console.error('Error loading configuration:', error);
          return null;
        }
    },

    init: async () => {
        const easyWebConfig = await EasyWebEvents.loadConfig('EasyWeb.json');
        const animatedConfig = await EasyWebEvents.loadConfig('animated.json');
        if (easyWebConfig) {
            if (easyWebConfig.defaultAnimationDuration){
                EasyWebEvents.defaultAnimationDuration = easyWebConfig.defaultAnimationDuration;
            }
            if (easyWebConfig.defaultTimingFunction){
                EasyWebEvents.defaultTimingFunction = easyWebConfig.defaultTimingFunction;
            }
        }

        if (animatedConfig && animatedConfig.animations){
            Object.keys(animatedConfig.animations).forEach((animationName) => {
                const animation = animatedConfig.animations[animationName];
                EasyWebEvents.animations[animationName] = animation;
            });
        }

        if (easyWebConfig && easyWebConfig.enablePageScrollOnInit) {
            EasyWebEvents.enablePageScroll();
        }else{
            EasyWebEvents.disablePageScroll();
        }

    },
  
    animate: (element, animationName, duration = 1000, timingFunction = 'ease') => {
      element.style.animation = `${animationName} ${duration}ms ${timingFunction}`;
    },
  
    stopAnimation: (element) => {
      element.style.animation = 'none';
    },
  
    transition: (element, property, duration = 500, timingFunction = 'ease', delay = 0) => {
      element.style.transition = `${property} ${duration}ms ${timingFunction} ${delay}ms`;
    },
  
    removeTransition: (element) => {
      element.style.transition = 'none';
    },
  
    animateWithClasses: (element, classesArray, interval = 1000) => {
      let index = 0;
      const intervalId = setInterval(() => {
        element.className = classesArray[index];
        index = (index + 1) % classesArray.length;
      }, interval);
  
      const stopAnimation = () => clearInterval(intervalId);
      return stopAnimation;
    },
  
    triggerEvent: (element, eventType, eventData) => {
      const event = new CustomEvent(eventType, { detail: eventData });
      element.dispatchEvent(event);
    },
  
    isAnimating: (element) => {
        const computedStyle = window.getComputedStyle(element);
        const animationName = computedStyle.getPropertyValue('animation-name');
        return animationName !== 'none' && animationName !== '';
    },

    isTransitioning: (element) => {
        const computedStyle = window.getComputedStyle(element);
        const transitionProperty = computedStyle.getPropertyValue('transition-property');
        return transitionProperty !== 'none' && transitionProperty !== '';
    },

    scrollToElement: (element, options = { behavior: 'smooth' }) => {
        element.scrollIntoView(options);
    },

    getClickCoordinates: (event) => {
        if (event.clientX && event.clientY) {
          return { x: event.clientX, y: event.clientY };
        } else if (event.touches && event.touches.length) {
          return { x: event.touches[0].clientX, y: event.touches[0].clientY };
        }
        return { x: 0, y: 0 };
    },

    delayExecution: (func, delay = 1000) => {
        return setTimeout(func, delay);
    },

    isAnimationSupported: () => {
        const animation = document.createElement('div').style.animationName;
        return animation !== undefined && animation !== '';
    },

    isTransitionSupported: () => {
        const transition = document.createElement('div').style.transition;
        return transition !== undefined && transition !== '';
    },

    disablePageScroll: () => {
        document.body.style.overflow = 'hidden';
    },

    enablePageScroll: () => {
        document.body.style.overflow = '';
    },

    getWindowSize: () => {
        return {
          width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
          height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
        };
    },

    loadAnimations: async (animatedConfigPath) => {
        try {
          const response = await fetch(animatedConfigPath);
          const animatedConfig = await response.json();
    
          if (animatedConfig && animatedConfig.animations) {
            animatedConfig.animations.forEach(animation => {
              EasyWebEvents.animations[animation.name] = animation;
            });
          }
        } catch (error) {
          console.error('Error loading animations:', error);
        }
      },

      createCustomAnimation: (animationName, animationDefinition) => {
        EasyWebEvents.animations[animationName] = {
          name: animationName,
          customProperties: true,
          animationDefinition: animationDefinition
        };
      },

      animateWithCustomProperties: (element, animationName, duration = 1000, timingFunction = 'ease') => {
        const animation = EasyWebEvents.animations[animationName];
        if (animation && animation.customProperties && animation.animationDefinition) {
          const { keyframes, customProperties } = animation.animationDefinition;
          if (keyframes && Array.isArray(keyframes) && customProperties) {
            let keyframeIndex = 0;
            const startTime = performance.now();
    
            const applyKeyframe = (time) => {
              const elapsed = time - startTime;
              const progress = Math.min(elapsed / duration, 1);
    
              const style = {};
              customProperties.forEach(property => {
                const { property: propName, from, to } = property;
                const delta = to - from;
                const value = from + delta * progress;
                style[propName] = `${value}${property.unit || ''}`;
              });
    
              Object.assign(element.style, style);
    
              if (progress < 1) {
                requestAnimationFrame(applyKeyframe);
              }
            };
    
            requestAnimationFrame(applyKeyframe);
          } else {
            console.error('Invalid animation definition.');
          }
        } else {
          console.error('Custom animation not found or invalid.');
        }
      }

  };

EasyWebEvents.init();
  
