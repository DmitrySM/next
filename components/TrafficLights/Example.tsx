import React, { useMemo, useState } from 'react';
import { factoryTrafficLights } from './FactoryTrafficLights';

export enum TrafficLights {
    carTrafficLight = 'CAR_TRAFFIC_LIGHT',
    streetcarTrafficLight = 'STREETCAR_TRAFFIC_LIGHT',
}

const trafficLights = [
    { value: TrafficLights.carTrafficLight, name: 'для авто' },
    { value: TrafficLights.streetcarTrafficLight, name: 'для трамвая' },
];

export enum Directions {
    stop = 'STOP',
    getReady = 'GET_READY',
    goStraight = 'GO_STRAIGHT',
    goLeft = 'GO_LEFT',
    goRight = 'GO_RIGHT',
}

const directions = [
    {
        value: Directions.stop,
        name: 'стой',
    },
    {
        value: Directions.getReady,
        name: 'приготовиться',
    },
    {
        value: Directions.goStraight,
        name: 'прямо',
    },
    {
        value: Directions.goLeft,
        name: 'на лево',
    },
    {
        value: Directions.goRight,
        name: 'на право',
    },
];

export function Example() {
    const [trafficLight, setTrafficLight] = useState(trafficLights[0].value);
    const [direction, setDirections] = useState(directions[0].value);

    const TrafficLight = useMemo(
        () => factoryTrafficLights({ type: trafficLight }),
        [trafficLight]
    );

    return (
        <div>
            <form>
                светофор:
                <select
                    value={trafficLight}
                    onChange={(v) => {
                        setTrafficLight(v.target.value as TrafficLights);
                    }}
                >
                    {trafficLights.map(({ value, name }) => {
                        return (
                            <option value={value} key={value}>
                                {name}
                            </option>
                        );
                    })}
                </select>
                <br />
                направление:
                <select
                    value={direction}
                    onChange={(v) => {
                        setDirections(v.target.value as Directions);
                    }}
                >
                    {directions.map(({ value, name }) => {
                        return (
                            <option value={value} key={value}>
                                {name}
                            </option>
                        );
                    })}
                </select>
            </form>
            <br />
            <TrafficLight direction={direction} />
        </div>
    );
}
