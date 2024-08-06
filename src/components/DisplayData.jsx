import React from 'react';

export default function DisplayData({data}){
    React.useEffect(() => {
        console.log("It worked");
    }, [data]);

    return(
        <div>
            {data ? (data.type) : (<p>No data available.</p>)}
        </div>
    )
}