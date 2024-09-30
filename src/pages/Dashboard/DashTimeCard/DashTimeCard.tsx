import {useEffect, useState} from "react";
import menuIcon from "/images/icon-ellipsis.svg";

import "./DashTimeCard.scss";

type dashTimeCardProps = {
    title: string;
    timeFrames: timeFrame;
    period: string;
}

const defaultTimeFrame: times = {
    current : 0,
    previous: 0
};

export default function DashTimeCard({title, timeFrames, period}: dashTimeCardProps) {
    const [timeframeData, setTimeframeData] = useState<times>(defaultTimeFrame);

    const cardClass = title.toLowerCase().replace(/\s+/g, "-");

    useEffect(() => {
        if (period === "Daily") {
            setTimeframeData(timeFrames.daily);
        }
        else if (period === "Weekly") {
            setTimeframeData(timeFrames.weekly);
        }
        else if (period === "Monthly") {
            setTimeframeData(timeFrames.monthly);
        }

    }, [period]);

    return (
        <section className="time-card">
            <div className={`time-card__icon-section time-card__icon-section--${cardClass}`}>
                <img className="time-card__icon" src={`/images/icon-${cardClass}.svg`} alt=""/>
            </div>

            <div className="time-card__content">
                <div className="time-card__header">
                    <h2 className="time-card__title">{title}</h2>
                    <img src={menuIcon} alt="" role="presentation"/> {/*TODO: Turn to component to hover colors*/}
                </div>

                <div className="time-card__times">
                    <p className="time-card__current-time">{timeframeData.current}hrs</p>
                    <p className="time-card__previous-time">Last Week - {timeframeData.previous}hrs</p>
                </div>
            </div>
        </section>
    );
}