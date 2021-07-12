import styles from './trafficLightSection.module.css';

type Props = {
    activeColor: string;
    isActive?: boolean;
};

export function TrafficLightSection({
    isActive = false,
    activeColor = '#000000',
}: Props) {
    return (
        <div className={styles.box}>
            <div
                className={styles.lamp}
                style={{ backgroundColor: isActive ? activeColor : '#000000' }}
            ></div>
        </div>
    );
}
