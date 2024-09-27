import Matter from 'matter-js';

const matterWrapPlugin = {
  name: 'matter-wrap',
  version: '0.1.0',
  install: function (matter) {
    matter.Body.wrap = function (body, bounds) {
      const { min, max } = body.bounds;

      if (max.x < bounds.min.x) {
        Matter.Body.setPosition(body, {
          x: bounds.max.x,
          y: body.position.y,
        });
      }

      if (min.x > bounds.max.x) {
        Matter.Body.setPosition(body, {
          x: bounds.min.x,
          y: body.position.y,
        });
      }

      if (max.y < bounds.min.y) {
        Matter.Body.setPosition(body, {
          x: body.position.x,
          y: bounds.max.y,
        });
      }

      if (min.y > bounds.max.y) {
        Matter.Body.setPosition(body, {
          x: body.position.x,
          y: bounds.min.y,
        });
      }
    };
  },
};

Matter.Plugin.register(matterWrapPlugin);
export default matterWrapPlugin;
