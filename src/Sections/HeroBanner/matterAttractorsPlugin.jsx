import Matter from 'matter-js';

// Define the attractors plugin manually
const matterAttractorsPlugin = {
  name: 'matter-attractors',
  version: '0.1.0',
  install: function (matter) {
    matter.Body.Attractors = {};
    matter.Body.Attractors.gravity = function (bodyA, bodyB) {
      return {
        x: (bodyA.position.x - bodyB.position.x) * 1e-6,
        y: (bodyA.position.y - bodyB.position.y) * 1e-6,
      };
    };
  },
};

Matter.Plugin.register(matterAttractorsPlugin);
export default matterAttractorsPlugin;
