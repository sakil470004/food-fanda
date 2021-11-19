import React from 'react'
import './HomeDescription.css'
import pic1 from './1.png'
import pic2 from './2.png'
import pic3 from './3.png'
export default function HomeDescription() {
    return (
        <div>
            <div className='home-des-why'> <h1>Why you choose use</h1>
                <p>Barton waited twenty always repair in within we do. An delighted offending curiosity
                    <br /> my is dash woods at.Boy prosperous increasing surrounded</p></div>
            <div className='homeDes-full-cointainer'>
                {/* 1st box */}

                <div className='card-container-des tc  br4 dib bw2 pa4 ma2 '
                // onClick={handleButton}
                >
                    <img className='imageWidth-des br4' alt='drinks' src={pic1} />
                    <div>
                        <div className='small-pic-dev-des'>
                            <img className='small-pic-des' src='https://i.ibb.co/qWmXw8W//1.png' alt='imo' />
                            <h2>Fast Delivery</h2>
                        </div>
                        <div className='details-dev-des'>
                            <p>Keep your systems in sync with automated web hook based notification each time link is paid and how we dream about our future</p>
                            <h3>See more</h3>
                        </div>
                    </div>
                </div>
                {/* 2nd box */}
                <div className='card-container-des tc  br4 dib bw2  pa4 ma2 '
                // onClick={handleButton}
                >
                    <img className='imageWidth-des br4' alt='drinks' src={pic2} />
                    <div>
                        <div className='small-pic-dev-des'>
                            <img className='small-pic-des' src='https://i.ibb.co/r3TM1LB//2.png' alt='imo' />
                            <h2>Fast Delivery</h2>
                        </div>
                        <div className='details-dev-des'>
                            <p>Keep your systems in sync with automated web hook based notification each time link is paid and how we dream about our future</p>
                            <h3>See more</h3>
                        </div>
                    </div>
                </div>
                {/* 3rd box */}
                <div className='card-container-des tc  br4 dib bw2  pa4 ma2'
                // onClick={handleButton}
                >
                    <img className='imageWidth-des br4' src={pic3} alt='imokl' />
                    <div>
                        <div className='small-pic-dev-des'>
                            <img className='small-pic-des' alt='imo' src='https://i.ibb.co/jRjSVYq//3.png' />
                            <h2>Fast Delivery</h2>
                        </div>
                        <div className='details-dev-des'>
                            <p>Keep your systems in sync with automated web hook based notification each time link is paid and how we dream about our future</p>
                            <h3>See more</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


