export type Time = "GOING_TIME" | "REST_PERIOD";
export type Stroke = "FRONTCRAWL" | "BACKSTROKE" | "BREASTSTROKE" | "BUTTERFLY";
export type SetTitle = "WARM_UP" | "PRE_SET" | "MAIN_SET" | "DRILL_SET" | "COOL_DOWN";

export interface SwimSet {
  title: string,
  sets: Array<Set>;
}

export interface Set {
  title: SetTitle;
  swims: Array<Swim>;
  repetitions: Array<SetRepetition>;
}

export interface SetRepetition {
  stroke: Stroke;
}

export interface Swim {
  blocks: Array<SwimBlock>;
}

export interface SwimBlock {
  distance: number;
  time: number;
  timeType: Time;
  stroke: Stroke | string | undefined;
  repeat: number;
}

export const sampleSwimSet: SwimSet = {
  title: "Sample Swim Set",
  sets: [
    {
      title: "WARM_UP",
      swims: [
        { blocks: [{ repeat: 1, distance: 200, time: 30, timeType: "REST_PERIOD", stroke: "FRONTCRAWL" }] },
        { blocks: [{ repeat: 1, distance: 100, time: 30, timeType: "REST_PERIOD", stroke: "BACKSTROKE" }] },
        { blocks: [{ repeat: 4, distance: 50, time: 20, timeType: "REST_PERIOD", stroke: "IM SWITCH" }] }
      ],
      repetitions: []
    },
    {
      title: "MAIN_SET",
      swims: [
        {
          blocks: [
            { repeat: 1, distance: 100, time: 10, timeType: "REST_PERIOD", stroke: undefined },
            { repeat: 1, distance: 25, time: 30, timeType: "REST_PERIOD", stroke: undefined }
          ]
        },
        {
          blocks: [
            { repeat: 1, distance: 75, time: 10, timeType: "REST_PERIOD", stroke: undefined },
            { repeat: 1, distance: 25, time: 30, timeType: "REST_PERIOD", stroke: undefined }
          ]
        },
        {
          blocks: [
            { repeat: 1, distance: 50, time: 10, timeType: "REST_PERIOD", stroke: undefined },
            { repeat: 1, distance: 25, time: 30, timeType: "REST_PERIOD", stroke: undefined }
          ]
        },
        {
          blocks: [
            { repeat: 1, distance: 25, time: 10, timeType: "REST_PERIOD", stroke: undefined },
            { repeat: 1, distance: 25, time: 30, timeType: "REST_PERIOD", stroke: undefined }
          ]
        }
      ],
      repetitions: [{ stroke: "FRONTCRAWL" }, { stroke: "BACKSTROKE" }, { stroke: "BREASTSTROKE" }]
    }
  ]
};
