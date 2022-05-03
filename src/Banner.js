import React from 'react'
import line from "./images/line.png"
function Banner() {
    return (
        <>
            <div className='banner'>
                <div class='ban'>
                    <h1 className='headsize'>Gain And Share Your Financial Intelligence</h1>
                    <div className='line'>
                        <img src={line}


                            width="100% 100%"
                            className="img"
                            alt="React Bootstrap logo"
                        />
                    </div>
                    <p className='pera1'>To enrich the finacial Kownlledge among people and<br></br>
                        increase the proper Financial Activity<br></br>
                        among Them.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Banner;