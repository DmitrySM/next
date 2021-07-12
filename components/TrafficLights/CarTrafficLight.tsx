import { TrafficLightSection } from './TrafficLightSection';
import styles from './carTrafficLight.module.css';
import { Directions } from './Example';

type Props = {
    direction: Directions;
};

export function CarTrafficLight({ direction }: Props) {
    let isActive = false;
    let isActive2 = false;
    let isActive3 = false;
    switch (direction) {
        case Directions.stop:
            isActive = true;
            isActive2 = false;
            isActive3 = false;
            break;
        case Directions.getReady:
            isActive = false;
            isActive2 = true;
            isActive3 = false;
            break;
        case Directions.goStraight:
        case Directions.goLeft:
        case Directions.goRight:
            isActive = false;
            isActive2 = false;
            isActive3 = true;
            break;

        default:
            break;
    }

    return (
        <div className={styles.box}>
            <TrafficLightSection isActive={isActive} activeColor="#ff0000" />
            <TrafficLightSection isActive={isActive2} activeColor="#ffee00" />
            <TrafficLightSection isActive={isActive3} activeColor="#24af02" />
        </div>
    );
}
