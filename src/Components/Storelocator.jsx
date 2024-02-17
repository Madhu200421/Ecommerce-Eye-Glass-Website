import React from 'react';
import './Storelocator.css';
import Footer from './Footer'; 
const Storelocator = () => {
    return (
        <>
            <h2 className='text'>Our Stores</h2>
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe
                        title="Google Map"
                        width="200%"
                        height="250%"
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?q=20/1E, Yamuna Sector Trivenipuram, Jhunsi, Allahabad – 211019 &t=&z=10&ie=UTF8&iwloc=&output=embed"

                        style={{ border: '0' }}
                    >
                     
                    </iframe>
                    <div>
                    <iframe
                        title="Google Map"
                        width="400%"
                        height="250%"

                        id="gmap_canvas2"
                        src="https://maps.google.com/maps?q=Power House Road, Police Chowki Rd, behind Amrit Sweet House, Jhusi, Uttar Pradesh  – 211019&t=&z=10&ie=UTF8&iwloc=&output=embed"
                        
                        style={{ border: '0' }}
                    >
                    </iframe>
                    <br />
                    </div>
              
                </div>
            </div>

            <div className='footer-con40'>
                <Footer></Footer>
            </div>
        </>
    );
};

export default Storelocator;