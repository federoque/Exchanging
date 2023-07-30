/* eslint-disable react/prop-types */
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

function Graph({data}) {
    const uvValues = data.map(item => item.value);
    const minValue = Math.min(...uvValues);
    const maxValue = Math.max(...uvValues);
  
    const yMargin = (maxValue - minValue) * 0.1 ; 
  
    const yDomain = [minValue - yMargin, maxValue + yMargin];
    return (
      <div style={{backgroundColor:"#111827"}}>
        <ResponsiveContainer width="100%" height={80} styl>
        <LineChart width={100} height={200} data={data}>
          <XAxis hide={true} interval={0} />
          <YAxis domain={yDomain} hide={true}/>
          <Line type="monotone" dataKey="value" stroke="#0450F4" dot={false}/>
        </LineChart>
    </ResponsiveContainer>
    </div>
    );
  }
  
  export default Graph