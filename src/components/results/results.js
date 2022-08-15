import React from 'react';
import JSONPretty from 'react-json-pretty';

function Results({ data }) {
    return (
        <section>
            {/* <pre>{data ? JSON.stringify(data, undefined, 2) : null}</pre> */}
            <JSONPretty id="json-pretty" data={data} ></JSONPretty>
        </section>
    )
}

export default Results;