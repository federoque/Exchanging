export function dateFormat(date) {
    const dateObj = new Date(date);

    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0')
    const day = String(dateObj.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

export function metricFormat(metric){
    return {
        id: metric.data.id,
        name: metric.data.name,
        price_usd: metric.data.market_data.price_usd.toFixed(2),
        percent_change_usd_last_1_hour:  metric.data.market_data.percent_change_usd_last_1_hour.toFixed(2),
        current_marketcap_usd: `${(metric.data.marketcap.current_marketcap_usd/1000000000).toFixed(2)}B`,
        real_volume_last_24_hours: `${(metric.data.market_data.real_volume_last_24_hours/1000000000).toFixed(2)}B`,
        percent_change_last_1_week: metric.data.roi_data.percent_change_last_1_week.toFixed(2),
        percent_change_last_1_month: metric.data.roi_data.percent_change_last_1_month.toFixed(2),
        percent_change_last_1_year: metric.data.roi_data.percent_change_last_1_year.toFixed(2)
    }
}

export function timeSeriesFormat(timeseries){
    return {
        id: timeseries.data.id,
        name: timeseries.data.name,
        time_series:[
            {name: 'day_one_open', value: timeseries.data.values[0][1]},
            {name: 'day_one_close', value: timeseries.data.values[0][4]},
            {name: 'day_two_open', value: timeseries.data.values[1][1]},
            {name: 'day_two_close', value: timeseries.data.values[1][4]},
            {name: 'day_three_open', value: timeseries.data.values[2][1]},
            {name: 'day_three_close', value: timeseries.data.values[2][4]},
            {name: 'day_four_open', value: timeseries.data.values[3][1]},
            {name: 'day_four_close', value: timeseries.data.values[3][4]},
            {name: 'day_five_open', value: timeseries.data.values[4][1]},
            {name: 'day_five_close', value: timeseries.data.values[4][4]},
            {name: 'day_six_open', value: timeseries.data.values[5][1]},
            {name: 'day_six_close', value: timeseries.data.values[5][4]},
            {name: 'day_seven_open', value: timeseries.data.values[6][1]},
            {name: 'day_seven_close', value: timeseries.data.values[6][4]},
        ]
    }
}