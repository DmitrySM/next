import React from 'react';
import { TrafficLightSection } from './TrafficLightSection';
import styles from './streetcarTrafficLight.module.css';
import { Directions } from './Example';

type Props = {
    direction: Directions;
};

export function StreetcarTrafficLight({ direction }: Props) {
    let isActiveTop = false;
    let isActiveTop2 = false;
    let isActiveTop3 = false;
    let isActiveBottom = false;
    switch (direction) {
        case Directions.stop:
        case Directions.getReady:
            isActiveTop = true;
            isActiveTop2 = true;
            isActiveTop3 = true;
            break;
        case Directions.goStraight:
            isActiveTop = false;
            isActiveTop2 = true;
            isActiveTop3 = false;
            isActiveBottom= true;
            break;
        case Directions.goLeft:
            isActiveTop = true;
            isActiveTop2 = false;
            isActiveTop3 = false;
            isActiveBottom= true;
            break;
        case Directions.goRight:
            isActiveTop = false;
            isActiveTop2 = false;
            isActiveTop3 = true;
            isActiveBottom= true;
            break;
        default:
            break;
    }

    return (
        <div className={styles.box}>
            <div className={styles.topRow}>
                <TrafficLightSection isActive={isActiveTop} activeColor="#eeeeee" />
                <TrafficLightSection isActive={isActiveTop2} activeColor="#eeeeee" />
                <TrafficLightSection isActive={isActiveTop3} activeColor="#eeeeee" />
            </div>
            <div className={styles.bottomRow}>
                <TrafficLightSection isActive={isActiveBottom} activeColor="#eeeeee" />
            </div>
        </div>
    );
}
