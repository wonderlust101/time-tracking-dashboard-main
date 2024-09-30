import React from "react";
import "./DashUserCard.scss";

type dashUserCardProps = {
    period: string;
    user: string;
    profileImageUrl: string;
    toggleTimeFrame: React.ChangeEventHandler<HTMLInputElement>;
}

const timeFrames: string[] = ["Daily", "Weekly", "Monthly"];

export default function DashUserCard({period, user, profileImageUrl, toggleTimeFrame}: dashUserCardProps) {
    return (
        <section className="dashboard-user-card">
            <div className="dashboard-user-card__user">
                <img className="dashboard-user-card__image" src={`./images/${profileImageUrl}`} alt="Jeremy Smiling"/>

                <div className="dashboard-user-card__text">
                    <p className='dashboard-user-card__sub-header'>Report for</p>
                    <h1>{user}</h1>
                </div>
            </div>

            <div className="dashboard-user-card__timeframes">
                <ul className="dashboard-user-card__timeframes-list">
                    {timeFrames.map((time) => (
                        <div className="dashboard-user-card__timeframe" key={time}>
                            <input
                                type="radio"
                                className="dashboard-user-card__timeframe-radio"
                                name="tipRate"
                                id={time}
                                value={time}
                                checked={period === time}
                                onChange={toggleTimeFrame}
                            />
                            
                            <label
                                className="dashboard-user-card__timeframe-label"
                                htmlFor={time}
                            >
                                {time}
                            </label>
                        </div>
                    ))}
                </ul>
            </div>
        </section>
    );
}