import DashTimeCard from "./DashTimeCard/DashTimeCard";
import userImage from '/images/image-jeremy.png'
import data from "/src/data/data.json";
import "./Dashboard.scss";
import {useState} from "react";

const timeData: timeData[] = data;

const timeFrames: string[] = ['Daily', 'Weekly', 'Monthly'];

export default function Dashboard() {
    const [period, setPeriod] = useState('Weekly');

    function toggleTimeFrame(event: React.ChangeEvent<HTMLInputElement>) {
        setPeriod(event.target.value)
    }
    
    return (
        <main className="dashboard">
            <div className="dashboard__grid">
                <section className="dashboard-user-card">
                    <div className="dashboard-user-card__user">
                        <img className='dashboard-user-card__image' src={userImage} alt="Jeremy Smiling"/>
                        
                        <div className='dashboard-user-card__text'>
                            <p>Report for</p>
                            <h1>Jeremy Robson</h1>
                        </div>
                    </div>

                    <div className="dashboard-user-card__timeframes">
                        <ul className="dashboard-user-card__timeframes-list">
                            {timeFrames.map((time) => (
                                <div className='dashboard-user-card__timeframe' key={time}>
                                    <input
                                        type="radio"
                                        className='dashboard-user-card__timeframe-radio'
                                        name="tipRate"
                                        id={time}
                                        value={time}
                                        checked={period === time}
                                        onChange={toggleTimeFrame}
                                    />
                                    <label className='dashboard-user-card__timeframe-label'  htmlFor={ time}>{time}</label>
                                </div>
                            ))}
                        </ul>
                    </div>
                </section>

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