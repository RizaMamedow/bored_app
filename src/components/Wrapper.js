/* eslint-disable eqeqeq */
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import ResultList from './ResultList';

const wrapperStyles = {
    minHeight: '100vh',
}

function Wrapper() {
    const [result, setResult] = useState([]);
    async function requestData(e) {
        e.preventDefault();
        const data = await fetch(
        `https://www.boredapi.com/api/activity`
        )
        .then((res) => res.json())
        .then((data) => data);
        
        setResult({ data: data });
    }

    return (
        <div className="wrapper"  style={wrapperStyles} id="wrapper">
            <div className="d-flex
                    justify-content-center
                    align-items-center flex-column" style={{ minHeight: 'inherit', }}>
                <div className="text-center">
                    <h1 style={{ fontWeight: "700" }} className="mb-0">Nothing to do?</h1>
                    <span className="mt-0" 
                        style={{ fontWeight: "600", fontSize: "16px" }}>We will solve it, click on the button below and we will help</span>
                </div>
                <div className="m-2 p-3">
                    <form>
                        <Button variant="outline-dark" size="lg" 
                                type="submit" onClick={ (e) => requestData(e) }>Randomize</Button>
                    </form>
                </div>

                {result.data != undefined ? (
                    <div style={{ border: '1px rgba(0,0,0,0.7) solid', borderRadius: '20px' }} className="m-3 p-4">
                        <ResultList data={result.data} />
                    </div>
                ) : null}
            </div>
        </div>
    );
}
  
export default Wrapper;
  