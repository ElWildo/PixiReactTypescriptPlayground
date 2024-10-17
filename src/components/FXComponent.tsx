import { PixiComponent } from "@pixi/react";
import {
  Application,
  Assets,
  Container,
  ICanvas,
  Resource,
  Texture,
} from "pixi.js";
import { Emitter } from "@pixi/particle-emitter";

interface ConteinerWithEmitter extends Container {
  emitter?: Emitter;
}

const FXComponent = PixiComponent<
  {
    app: Application<ICanvas>;
    [key: string]: unknown;
  },
  ConteinerWithEmitter
>("Emitter", {
  create(props) {
    const { app } = props;
    const container = new Container();
    container.x = app.screen.width / 2;
    container.y = app.screen.height / 2;
    return container;
  },
  applyProps(instance) {
    if (!instance.emitter) {
      const emitterConfig = {
        lifetime: {
          min: 0.5,
          max: 0.5,
        },
        frequency: 0.008,
        spawnChance: 1,
        particlesPerWave: 1,
        emitterLifetime: Infinity,
        maxParticles: 1000,
        pos: {
          x: 0,
          y: 0,
        },
        addAtBack: false,
        behaviors: [
          {
            type: "alpha",
            config: {
              alpha: {
                list: [
                  {
                    value: 0.8,
                    time: 0,
                  },
                  {
                    value: 0.1,
                    time: 1,
                  },
                ],
              },
            },
          },
          {
            type: "scale",
            config: {
              scale: {
                list: [
                  {
                    value: 1,
                    time: 0,
                  },
                  {
                    value: 0.3,
                    time: 1,
                  },
                ],
              },
            },
          },
          {
            type: "color",
            config: {
              color: {
                list: [
                  {
                    value: "fb1010",
                    time: 0,
                  },
                  {
                    value: "f5b830",
                    time: 1,
                  },
                ],
              },
            },
          },
          {
            type: "moveSpeed",
            config: {
              speed: {
                list: [
                  {
                    value: 200,
                    time: 0,
                  },
                  {
                    value: 100,
                    time: 1,
                  },
                ],
                isStepped: false,
              },
            },
          },
          {
            type: "rotationStatic",
            config: {
              min: 0,
              max: 360,
            },
          },
          {
            type: "spawnShape",
            config: {
              type: "torus",
              data: {
                x: 0,
                y: 0,
                radius: 10,
              },
            },
          },
          {
            type: "textureSingle",
            config: {
              texture: Assets.get<Texture<Resource>>("fx-flame01"),
            },
          },
        ],
      };
      instance.emitter = new Emitter(instance, emitterConfig);
      let elapsed = Date.now();

      const t = () => {
        if (instance.emitter) {
          requestAnimationFrame(t);
          const now = Date.now();
          instance.emitter.update((now - elapsed) * 0.001);
          elapsed = now;
        }
      };
      t();
      instance.emitter.emit = true;
    }
  },
  willUnmount(instance) {
    if (instance.emitter) {
      instance.emitter.emit = false;
      instance.emitter.cleanup();
      instance.emitter.destroy();
    }
  },
});

export default FXComponent;
