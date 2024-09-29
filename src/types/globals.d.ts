declare global {
    
    type timeData = {
        title: string;
        timeframes: timeFrame;
    }
    
    type timeFrame = {
        daily: times;
        weekly: times;
        monthly: times;
    }
    
    type times = {
        current: number;
        previous: number;
    }
    
}

export {};