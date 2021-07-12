import { Directions, TrafficLights } from './Example';
import { StreetcarTrafficLight } from './StreetcarTrafficLight';
import { CarTrafficLight } from './CarTrafficLight';

interface ProductProps {
    direction: Directions;
}

interface Factory {
    type: TrafficLights;
}

export type ProductElement = (props: ProductProps) => JSX.Element;

export function factoryTrafficLights({ type }: Factory): ProductElement {
    const trafficLights = {
        [TrafficLights.carTrafficLight]: CarTrafficLight,
        [TrafficLights.streetcarTrafficLight]: StreetcarTrafficLight,
        default: CarTrafficLight,
    };
    
    return  trafficLights[type]
        ? trafficLights[type]
        : trafficLights.default;
}
