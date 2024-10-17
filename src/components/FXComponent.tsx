import { PixiComponent } from "@pixi/react";
import { Assets, Container, Texture } from "pixi.js";
import fx_setting from "/spritesheets/default-bundle.json?url";
import fx_spritesheet from "/spritesheets/revoltfx-spritesheet.json?url";
import { Emitter } from "@pixi/particle-emitter";

const img = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png";

const emitterConfig = {
  lifetime: {
    min: 0.5,
    max: 0.5,
  },
  frequency: 0.008,
  spawnChance: 1,
  particlesPerWave: 1,
  emitterLifetime: 0.31,
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
        texture: Texture.from(img),
      },
    },
  ],
};

interface ConteinerWithEmitter extends Container {
  emitter?: Emitter;
}

const FXComponent = PixiComponent<
  { [key: string]: unknown },
  ConteinerWithEmitter
>("Emitter", {
  create() {
    Assets.load([
      { alias: "fx_settings", src: fx_setting },
      { alias: "fx_settings", src: fx_spritesheet },
      { alias: "img_test", src: img },
    ]);
    return new Container();
  },
  applyProps(instance) {
    if (!instance.emitter) {
      // const texture = Assets.get("img_test");
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
