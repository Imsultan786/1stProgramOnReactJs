import React from 'react';
import ReactDOM from 'react-dom';
import App from './Card';
import "./Card";
import Sdata from "./Sdata";
import "./index.css";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <h1 className='heading_style'>List of top 10 Netflix WebSeries</h1>
        <App imgsrc={Sdata[0].imgsrc}
            title={Sdata[0].title}
            sname={Sdata[0].sname}
            links={Sdata[0].links} />
        <App imgsrc={Sdata[1].imgsrc}
            title={Sdata[1].title}
            sname={Sdata[1].sname}
            links={Sdata[1].links} />
        <App imgsrc={Sdata[2].imgsrc}
            title={Sdata[2].title}
            sname={Sdata[2].sname}
            links={Sdata[2].links} />
        <App imgsrc={Sdata[3].imgsrc}
            title={Sdata[3].title}
            sname={Sdata[3].sname}
            links={Sdata[3].links} />
        <App imgsrc={Sdata[4].imgsrc}
            title={Sdata[4].title}
            sname={Sdata[4].sname}
            links={Sdata[4].links} />
        <App imgsrc={Sdata[5].imgsrc}
            title={Sdata[5].title}
            sname={Sdata[5].sname}
            links={Sdata[5].links} />
        <App imgsrc={Sdata[6].imgsrc}
            title={Sdata[6].title}
            sname={Sdata[6].sname}
            links={Sdata[6].links} />
        <App imgsrc={Sdata[7].imgsrc}
            title={Sdata[7].title}
            sname={Sdata[7].sname}
            links={Sdata[7].links} />
        <App imgsrc={Sdata[8].imgsrc}
            title={Sdata[8].title}
            sname={Sdata[8].sname}
            links={Sdata[8].links} />
        <App imgsrc={Sdata[9].imgsrc}
            title={Sdata[9].title}
            sname={Sdata[9].sname}
            links={Sdata[9].links} />

    </>
);