import React, {useState} from "react";

import DashTimeCard from "./DashTimeCard/DashTimeCard";
import DashUserCard from "./DashUserCard";

import data from "/src/data/data.json";

import "./Dashboard.scss";

const timeData: timeData[] = data;

export default function Dashboard() {
    const [period, setPeriod] = useState("Weekly");

    function toggleTimeFrame(event: React.ChangeEvent<HTMLInputElement>) {
        setPeriod(event.target.value);
    }

    return (
        <main className="dashboard grid-bleed">
            <div className="dashboard__grid">

                <DashUserCard
                    period={period}
                    user="Jeremy Robson"
                    profileImageUrl="image-jeremy.png"
                    toggleTimeFrame={toggleTimeFrame}
                />

                {timeData.map((category) => (
                    <DashTimeCard
                        key={category.title}
                        title={category.title}
                        timeFrames={category.timeframes}
                        period={period}
                    />
                ))}
            </div>
        </main>
    );
}