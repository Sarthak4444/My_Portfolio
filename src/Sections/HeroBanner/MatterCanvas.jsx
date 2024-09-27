import React, { useEffect, useRef } from "react";
import Matter from "matter-js";
import matterAttractorsPlugin from "./matterAttractorsPlugin";
import matterWrapPlugin from "./matterWrapPlugin";

const MatterCanvas = () => {
  const canvasRef = useRef(null);
  const engineRef = useRef(null);
  const runnerRef = useRef(null);
  useEffect(() => {
    const dimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  
    Matter.use(matterAttractorsPlugin);
    Matter.use(matterWrapPlugin);
  
    const Engine = Matter.Engine,
      Events = Matter.Events,
      Runner = Matter.Runner,
      Render = Matter.Render,
      World = Matter.World,
      Body = Matter.Body,
      Mouse = Matter.Mouse,
      Common = Matter.Common,
      Bodies = Matter.Bodies;
  
    const engine = Engine.create();
    engine.world.gravity.y = 0;
    engine.world.gravity.x = 0;
    engine.world.gravity.scale = 0.1;
    const render = Render.create({
      canvas: canvasRef.current,
      engine: engine,
      options: {
        showVelocity: false,
        width: dimensions.width,
        height: dimensions.height,
        wireframes: false,
        background: "transparent",
      },
    });
  
    const attractiveBody = Bodies.circle(
      render.options.width / 2,
      render.options.height / 2,
      Math.max(dimensions.width / 12, dimensions.height / 12) / 1,
      {
        render: {
          fillStyle: `#00000040`,
          strokeStyle: `#000`,
          lineWidth: 1,
        },
        isStatic: true,
      }
    );
  
    World.add(engine.world, attractiveBody);
  
    for (let i = 0; i < 30; i++) {
      let x = Common.random(0, render.options.width);
      let y = Common.random(0, render.options.height);
      let s = Common.random() > 0.7? Common.random(10, 30) : Common.random(40, 50);
      let polygonNumber = Common.random(3, 7);
      const body = Bodies.polygon(x, y, polygonNumber, s, {
        mass: s / 3,
        friction: 0,
        frictionAir: 0.02,
        angle: Math.round(Math.random() * 360),
        render: {
          fillStyle: "#222222",
          strokeStyle: `#000000`,
          lineWidth: 4,
        },
      });
      World.add(engine.world, body);
    }


    World.add(engine.world, Body);
  
    for (let i = 0; i < 40; i++) {
      let x = Common.random(0, render.options.width);
      let y = Common.random(0, render.options.height);
      let s = Common.random() > 0.35? Common.random(4, 30) : Common.random(30, 50);
      let polygonNumber = Common.random(6, 20);
      const body = Bodies.polygon(x, y, polygonNumber, s, {
        mass: s / 8,
        friction: 0,
        frictionAir: 0.02,
        angle: Math.round(Math.random() * 360),
        render: {
          fillStyle: "#14E95650",
          strokeStyle: `#000000`,
          lineWidth: 5,
        },
      });
      World.add(engine.world, body);
    }

    World.add(engine.world, Body);
  
    for (let i = 0; i < 16; i++) {
      let x = Common.random(0, render.options.width);
      let y = Common.random(0, render.options.height);
      let s = Common.random() > 0.3? Common.random(4, 30) : Common.random(30, 50);
      let polygonNumber = Common.random(2, 20);
      const body = Bodies.polygon(x, y, polygonNumber, s, {
        mass: s / 8,
        friction: 0,
        frictionAir: 0.02,
        angle: Math.round(Math.random() * 360),
        render: {
          fillStyle: "#135f2b60",
          strokeStyle: `#000000`,
          lineWidth: 4,
        },
      });
      World.add(engine.world, body);
    }

  
    const mouse = Mouse.create(render.canvas);
    render.mouse = mouse;
  
    // Update position of the attractiveBody based on mouse position
    Events.on(engine, "afterUpdate", () => {
      if (mouse.position.x && mouse.position.y) {
        Body.setPosition(attractiveBody, {
          x: mouse.position.x,
          y: mouse.position.y,
        });
      }
  
      // Apply attraction to all bodies
      engine.world.bodies.forEach((body) => {
        if (body !== attractiveBody) {
          const dx = attractiveBody.position.x - body.position.x;
          const dy = attractiveBody.position.y - body.position.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
  
          // Increase attraction range
          const attractionRange = 600; // Wider range for attraction
          if (distance < attractionRange) {
            const forceMagnitude = (1 - distance / attractionRange) * 0.004; // Force decreases with distance
            Body.applyForce(body, body.position, {
              x: (dx / distance) * forceMagnitude,
              y: (dy / distance) * forceMagnitude,
            });
          }
        }
      });
    });
  
    Matter.Runner.run((runnerRef.current = Runner.create()), engine);
    Matter.Render.run(render);
  
    return () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runnerRef.current);
      engine.world.bodies.forEach((body) => World.remove(engine.world, body));
    };
  }, []);
  

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <canvas
        ref={canvasRef}
        style={{ display: "block", width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default MatterCanvas;